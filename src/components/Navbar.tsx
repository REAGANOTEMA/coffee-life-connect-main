import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, MapPin, User, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { branches } from '@/data/menuData';
import logoImg from '@/assets/logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    cartCount,
    setIsCartOpen,
    user,
    setIsAuthOpen,
    voiceEnabled,
    setVoiceEnabled,
    speak,
    selectedBranch,
    setSelectedBranch,
  } = useApp();

  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60" style={{ background: 'hsl(var(--coffee-espresso))' }}>
      {/* Top bar */}
      <div
        className="hidden md:flex items-center justify-between px-6 py-1.5 text-xs"
        style={{ background: 'hsl(var(--gold-dark))', color: 'hsl(var(--coffee-espresso))' }}
      >
        <div className="flex items-center gap-4 font-medium">
          <span className="flex items-center gap-1"><Phone size={12} /> 0746 888 730 / 0784 305 795</span>
          <span>|</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> 3 Locations: Jinja Highway • Jinja Lakeview • Kampala</span>
        </div>
        <span className="font-bold tracking-wide">EAT. MEET. WORK! ☕</span>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold ring-1 ring-offset-1"
            style={{ borderColor: 'hsl(var(--gold))' }}
          >
            <img
              src={logoImg}
              alt="Coffee Life Café"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div
              className="text-lg font-bold leading-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}
            >
              Coffee Life
            </div>
            <div
              className="text-xs tracking-widest uppercase"
              style={{ color: 'hsl(var(--gold))' }}
            >
              Café
            </div>
          </div>
        </Link>

        {/* Branch selector */}
        <div className="hidden lg:flex items-center gap-2">
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBranch(b.id)}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                selectedBranch === b.id ? 'text-foreground' : 'opacity-60 hover:opacity-80'
              }`}
              style={
                selectedBranch === b.id
                  ? { background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }
                  : { color: 'hsl(var(--cream))' }
              }
            >
              {b.shortName}
            </button>
          ))}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link text-sm font-medium transition-all duration-200 ${
                isActive(l.to) ? '' : 'opacity-80 hover:opacity-100'
              }`}
              style={{ color: isActive(l.to) ? 'hsl(var(--gold))' : 'hsl(var(--cream))' }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Voice guide */}
          <button
            onClick={() => {
              setVoiceEnabled(!voiceEnabled);
              if (!voiceEnabled) speak('Voice guide enabled! I will help you through the ordering process.');
            }}
            className="p-2 rounded-full transition-all duration-200 hover:opacity-80"
            style={{ color: voiceEnabled ? 'hsl(var(--gold))' : 'hsl(var(--cream) / 0.5)' }}
            title={voiceEnabled ? 'Disable voice guide' : 'Enable voice guide'}
          >
            {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* User */}
          <button
            onClick={() => setIsAuthOpen(true)}
            className="p-2 rounded-full transition-all duration-200 hover:opacity-80 relative"
            style={{ color: user ? 'hsl(var(--gold))' : 'hsl(var(--cream))' }}
            title={user ? user.name : 'Sign In'}
          >
            <User size={18} />
            {user && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400" />}
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              setIsCartOpen(true);
              speak(
                'Your cart is now open. Review your items, choose your delivery area, and proceed to payment.'
              );
            }}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }}
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold animate-bounce-in"
                style={{ background: 'hsl(var(--destructive))', color: 'white' }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'hsl(var(--cream))' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-4 animate-fade-up"
          style={{ background: 'hsl(var(--coffee-dark))' }}
        >
          {/* Branch selector mobile */}
          <div className="flex gap-2 flex-wrap">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBranch(b.id);
                  setMobileOpen(false);
                }}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
                  selectedBranch === b.id ? '' : 'opacity-60'
                }`}
                style={
                  selectedBranch === b.id
                    ? { background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }
                    : { background: 'hsl(var(--coffee-medium))', color: 'hsl(var(--cream))' }
                }
              >
                {b.shortName}
              </button>
            ))}
          </div>

          {/* Mobile nav links */}
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium py-1 border-b border-white/10"
              style={{ color: isActive(l.to) ? 'hsl(var(--gold))' : 'hsl(var(--cream))' }}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile auth button */}
          <button
            onClick={() => {
              setIsAuthOpen(true);
              setMobileOpen(false);
            }}
            className="text-left text-base font-medium py-1"
            style={{ color: 'hsl(var(--cream))' }}
          >
            {user ? `👤 ${user.name} (${user.role})` : '🔐 Sign In / Register'}
          </button>
        </div>
      )}
    </header>
  );
}