import { getMenu } from "@/services/menuService";
import { useEffect, useState } from "react";

export default function DesignerDashboard() {
  const [menu, setMenu] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getMenu();
      setMenu(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Full System Control</h2>

      <div className="grid grid-cols-3 gap-4">
        {menu.map(item => (
          <div key={item.id} className="bg-white p-4 shadow rounded">
            <p className="font-bold">{item.name}</p>
            <p>UGX {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}