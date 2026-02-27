import Table from '@/components/Table';
import { branches } from '@/data/branches';

export default function Branches() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Branches</h2>

      <Table
        data={branches}
        columns={[
          { key: 'name', label: 'Branch' },
          { key: 'manager', label: 'Manager' },
          { key: 'phone', label: 'Phone' },
        ]}
      />
    </div>
  );
}