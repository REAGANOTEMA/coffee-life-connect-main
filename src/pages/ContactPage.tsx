import { MapPin, Phone, Clock, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { branches } from '@/data/menuData';
import { useState } from 'react';
import {footer from} '@/components/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', branch: 'jinja-highway' });

  const handleWhatsApp = () => {
    const branch = branches.find(b => b.id === formData.branch);
    if (!branch?.whatsapp) return alert('WhatsApp number not available for this branch');

    const msg = encodeURIComponent(`Hi Coffee Life Café! My name is ${formData.name}.\n\n${formData.message}`);
    window.open(`https://wa.me/${branch.whatsapp.replace(/\D/g,'')}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="py-16 px-4 md:px-8 text-center" style={{ background: 'hsl(var(--coffee-espresso))' }}>
        <span className="text-sm font-semibold tracking-widest uppercase mb-2 block" style={{ color: 'hsl(var(--gold))' }}>
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
          Contact & Locations
        </h1>
        <p className="text-base" style={{ color: 'hsl(var(--cream) / 0.7)' }}>
          Visit us, call us, or send a WhatsApp — we're always ready to serve you
        </p>
      </div>

      <main className="flex-1 container mx-auto px-4 md:px-8 py-16">
        {/* Contact Form & Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Send Us a Message</h2>
            <div className="space-y-4">
              <InputField label="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <InputField label="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email"/>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Branch</label>
                <select value={formData.branch} onChange={e => setFormData({...formData, branch: e.target.value})} className="input-field">
                  {branches.map(b => <option key={b.id} value={b.id}>{b.shortName}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Message</label>
                <textarea rows={4} placeholder="Your message..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="input-field resize-none" />
              </div>
              <button onClick={handleWhatsApp} className="btn-gold w-full flex items-center justify-center gap-2">
                <MessageCircle size={18} /> Send via WhatsApp
              </button>
            </div>
          </div>

          <div>
            {/* Direct Contact */}
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Direct Contact</h2>
            <div className="space-y-4">
              {[{ icon: <Phone size={18} />, label: 'Phone', value: '0746 888 730 / 0784 305 795' },
                { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: '+256 746 888 730' },
                { icon: <Mail size={18} />, label: 'Email', value: 'info@coffeelifecafe.ug' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--secondary))', color: 'hsl(var(--primary))' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branches */}
        <h2 className="section-title mb-4">Our Café Locations</h2>
        <p className="section-subtitle mb-10">All branches are pinned on Google Maps with directions enabled</p>
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <div key={b.id} className="card-menu overflow-hidden">
              <div className="h-40 relative overflow-hidden" style={{ background: 'hsl(var(--muted))' }}>
                <iframe
                  title={b.name}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(b.address)}&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--coffee-espresso))' }}>
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{b.shortName}</h3>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: 'hsl(var(--gold))' }} />
                    {b.address}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={14} style={{ color: 'hsl(var(--gold))' }} /> {b.hours}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone size={14} style={{ color: 'hsl(var(--gold))' }} /> {b.phone}
                  </div>
                </div>
                <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: 'hsl(var(--primary))' }}>
                  Open in Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer/>
    </div>
  );
}

// Fixed InputField component
function InputField({ label, value, onChange, type = 'text' }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5">{label}</label>
      <input type={type} placeholder={label} value={value} onChange={onChange} className="input-field" />
    </div>
  );
}