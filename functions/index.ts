import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { mobileMoneyPayment } from './mobileMoney';
import { deductInventory } from './inventory';

admin.initializeApp();

export { mobileMoneyPayment, deductInventory };

export const onOrderPaid = functions.firestore
  .document('orders/{orderId}')
  .onUpdate(async (snap, context) => {
    const before = snap.before.data();
    const after = snap.after.data();

    if (before.status !== 'paid' && after.status === 'paid') {
      await deductInventory(after); // Auto-deduct inventory
    }
  });