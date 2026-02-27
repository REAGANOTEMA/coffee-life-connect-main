export type BranchId = 'jinja-highway' | 'jinja-lakeview' | 'kampala';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  popular?: boolean;
  isPromo?: boolean;
  promoLabel?: string;
  branches?: BranchId[];
  inStock?: boolean;
  tags?: string[];
}

export interface Order {
  id: string;
  customerName: string;
  items: { id: string; name: string; price: number; quantity: number }[];
  total: number;
  branch: BranchId;
  status: 'pending' | 'paid' | 'completed';
}