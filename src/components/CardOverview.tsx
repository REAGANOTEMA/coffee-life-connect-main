interface CardOverviewProps {
  title: string;
  value: number;
  icon: string;
}

export default function CardOverview({ title, value, icon }: CardOverviewProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="font-bold text-xl">{value.toLocaleString()}</p>
      </div>
    </div>
  );
}