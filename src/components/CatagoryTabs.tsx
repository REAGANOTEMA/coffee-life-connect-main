import { MenuCategory } from '@/data/menuData';

export default function CategoryTabs({
  categories,
  active,
  onChange,
}: {
  categories: MenuCategory[];
  active: MenuCategory;
  onChange: (c: MenuCategory) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto mb-6">
      {categories.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
            active === c ? 'bg-amber-500 text-white' : 'bg-gray-200'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}