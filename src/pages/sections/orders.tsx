import Table from '@/components/Table';

const orders = [
  { id: 'o1', customer: 'John', item: 'Latte', status: 'Pending' },
  { id: 'o2', customer: 'Mary', item: 'Cappuccino', status: 'Preparing' },
];

export default function Orders() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Orders</h2>

      <Table
        data={orders}
        columns={[
          { key: 'customer', label: 'Customer' },
          { key: 'item', label: 'Item' },
          { key: 'status', label: 'Status' },
        ]}
      />
    </div>
  );
}