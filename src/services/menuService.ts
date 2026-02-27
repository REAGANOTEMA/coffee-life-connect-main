import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

export const createMenuItem = (data: any) =>
  addDoc(collection(db, 'menu'), data);

export const getMenu = async () => {
  const snap = await getDocs(collection(db, 'menu'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const updateMenuItem = (id: string, data: any) =>
  updateDoc(doc(db, 'menu', id), data);

export const deleteMenuItem = (id: string) =>
  deleteDoc(doc(db, 'menu', id));