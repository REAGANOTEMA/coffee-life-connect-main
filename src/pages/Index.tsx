import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Phone, Star, ChevronRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { branches, branchMenus, formatUGX } from '@/data/menuData';
import heroCafeImg from '@/assets/hero-cafe.jpg';
import foodSpreadImg from '@/assets/food-spread.jpg';
import galleryCafeImg from '@/assets/gallery-cafe.jpg';
import MenuItemCard from '@/components/MenuItemCard';

export default function Index() {
  const { selectedBranch, setSelectedBranch, speak, setIsCartOpen } = useApp();
  const branch = branches.find(b => b.id === selectedBranch)!;
  const featuredItems = branchMenus[selectedBranch]?.filter(i => i.popular).slice(0, 6) || [];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCafeImg} alt="Coffee Life Café" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(25 60% 12% / 0.92) 0%, hsl(25 50% 20% / 0.75) 50%, transparent 100%)' }} />
        </div>

        <div className="relative container mx-auto px-4 md:px-8 py-24">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ background: 'hsl(var(--gold) / 0.2)', color: 'hsl(var(--gold))', border: '1px solid hsl(var(--gold) / 0.4)' }}>
              ☕ Welcome to Coffee Life Café
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
              Eat.{' '}
              <span style={{ color: 'hsl(var(--gold))' }}>Meet.</span>{' '}
              Work.
            </h1>
            <p className="text-xl mb-3" style={{ color: 'hsl(var(--cream) / 0.85)' }}>
              Specialty coffee, wholesome meals & a cozy workspace for dreamers and doers. 3 branches across Uganda.
            </p>
            <p className="text-sm mb-8" style={{ color: 'hsl(var(--gold-light))' }}>
              Designed &amp; Managed by <strong>Reagan Otema</strong>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/menu" onClick={() => speak('Welcome! Browse our delicious menu. Select your favourite items and add them to your cart. I will guide you through the process!')}
                className="btn-gold flex items-center gap-2 text-base">
                Browse Menu <ArrowRight size={18} />
              </Link>
              <button
                onClick={() => { setIsCartOpen(true); speak('Your cart is open. You can review your order and proceed to payment.'); }}
                className="btn-outline flex items-center gap-2 text-base"
                style={{ borderColor: 'hsl(var(--cream) / 0.5)', color: 'hsl(var(--cream))' }}>
                View Cart
              </button>
            </div>
          </div>
        </div>

        {/* Branch indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 flex-wrap px-4">
          {branches.map(b => (
            <button
              key={b.id}
              onClick={() => { setSelectedBranch(b.id); speak(`Branch switched to ${b.shortName}. The menu has been updated.`); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedBranch === b.id ? 'scale-105 shadow-lg' : 'opacity-70 hover:opacity-90'}`}
              style={selectedBranch === b.id ? { background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' } : { background: 'hsl(var(--coffee-espresso) / 0.8)', color: 'hsl(var(--cream))', backdropFilter: 'blur(8px)' }}>
              <MapPin size={14} /> {b.shortName}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: 'hsl(var(--gold))' }}>
            Most Loved
          </span>
          <h2 className="section-title">Popular at {branch.shortName}</h2>
          <p className="section-subtitle">Our customers' all-time favourites, freshly prepared every day</p>
          {/* Branch selector */}
          <div className="flex justify-center gap-2 flex-wrap mb-6">
            {branches.map(b => (
              <button key={b.id} onClick={() => setSelectedBranch(b.id)}
                className={`category-chip ${selectedBranch === b.id ? 'active' : ''}`}>
                {b.shortName}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {featuredItems.map(item => <MenuItemCard key={item.id} item={item} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
            Full Menu <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOD SPREAD BANNER */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-80 md:h-96">
          <img src={foodSpreadImg} alt="Our Food" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center" style={{ background: 'hsl(var(--coffee-espresso) / 0.7)' }}>
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
                Fresh. Local. <span style={{ color: 'hsl(var(--gold))' }}>Delicious.</span>
              </h2>
              <p className="text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--cream) / 0.85)' }}>
                From Ugandan classics to gourmet burgers — crafted with passion at every branch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEDNESDAY PROMO */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'hsl(var(--coffee-espresso))' }}>
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }}>
            🎉 EVERY WEDNESDAY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
            Buy 1 Get 1 Free
          </h2>
          <p className="text-xl mb-2" style={{ color: 'hsl(var(--gold-light))' }}>Burger Promotion</p>
          <p className="text-base mb-6" style={{ color: 'hsl(var(--cream) / 0.7)' }}>Delicious burger. Comes with chips and drinks, your perfect companion!</p>
          <div className="text-3xl font-bold mb-8" style={{ color: 'hsl(var(--gold))' }}>32,000 UGX</div>
          <Link to="/menu" className="btn-gold inline-flex items-center gap-2 text-base">
            Order Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <span className="text-sm font-semibold tracking-widest uppercase mb-3 block text-center" style={{ color: 'hsl(var(--gold))' }}>
          Find Us
        </span>
        <h2 className="section-title">Our 3 Locations</h2>
        <p className="section-subtitle">Each branch serves its own unique menu crafted for the local community</p>
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <div key={b.id} className="card-menu p-6 cursor-pointer hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedBranch(b.id)}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: 'hsl(var(--secondary))', color: 'hsl(var(--primary))' }}>
                  {i + 1}
                </div>
                {selectedBranch === b.id && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }}>
                    Selected
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{b.shortName}</h3>
              <p className="text-sm text-muted-foreground mb-3 flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: 'hsl(var(--gold))' }} />
                {b.address}
              </p>
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={13} style={{ color: 'hsl(var(--gold))' }} /> {b.hours}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={13} style={{ color: 'hsl(var(--gold))' }} /> {b.phone}
                </div>
              </div>
              <a href={b.mapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm font-semibold hover:underline"
                style={{ color: 'hsl(var(--primary))' }}
                onClick={e => e.stopPropagation()}>
                Get Directions <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SNIPPET */}
      <section className="py-20 px-4 md:px-8 bg-muted/40">
        <div className="container mx-auto">
          <h2 className="section-title">Our Story in Moments</h2>
          <p className="section-subtitle">Discover the spirit of Coffee Life, where aroma, art, and community blend perfectly</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[galleryCafeImg, heroCafeImg, foodSpreadImg, galleryCafeImg, heroCafeImg, foodSpreadImg].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer shadow-md">
                <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-outline inline-flex items-center gap-2">
              View Full Gallery <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / VISION */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase mb-3 block" style={{ color: 'hsl(var(--gold))' }}>Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Welcome to Coffee Life House</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Located across 3 vibrant locations in Uganda, Coffee Life Café is where flavor, comfort, and craft meet. We serve specialty coffee, wholesome meals, and provide a cozy workspace for dreamers and doers.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every cup we brew and every plate we serve reflects our passion for quality, community, and the rich East African culinary tradition.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '☕', label: 'Passion for Coffee & Quality' },
                { icon: '🤝', label: 'Friendly Service' },
                { icon: '💡', label: 'Creativity & Growth' },
                { icon: '🌍', label: 'Community First' },
              ].map(v => (
                <div key={v.label} className="flex items-start gap-3 p-3 rounded-xl bg-muted/40">
                  <span className="text-xl">{v.icon}</span>
                  <span className="text-sm font-medium">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={galleryCafeImg} alt="Coffee Life Team" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 p-4 rounded-xl shadow-lg" style={{ background: 'hsl(var(--coffee-espresso))' }}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="hsl(var(--gold))" style={{ color: 'hsl(var(--gold))' }} />)}
                </div>
                <span className="text-sm font-semibold" style={{ color: 'hsl(var(--cream))' }}>500+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 md:px-8 border-t border-border" style={{ background: 'hsl(var(--coffee-espresso))' }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>Coffee Life Café</h3>
              <p className="text-sm mb-4" style={{ color: 'hsl(var(--cream) / 0.65)' }}>
                Where flavor, comfort, and craft meet — specialty coffee, wholesome meals, and a cozy workspace for dreamers and doers.
              </p>
              <p className="text-xs font-semibold" style={{ color: 'hsl(var(--gold))' }}>Designed &amp; Managed by Reagan Otema</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3" style={{ color: 'hsl(var(--cream))' }}>Quick Links</h4>
              <div className="space-y-2">
                {[['Home', '/'], ['Menu', '/menu'], ['Gallery', '/gallery'], ['Contact', '/contact']].map(([label, to]) => (
                  <Link key={to} to={to} className="block text-sm hover:underline" style={{ color: 'hsl(var(--cream) / 0.65)' }}>{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3" style={{ color: 'hsl(var(--cream))' }}>Contact</h4>
              <div className="space-y-2 text-sm" style={{ color: 'hsl(var(--cream) / 0.65)' }}>
                <p>📞 0746 888 730</p>
                <p>📞 0784 305 795</p>
                <p>📍 Total Roundabout, Jinja</p>
                <p>📍 Total Lakeview, Jinja</p>
                <p>📍 Kansanga, Kampala</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-xs" style={{ borderColor: 'hsl(var(--cream) / 0.1)', color: 'hsl(var(--cream) / 0.4)' }}>
            © {new Date().getFullYear()} Coffee Life Café. All rights reserved. | Designed by Reagan Otema
          </div>
        </div>
      </footer>
    </div>
  );
}
