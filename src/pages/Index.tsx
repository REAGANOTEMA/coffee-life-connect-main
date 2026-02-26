import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { branches, branchMenus } from '@/data/menuData';
import Footer from '@/components/Footer'; // ✅ Professional Footer
import MenuItemCard from '@/components/MenuItemCard';

import hero1 from '@/assets/hero-cafe.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/mocha.jpg';
import hero4 from '@/assets/juie.jpg';
import hero5 from '@/assets/lounge-view.jpeg';
import foodSpreadImg from '@/assets/food-spread.jpg';
import galleryCafeImg from '@/assets/gallery-cafe.jpg';
import logoImg from '@/assets/logo.png'; // ✅ Page logo

export default function Index() {
  const { selectedBranch, setSelectedBranch, speak, setIsCartOpen } = useApp();
  const branch = branches.find(b => b.id === selectedBranch)!;
  const featuredItems = branchMenus[selectedBranch]?.filter(i => i.popular).slice(0, 6) || [];

  /* ================= HERO SLIDER ================= */
  const heroImages = [hero1, hero2, hero3, hero4, hero5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  /* =============================================== */

  return (
    <div className="min-h-screen flex flex-col">

      {/* ================= PAGE LOGO ================= */}
      <div className="py-6 px-4 md:px-8 text-center">
        <img src={logoImg} alt="Coffee Life Logo" className="mx-auto w-44 h-auto" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Coffee Life Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, hsl(25 60% 12% / 0.92) 0%, hsl(25 50% 20% / 0.75) 50%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 md:px-8 py-24">
          <div className="max-w-2xl animate-fade-up">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: 'hsl(var(--gold) / 0.2)',
                color: 'hsl(var(--gold))',
                border: '1px solid hsl(var(--gold) / 0.4)',
              }}
            >
              ☕ Welcome to Coffee Life Café
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}
            >
              Eat. <span style={{ color: 'hsl(var(--gold))' }}>Meet.</span> Work.
            </h1>

            <p className="text-xl mb-8" style={{ color: 'hsl(var(--cream) / 0.85)' }}>
              Specialty coffee, wholesome meals & a cozy workspace for dreamers and doers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                onClick={() =>
                  speak('Welcome! Browse our delicious menu and select your favourite items.')
                }
                className="btn-gold flex items-center gap-2 text-base"
              >
                Browse Menu <ArrowRight size={18} />
              </Link>

              <button
                onClick={() => {
                  setIsCartOpen(true);
                  speak('Your cart is open.');
                }}
                className="btn-outline flex items-center gap-2 text-base"
                style={{
                  borderColor: 'hsl(var(--cream) / 0.5)',
                  color: 'hsl(var(--cream))',
                }}
              >
                View Cart
              </button>
            </div>
          </div>
        </div>

        {/* Branch Selector */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 flex-wrap px-4">
          {branches.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedBranch === b.id ? 'scale-105 shadow-lg' : 'opacity-70 hover:opacity-90'
              }`}
              style={
                selectedBranch === b.id
                  ? { background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }
                  : {
                      background: 'hsl(var(--coffee-espresso) / 0.8)',
                      color: 'hsl(var(--cream))',
                      backdropFilter: 'blur(8px)',
                    }
              }
            >
              <MapPin size={14} /> {b.shortName}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FEATURED ITEMS ================= */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Popular at {branch.shortName}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {featuredItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
            Full Menu <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= GALLERY SNIPPET ================= */}
      <section className="py-20 px-4 md:px-8 bg-muted/40">
        <div className="container mx-auto">
          <h2 className="section-title">Our Story in Moments</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[galleryCafeImg, hero1, foodSpreadImg, hero2, hero3, hero4].map((img, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-300 shadow-md"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROFESSIONAL FOOTER ================= */}
      <Footer />
    </div>
  );
}