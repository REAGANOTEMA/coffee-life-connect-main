import { db } from '../firebase';

export async function predictTopItems(branch: string) {
  // Placeholder for AI integration
  // You can push order data to BigQuery + ML for future predictions
  const snapshot = await db.collection('orders')
    .where('branch', '==', branch)
    .orderBy('date', 'desc')
    .limit(50)
    .get();

  const itemsCount: Record<string, number> = {};
  snapshot.forEach(doc => {
    const order = doc.data();
    order.items.forEach((i: any) => itemsCount[i.name] = (itemsCount[i.name] || 0) + i.quantity);
  });

  return Object.entries(itemsCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
}