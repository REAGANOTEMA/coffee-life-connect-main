import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { branches, branchMenus, allCategories, categoryIcons, MenuCategory } from '@/data/menuData';
import MenuItemCard from '@/components/MenuItemCard';
import Footer from '@/components/footer';  // Capital F, proper quotes, semicolon
import logoImg from '@/assets/logo.png'; // ✅ Page logo

export default function MenuPage() {
  const { selectedBranch, setSelectedBranch, speak } = useApp();
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');
  const [search, setSearch] = useState('');

  const branch = branches.find(b => b.id === selectedBranch)!;
  const allItems = branchMenus[selectedBranch] || [];

  // Get categories available for this branch
  const availableCategories = useMemo(() => {
    const cats = new Set(allItems.map(i => i.category));
    return allCategories.filter(c => cats.has(c));
  }, [allItems]);

  const filtered = useMemo(() => {
    return allItems.filter(item => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [allItems, activeCategory, search]);

  const handleCategoryChange = (cat: MenuCategory | 'All') => {
    setActiveCategory(cat);
    if (cat !== 'All') speak(`Showing ${cat}. Browse and tap Add to include items in your cart.`);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* ================= PAGE LOGO ================= */}
      <div className="py-6 px-4 md:px-8 text-center">
        <img src={logoImg} alt="Coffee Life Logo" className="mx-auto w-44 h-auto" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="py-12 px-4 md:px-8 text-center" style={{ background: 'hsl(var(--coffee-espresso))' }}>
        <span className="text-sm font-semibold tracking-widest uppercase mb-2 block" style={{ color: 'hsl(var(--gold))' }}>
          Browse & Order
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
          Our Menu
        </h1>
        <p className="text-base mb-6" style={{ color: 'hsl(var(--cream) / 0.7)' }}>
          Select your branch, browse sections, and add items to your cart. Voice guide will assist you.
        </p>

        {/* Branch selector */}
        <div className="flex justify-center flex-wrap gap-3">
          {branches.map(b => (
            <button
              key={b.id}
              onClick={() => { setSelectedBranch(b.id); speak(`Branch switched to ${b.shortName}.`); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedBranch === b.id ? 'scale-105' : 'opacity-60 hover:opacity-80'}`}
              style={
                selectedBranch === b.id
                  ? { background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }
                  : { background: 'hsl(var(--cream) / 0.1)', color: 'hsl(var(--cream))', border: '1px solid hsl(var(--cream) / 0.3)' }
              }
            >
              {b.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
        <div className="container mx-auto">
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-field pl-10 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* ================= MENU GRID ================= */}
      <div className="container mx-auto px-4 md:px-8 py-8 flex-1">

        {/* Category chips */}
        <div className="flex gap-2 flex-wrap mb-8">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`category-chip ${activeCategory === 'All' ? 'active' : ''}`}
          >
            🍽️ All Items ({allItems.length})
          </button>
          {availableCategories.map(cat => (
            <button key={cat} onClick={() => handleCategoryChange(cat)} className={`category-chip ${activeCategory === cat ? 'active' : ''}`}>
              {categoryIcons[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">
            {activeCategory === 'All' ? `All Items` : activeCategory}
            <span className="ml-2 text-sm font-normal text-muted-foreground">({filtered.length} items)</span>
          </h2>
          <div className="text-sm text-muted-foreground hidden md:block">
            📍 {branch.name}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-medium">No items found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map(item => <MenuItemCard key={item.id} item={item} />)}
          </div>
        )}
      </div>

      {/* ================= HOW TO ORDER ================= */}
      <section className="py-16 px-4 md:px-8 bg-muted/40 border-t border-border">
        <div className="container mx-auto">
          <h2 className="section-title mb-2">How to Order</h2>
          <p className="section-subtitle mb-10">Simple steps to get your food delivered</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', icon: '🍽️', title: 'Browse Menu', desc: 'Choose your branch and browse through our delicious categories' },
              { step: '2', icon: '🛒', title: 'Add to Cart', desc: 'Tap "Add" on items you love. Voice guide will assist you along the way' },
              { step: '3', icon: '💳', title: 'Pay via MoMo', desc: 'Dial *165# for MTN or *185# for Airtel to send payment to our merchant code' },
              { step: '4', icon: '📱', title: 'Send via WhatsApp', desc: 'Confirm your order and send it directly to the kitchen via WhatsApp' },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-md" style={{ background: 'hsl(var(--secondary))' }}>
                  {s.icon}
                </div>
                <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: 'hsl(var(--gold))' }}>Step {s.step}</div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* ================= PROFESSIONAL FOOTER ================= */}
      <Footer/>
    </div>
  );
}