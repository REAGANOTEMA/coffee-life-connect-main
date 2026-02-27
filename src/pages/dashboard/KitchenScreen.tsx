import { useEffect, useState } from "react";
import { listenOrders, updateOrderStatus } from "@/services/ordersService";

export default function KitchenScreen() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const unsub = listenOrders(setOrders);
    return () => unsub();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {orders.map(o => (
        <div key={o.id} className="bg-yellow-100 p-4 rounded">
          <p className="font-bold">{o.customer}</p>
          <p>{o.status}</p>

          <button
            onClick={() => updateOrderStatus(o.id, "ready")}
            className="bg-green-600 text-white px-3 py-1 mt-2 rounded"
          >
            Mark Ready
          </button>
        </div>
      ))}
    </div>
  );
}