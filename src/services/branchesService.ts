import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const getBranches = async () => {
  const snap = await getDocs(collection(db, 'branches'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const createBranch = (data: any) =>
  addDoc(collection(db, 'branches'), data);