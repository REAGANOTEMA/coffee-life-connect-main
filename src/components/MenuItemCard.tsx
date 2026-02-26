import { Plus, Star, Zap } from 'lucide-react';
import { MenuItem, formatUGX } from '@/data/menuData';
import { useApp } from '@/context/AppContext';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const { addToCart, cart } = useApp();
  const inCart = cart.find(i => i.id === item.id);
  
  const categoryEmojis: Record<string, string> = {
    'Pastries & Cakes': '🥐', 'Light Bites': '🥗', 'Breakfast': '🍳',
    'Beef Dishes': '🥩', 'Goat Dishes': '🍖', 'Local Food': '🍛',
    'Pizzas': '🍕', 'Burgers': '🍔', 'Curries & Soups': '🍲',
    'Beverages': '☕', 'Juices & Smoothies': '🥤', 'Soft Drinks': '🧃',
    'Quesadillas': '🌮', 'Lunch & Dinner': '🍽️',
  };

  return (
    <div className={`card-menu flex flex-col h-full ${item.isPromo ? 'ring-2 ring-offset-1 ring-gold' : ''}`}>
      {/* Image / Emoji placeholder */}
      <div className="relative h-32 flex items-center justify-center text-6xl overflow-hidden"
        style={{ background: item.isPromo ? 'linear-gradient(135deg, hsl(43 85% 46% / 0.15), hsl(25 67% 33% / 0.1))' : 'hsl(var(--muted))' }}>
        <span className="select-none">{categoryEmojis[item.category] || '🍽️'}</span>
        {item.isPromo && (
          <div className="absolute top-2 left-2">
            <span className="badge-promo flex items-center gap-1">
              <Zap size={10} /> {item.promoLabel}
            </span>
          </div>
        )}
        {item.popular && !item.isPromo && (
          <div className="absolute top-2 right-2">
            <span className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'hsl(var(--coffee-medium))', color: 'hsl(var(--cream))' }}>
              <Star size={9} fill="currentColor" /> Popular
            </span>
          </div>
        )}
        {inCart && (
          <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
            {inCart.quantity}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 mb-1">{item.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 flex-1 mb-3">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm" style={{ color: 'hsl(var(--gold-dark))' }}>{formatUGX(item.price)}</span>
          <button
            onClick={() => addToCart(item)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95"
            style={item.isPromo ? { background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' } : { background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
          >
            <Plus size={12} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
