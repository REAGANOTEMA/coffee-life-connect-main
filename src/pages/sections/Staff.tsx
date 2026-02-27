import Table from '@/components/Table';
import { users } from '@/data/users';

export default function Staff() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Staff</h2>

      <Table
        data={users}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'branch', label: 'Branch' },
        ]}
      />
    </div>
  );
}