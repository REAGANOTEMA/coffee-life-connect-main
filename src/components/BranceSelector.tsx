import { Branch } from '@/data/menuData';

export default function BranchSelector({
  branches,
  active,
  onChange,
}: {
  branches: Branch[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex gap-3 mb-6">
      {branches.map(b => (
        <button
          key={b.id}
          onClick={() => onChange(b.id)}
          className={`px-4 py-2 rounded-xl ${
            active === b.id ? 'bg-black text-white' : 'bg-gray-200'
          }`}
        >
          {b.shortName}
        </button>
      ))}
    </div>
  );
}