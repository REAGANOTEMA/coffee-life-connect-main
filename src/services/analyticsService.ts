import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getSalesData = async () => {
  const snap = await getDocs(collection(db, 'orders'));

  return snap.docs.map(d => d.data());
};

export const calculateDailySales = async () => {
  const orders = await getSalesData();

  const map: Record<string, number> = {};

  orders.forEach((o: any) => {
    const day = o.createdAt?.toDate?.().toISOString().slice(0, 10);
    if (!day) return;
    map[day] = (map[day] || 0) + (o.total || 0);
  });

  return Object.entries(map).map(([date, total]) => ({ date, total }));
};