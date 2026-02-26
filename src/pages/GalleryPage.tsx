import heroCafeImg from '@/assets/manager-staff.jpeg';
import foodSpreadImg from '@/assets/chefs1.jpeg';
import galleryCafeImg from '@/assets/space2.jpg';
import logoImg from '@/assets/logo.png';
import Footer from '@/components/footer';

const galleryItems = [
  { img: heroCafeImg, caption: 'Welcome to Coffee Life House', desc: 'Located opposite the Police Barracks, Jinja, every aroma tells a story.' },
  { img: galleryCafeImg, caption: 'Our Team — The Heart Behind the Experience', desc: 'Passionate people crafting every cup and plate with care.' },
  { img: foodSpreadImg, caption: 'Craft & Care, in Every Cup & Plate', desc: 'From specialty coffee to gourmet meals, made fresh daily.' },
  { img: heroCafeImg, caption: 'Morning Aroma, Brewed with Passion', desc: 'Rise and shine with our specialty morning brews.' },
  { img: galleryCafeImg, caption: 'The Lounge — Comfort Meets Elegance', desc: 'A cozy haven for work, meetings, and relaxation.' },
  { img: foodSpreadImg, caption: 'Coffee Life Café Vibes', desc: 'Experience our people, our rhythm, our craft — the heartbeat of Jinja.' },
  { img: heroCafeImg, caption: 'Total Comforts & Warm Welcomes', desc: 'A place that makes you feel right at home.' },
  { img: galleryCafeImg, caption: 'The CEO\'s Family — Warmth & Togetherness', desc: 'Where warmth, grace, and togetherness inspire every cup we serve.' },
  { img: foodSpreadImg, caption: 'Warm Welcomes, Smiles That Brew Happiness', desc: 'Every visit starts with a genuine smile.' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Logo */}
      <div className="py-6 px-4 md:px-8 text-center">
        <img src={logoImg} alt="Coffee Life Logo" className="mx-auto" width={180} height={60} />
      </div>

      {/* Header */}
      <div className="py-10 px-4 md:px-8 text-center" style={{ background: 'hsl(var(--coffee-espresso))' }}>
        <span className="text-sm font-semibold tracking-widest uppercase mb-2 block" style={{ color: 'hsl(var(--gold))' }}>
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
          Gallery
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: 'hsl(var(--cream) / 0.7)' }}>
          Discover the spirit of Coffee Life, where aroma, art, and community blend perfectly in Uganda
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16 flex-1">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img src={item.img} alt={item.caption} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, hsl(var(--coffee-espresso) / 0.9), transparent)' }}>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: 'hsl(var(--cream))' }}>{item.caption}</h3>
                    <p className="text-xs mt-1" style={{ color: 'hsl(var(--gold-light))' }}>{item.desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-card border-t border-border">
                <h3 className="font-semibold text-sm mb-1">{item.caption}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shared Footer */}
      <footer/>
    </div>
  );
}