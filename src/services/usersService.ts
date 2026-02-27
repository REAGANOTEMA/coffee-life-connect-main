import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';

export const saveUserProfile = async (userId: string, data: any) => {
  return setDoc(doc(db, 'users', userId), data);
};

export const getUserProfile = async (userId: string) => {
  const snap = await getDoc(doc(db, 'users', userId));
  return snap.exists() ? snap.data() : null;
};

export const getAllUsers = async () => {
  const snap = await getDocs(collection(db, 'users'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};