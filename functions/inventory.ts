import * as admin from 'firebase-admin';
import { Order } from './types';

export async function deductInventory(order: Order) {
  const db = admin.firestore();
  const batch = db.batch();

  order.items.forEach(item => {
    const ref = db.collection('inventory').doc(item.id);
    batch.update(ref, { quantity: admin.firestore.FieldValue.increment(-item.quantity) });
  });

  await batch.commit();
}