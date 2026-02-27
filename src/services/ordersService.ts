import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc
} from 'firebase/firestore';

export const createOrder = async (order: any) => {
  return addDoc(collection(db, 'orders'), {
    ...order,
    status: 'pending',
    createdAt: serverTimestamp()
  });
};

export const listenOrders = (callback: (orders: any[]) => void) => {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));

  return onSnapshot(q, snap => {
    const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(data);
  });
};

export const updateOrderStatus = (orderId: string, status: string) =>
  updateDoc(doc(db, 'orders', orderId), { status });