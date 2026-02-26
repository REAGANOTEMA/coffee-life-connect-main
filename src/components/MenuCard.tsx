import { MenuItem } from '@/data/menuData';

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="card-menu">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-xl mb-3"
        />
      )}

      <div className="flex justify-between items-start">
        <h3 className="font-bold">{item.name}</h3>
        <span className="font-semibold">UGX {item.price.toLocaleString()}</span>
      </div>

      <p className="text-sm text-muted-foreground">{item.description}</p>

      {item.popular && (
        <div className="text-xs mt-2 text-amber-600 font-semibold">
          ⭐ Popular
        </div>
      )}
    </div>
  );
}