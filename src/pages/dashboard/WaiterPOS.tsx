import { useState } from "react";
import { createOrder } from "@/services/ordersService";

export default function WaiterPOS() {
  const [customer, setCustomer] = useState("");
  const [total, setTotal] = useState(0);

  const handleCreate = async () => {
    await createOrder({
      customer,
      total,
      branch: "Jinja Highway"
    });

    alert("Order sent to kitchen!");
  };

  return (
    <div className="max-w-md space-y-4">
      <h2 className="text-xl font-bold">Waiter POS</h2>

      <input
        placeholder="Customer Name"
        value={customer}
        onChange={e => setCustomer(e.target.value)}
        className="w-full border p-2"
      />

      <input
        placeholder="Total Amount"
        type="number"
        value={total}
        onChange={e => setTotal(Number(e.target.value))}
        className="w-full border p-2"
      />

      <button
        onClick={handleCreate}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create Order
      </button>
    </div>
  );
}