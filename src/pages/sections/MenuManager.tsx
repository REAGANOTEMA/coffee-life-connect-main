import menuData from '@/data/menuData';
import formatUGX from '@/utils/formatUGX';

export default function MenuManager() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-6">Menu Manager</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuData.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow overflow-hidden">
            <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />

            <div className="p-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">{item.category}</p>
              <p className="font-bold">{formatUGX(item.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}