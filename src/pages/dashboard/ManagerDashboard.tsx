import { useEffect, useState } from "react";
import { listenOrders } from "@/services/ordersService";

export default function ManagerDashboard() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const unsub = listenOrders(setOrders);
    return () => unsub();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Branch Orders</h2>

      <div className="grid gap-4">
        {orders.map(o => (
          <div key={o.id} className="bg-white p-4 rounded shadow">
            <p><strong>Customer:</strong> {o.customer}</p>
            <p><strong>Status:</strong> {o.status}</p>
            <p><strong>Total:</strong> UGX {o.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}