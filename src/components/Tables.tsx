interface Column<T> {
  key: keyof T;
  label: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export default function Table<T extends { id: string }>({ data, columns }: TableProps<T>) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            {columns.map(c => (
              <th key={String(c.key)} className="p-3">{c.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map(row => (
            <tr key={row.id} className="border-t">
              {columns.map(c => (
                <td key={String(c.key)} className="p-3">
                  {String(row[c.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}