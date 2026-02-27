import { db } from '@/firebase';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { MenuItem, branchMenus } from '@/data/menuData';

/**
 * Predict top-selling menu items for a branch
 * Returns: [MenuItem, soldQuantity][]
 */
export async function predictTopItems(branchId: string): Promise<[MenuItem, number][]> {
  try {
    if (!branchId) return [];

    const ordersRef = collection(db, 'orders');

    const q = query(
      ordersRef,
      where('branch', '==', branchId),
      orderBy('date', 'desc'),
      limit(50)
    );

    const snapshot = await getDocs(q);

    // Use Map (better performance)
    const itemsCount = new Map<string, number>();

    snapshot.forEach(docSnap => {
      const order: any = docSnap.data();

      if (!order?.items || !Array.isArray(order.items)) return;

      for (const item of order.items) {
        if (!item?.name) continue;

        const qty = Number(item.quantity) || 0;
        itemsCount.set(item.name, (itemsCount.get(item.name) || 0) + qty);
      }
    });

    if (!itemsCount.size) return [];

    // Sort top items
    const sorted = [...itemsCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const menu = branchMenus[branchId] || [];

    const result: [MenuItem, number][] = [];

    for (const [name, qty] of sorted) {
      const menuItem = menu.find(m => m.name === name);
      if (menuItem) result.push([menuItem, qty]);
    }

    return result;
  } catch (error: any) {
    /**
     * Firestore index error is common:
     * This happens first time you deploy.
     */
    console.error('predictTopItems error:', error?.message || error);
    return [];
  }
}