import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc
} from 'firebase/firestore';

export const addStockItem = (data: any) =>
  addDoc(collection(db, 'inventory'), data);

export const getInventory = async () => {
  const snap = await getDocs(collection(db, 'inventory'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const updateStock = (id: string, data: any) =>
  updateDoc(doc(db, 'inventory', id), data);