import { useEffect, useState } from "react";
import { getSalesData } from "@/services/analyticsService";
import { getAllUsers } from "@/services/usersService";
import { getBranches } from "@/services/branchesService";

export default function DirectorDashboard() {
  const [sales, setSales] = useState(0);
  const [users, setUsers] = useState(0);
  const [branches, setBranchesState] = useState(0);

  useEffect(() => {
    async function load() {
      const salesData = await getSalesData();
      const total = salesData.reduce((a: any, b: any) => a + (b.total || 0), 0);
      setSales(total);

      const u = await getAllUsers();
      setUsers(u.length);

      const b = await getBranches();
      setBranchesState(b.length);
    }
    load();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      <Card title="Total Sales" value={`UGX ${sales.toLocaleString()}`} />
      <Card title="Total Users" value={users} />
      <Card title="Branches" value={branches} />
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}