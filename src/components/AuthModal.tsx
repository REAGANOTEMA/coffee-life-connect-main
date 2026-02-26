import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { useApp, UserRole, User } from '@/context/AppContext';

const ROLES: { value: UserRole; label: string; description: string; icon: string }[] = [
  { value: 'customer', label: 'Customer', description: 'Order food & track orders', icon: '👤' },
  { value: 'director', label: 'Café Director', description: 'Full management access', icon: '👑' },
  { value: 'manager', label: 'Branch Manager', description: 'Branch operations access', icon: '🏢' },
  { value: 'chef', label: 'Chef / Kitchen', description: 'View kitchen orders', icon: '👨‍🍳' },
  { value: 'waiter', label: 'Waiter / Service', description: 'Table & order service', icon: '🛎️' },
  { value: 'designer', label: 'Designer (Reagan)', description: 'Full system control', icon: '🎨' },
];

// Demo credentials for each role
const DEMO_USERS: Record<string, User> = {
  'customer@coffeelife.ug': { id: '1', name: 'Guest Customer', email: 'customer@coffeelife.ug', role: 'customer' },
  'director@coffeelife.ug': { id: '2', name: 'Café Director', email: 'director@coffeelife.ug', role: 'director' },
  'manager@coffeelife.ug': { id: '3', name: 'Branch Manager', email: 'manager@coffeelife.ug', role: 'manager', branch: 'jinja-highway' },
  'chef@coffeelife.ug': { id: '4', name: 'Head Chef', email: 'chef@coffeelife.ug', role: 'chef', branch: 'jinja-highway' },
  'waiter@coffeelife.ug': { id: '5', name: 'Service Waiter', email: 'waiter@coffeelife.ug', role: 'waiter', branch: 'jinja-highway' },
  'reagan@coffeelife.ug': { id: '6', name: 'Reagan Otema', email: 'reagan@coffeelife.ug', role: 'designer' },
};

export default function AuthModal() {
  const { isAuthOpen, setIsAuthOpen, user, setUser, speak } = useApp();
  const [mode, setMode] = useState<'login' | 'register' | 'role'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (!isAuthOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const found = DEMO_USERS[email.toLowerCase()];
    if (found) {
      setUser(found);
      setIsAuthOpen(false);
      speak(`Welcome back, ${found.name}! You are signed in as ${found.role}.`);
    } else {
      setError('Invalid credentials. Try demo accounts below.');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { id: Date.now().toString(), name: name || email.split('@')[0], email, role: selectedRole };
    setUser(newUser);
    setIsAuthOpen(false);
    speak(`Welcome to Coffee Life Café, ${newUser.name}! Your account has been created.`);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthOpen(false);
    speak('You have been signed out. See you soon at Coffee Life Café!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsAuthOpen(false)}>
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-bounce-in"
        onClick={e => e.stopPropagation()}
        style={{ background: 'hsl(var(--card))' }}
      >
        {/* Header */}
        <div className="p-6 border-b border-border" style={{ background: 'hsl(var(--coffee-espresso))' }}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
                {user ? '👤 Account' : mode === 'login' ? '🔐 Sign In' : '✨ Create Account'}
              </h2>
              <p className="text-xs mt-1" style={{ color: 'hsl(var(--gold))' }}>Coffee Life Café</p>
            </div>
            <button onClick={() => setIsAuthOpen(false)} style={{ color: 'hsl(var(--cream))' }}><X size={20} /></button>
          </div>
        </div>

        <div className="p-6">
          {/* Logged in view */}
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl" style={{ background: 'hsl(var(--secondary))' }}>
                  {ROLES.find(r => r.value === user.role)?.icon}
                </div>
                <div>
                  <div className="font-bold text-lg">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                  <div className="text-xs font-semibold mt-1 px-2 py-0.5 rounded-full inline-block" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }}>
                    {ROLES.find(r => r.value === user.role)?.label}
                  </div>
                </div>
              </div>
              {user.branch && <p className="text-sm text-muted-foreground">Branch: <strong>{user.branch}</strong></p>}
              <button onClick={handleLogout} className="w-full py-3 rounded-xl font-semibold text-sm border-2 border-destructive text-destructive hover:bg-destructive hover:text-white transition-all duration-200">
                Sign Out
              </button>
            </div>
          ) : mode === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="input-field" required />
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold mb-1.5">Password</label>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="input-field pr-12" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-muted-foreground">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <button type="submit" className="btn-primary w-full text-center">Sign In</button>
              
              {/* Demo accounts */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2 font-medium">Demo accounts (any password):</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {Object.entries(DEMO_USERS).map(([email, u]) => (
                    <button key={email} type="button" onClick={() => { setEmail(email); setPassword('demo123'); }}
                      className="text-left text-xs p-2 rounded-lg border border-border hover:border-primary transition-colors">
                      {ROLES.find(r => r.value === u.role)?.icon} {u.role}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <button type="button" onClick={() => setMode('register')} className="font-semibold hover:underline" style={{ color: 'hsl(var(--primary))' }}>Register</button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5">Full Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" className="input-field" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="input-field" required />
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold mb-1.5">Password</label>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Create a password" className="input-field pr-12" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-muted-foreground">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">I am a...</label>
                <div className="grid grid-cols-2 gap-2">
                  {ROLES.map(r => (
                    <button key={r.value} type="button" onClick={() => setSelectedRole(r.value)}
                      className={`p-2.5 rounded-xl border-2 text-left transition-all duration-200 ${selectedRole === r.value ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'}`}>
                      <div className="text-lg">{r.icon}</div>
                      <div className="text-xs font-semibold mt-0.5">{r.label}</div>
                      <div className="text-xs text-muted-foreground">{r.description}</div>
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn-gold w-full text-center">Create Account</button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <button type="button" onClick={() => setMode('login')} className="font-semibold hover:underline" style={{ color: 'hsl(var(--primary))' }}>Sign In</button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
