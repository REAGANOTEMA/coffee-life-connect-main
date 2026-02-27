// ================= FIREBASE CORE =================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, orderBy, limit, getDocs, addDoc, serverTimestamp, doc, updateDoc, increment } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// ================= FIREBASE CONFIG =================
const firebaseConfig = {
  apiKey: "AIzaSyAkhYErI9i0HeGaZXKf-6ajhZc7cIZBVxI",
  authDomain: "coffeeliferesturant.firebaseapp.com",
  projectId: "coffeeliferesturant",
  storageBucket: "coffeeliferesturant.firebasestorage.app",
  messagingSenderId: "659723524994",
  appId: "1:659723524994:web:b9aea05ea576a7b1a20d9b",
};

// ================= INIT =================
const app = initializeApp(firebaseConfig);

// ================= SERVICES =================
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

/* =====================================================
   ================= HELPER FUNCTIONS ===================
   ===================================================== */

/**
 * Fetch recent orders (AI / dashboard / CEO analytics)
 */
export async function fetchRecentOrders(branch: string, limitCount = 50) {
  const q = query(
    collection(db, "orders"),
    where("branch", "==", branch),
    orderBy("date", "desc"),
    limit(limitCount)
  );

  const snapshot = await getDocs(q);

  const orders: any[] = [];
  snapshot.forEach(doc => orders.push({ id: doc.id, ...doc.data() }));
  return orders;
}

/**
 * Predict top items (basic AI logic)
 */
export async function predictTopItems(branch: string) {
  const orders = await fetchRecentOrders(branch);

  const itemsCount: Record<string, number> = {};

  orders.forEach(order => {
    order.items?.forEach((i: any) => {
      itemsCount[i.name] = (itemsCount[i.name] || 0) + i.quantity;
    });
  });

  return Object.entries(itemsCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));
}

/**
 * Create order (VERY IMPORTANT — used everywhere)
 */
export async function createOrder(order: any) {
  const ref = await addDoc(collection(db, "orders"), {
    ...order,
    date: serverTimestamp(),
    status: "pending",
  });

  return ref.id;
}

/**
 * Inventory auto deduct (restaurant production logic)
 */
export async function deductInventory(items: any[]) {
  for (const item of items) {
    if (!item.inventoryId || !item.quantity) continue;

    const ref = doc(db, "inventory", item.inventoryId);

    await updateDoc(ref, {
      stock: increment(-item.quantity),
    });
  }
}