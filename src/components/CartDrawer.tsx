import { useState } from 'react';
import { X, Minus, Plus, Trash2, MessageCircle, MapPin, CreditCard, Star } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { branches, formatUGX } from '@/data/menuData';

export default function CartDrawer() {
  const {
    cart, removeFromCart, updateQuantity, clearCart,
    cartTotal, isCartOpen, setIsCartOpen,
    selectedBranch, setSelectedBranch,
    selectedDeliveryArea, setSelectedDeliveryArea,
    speak,
  } = useApp();

  const [paymentMethod, setPaymentMethod] = useState<'mtn' | 'airtel' | ''>('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'review'>('cart');

  const branch = branches.find(b => b.id === selectedBranch)!;
  const deliveryAreaObj = branch.deliveryAreas.find(a => a.name === selectedDeliveryArea);
  const deliveryFee = deliveryAreaObj?.fee ?? 0;
  const grandTotal = cartTotal + deliveryFee;

  const buildWhatsAppMessage = () => {
    const items = cart.map(i => `• ${i.name} x${i.quantity} — ${formatUGX(i.price * i.quantity)}`).join('\n');
    const msg = `🛒 *ORDER — Coffee Life Café (${branch.shortName})*\n\n${items}\n\n📦 Delivery to: ${selectedDeliveryArea || 'Pickup'}\n🚚 Delivery fee: ${formatUGX(deliveryFee)}\n💰 *TOTAL: ${formatUGX(grandTotal)}*\n\n💳 Payment: ${paymentMethod === 'mtn' ? 'MTN MoMo — Merchant: 971714' : paymentMethod === 'airtel' ? 'Airtel Money — Merchant: 4393386' : 'Cash'}\n\n${feedback ? `⭐ Feedback: ${feedback}` : ''}\n\nThank you! ☕`;
    return encodeURIComponent(msg);
  };

  const handleSendOrder = () => {
    speak('Your order is being sent to our kitchen via WhatsApp. Thank you for choosing Coffee Life Café!');
    const url = `https://wa.me/${branch.kitchenWhatsapp.replace(/\D/g, '')}?text=${buildWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const goToStep = (s: typeof step) => {
    setStep(s);
    if (s === 'cart') speak('Review your cart items. You can adjust quantities or remove items.');
    if (s === 'delivery') speak('Please select your branch and delivery area. This determines your delivery fee.');
    if (s === 'payment') speak('Choose your payment method. We accept MTN Mobile Money and Airtel Money. Dial star 165 hash for MTN or star 185 hash for Airtel to complete payment before sending your order.');
    if (s === 'review') speak('Almost done! Please rate your experience and then send your order via WhatsApp to our kitchen.');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setIsCartOpen(false)}>
      <div
        className="cart-drawer animate-slide-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border" style={{ background: 'hsl(var(--coffee-espresso))' }}>
          <h2 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(var(--cream))' }}>
            {step === 'cart' && '🛒 Your Cart'}
            {step === 'delivery' && '📍 Delivery Details'}
            {step === 'payment' && '💳 Payment'}
            {step === 'review' && '⭐ Review & Send'}
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--cream))' }}>
            <X size={20} />
          </button>
        </div>

        {/* Step indicators */}
        <div className="flex items-center px-4 py-3 gap-1 text-xs border-b border-border bg-muted/40">
          {['cart', 'delivery', 'payment', 'review'].map((s, i) => (
            <div key={s} className="flex items-center gap-1">
              <button
                onClick={() => cart.length > 0 && goToStep(s as typeof step)}
                className={`flex items-center justify-center w-6 h-6 rounded-full font-bold transition-all duration-200 ${step === s ? 'text-foreground scale-110' : 'opacity-40'}`}
                style={step === s ? { background: 'hsl(var(--gold))' } : { background: 'hsl(var(--muted))' }}
              >
                {i + 1}
              </button>
              {i < 3 && <div className={`h-0.5 w-6 ${step === s || ['delivery', 'payment', 'review'].indexOf(step) > i ? 'opacity-80' : 'opacity-20'}`} style={{ background: 'hsl(var(--gold))' }} />}
            </div>
          ))}
          <span className="ml-1 font-medium text-muted-foreground capitalize">{step}</span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <div className="text-5xl mb-4">🛒</div>
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Browse our menu to add delicious items</p>
            </div>
          ) : (
            <>
              {/* STEP 1: Cart */}
              {step === 'cart' && (
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{item.name}</div>
                        {item.isPromo && <span className="badge-promo text-xs">🎉 {item.promoLabel}</span>}
                        <div className="text-sm font-bold mt-1" style={{ color: 'hsl(var(--gold-dark))' }}>{formatUGX(item.price)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full flex items-center justify-center transition-colors" style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>
                          <Plus size={12} />
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 rounded-full flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors ml-1">
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button onClick={clearCart} className="w-full text-xs text-muted-foreground hover:text-destructive transition-colors py-1">Clear all items</button>
                </div>
              )}

              {/* STEP 2: Delivery */}
              {step === 'delivery' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Select Branch</label>
                    <div className="space-y-2">
                      {branches.map(b => (
                        <button
                          key={b.id}
                          onClick={() => setSelectedBranch(b.id)}
                          className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-200 ${selectedBranch === b.id ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'}`}
                        >
                          <div className="font-semibold text-sm">{b.shortName}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{b.address}</div>
                          <div className="text-xs mt-0.5" style={{ color: 'hsl(var(--gold-dark))' }}>⏰ {b.hours}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Delivery Area</label>
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      <button
                        onClick={() => setSelectedDeliveryArea('')}
                        className={`w-full text-left p-2.5 rounded-lg border transition-all duration-200 text-sm ${selectedDeliveryArea === '' ? 'border-primary' : 'border-border hover:border-primary/40'}`}
                      >
                        🏠 Pickup from Branch — Free
                      </button>
                      {branch.deliveryAreas.map(area => (
                        <button
                          key={area.name}
                          onClick={() => setSelectedDeliveryArea(area.name)}
                          className={`w-full text-left p-2.5 rounded-lg border transition-all duration-200 text-sm flex justify-between ${selectedDeliveryArea === area.name ? 'border-primary' : 'border-border hover:border-primary/40'}`}
                        >
                          <span>📍 {area.name}</span>
                          <span className="font-semibold" style={{ color: 'hsl(var(--gold-dark))' }}>{formatUGX(area.fee)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Payment */}
              {step === 'payment' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-border bg-muted/30">
                    <h3 className="font-semibold mb-3">Order Summary</h3>
                    {cart.map(i => (
                      <div key={i.id} className="flex justify-between text-sm py-1">
                        <span>{i.name} x{i.quantity}</span>
                        <span className="font-medium">{formatUGX(i.price * i.quantity)}</span>
                      </div>
                    ))}
                    <div className="border-t border-border mt-2 pt-2 space-y-1">
                      <div className="flex justify-between text-sm"><span>Subtotal</span><span>{formatUGX(cartTotal)}</span></div>
                      <div className="flex justify-between text-sm"><span>Delivery</span><span>{formatUGX(deliveryFee)}</span></div>
                      <div className="flex justify-between font-bold text-base pt-1 border-t border-border">
                        <span>Total</span>
                        <span style={{ color: 'hsl(var(--gold-dark))' }}>{formatUGX(grandTotal)}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Payment Method</label>
                    <div className="space-y-2">
                      {[
                        { id: 'mtn', label: 'MTN Mobile Money', icon: '📱', code: 'Merchant Code: 971714', step: '*165#' },
                        { id: 'airtel', label: 'Airtel Money', icon: '📲', code: 'Merchant Code: 4393386', step: '*185#' },
                      ].map(pm => (
                        <button
                          key={pm.id}
                          onClick={() => { setPaymentMethod(pm.id as 'mtn' | 'airtel'); speak(`You selected ${pm.label}. Please dial ${pm.step} on your phone to pay ${formatUGX(grandTotal)} to merchant code ${pm.code.split(': ')[1]}. After payment, tap confirm to send your order via WhatsApp.`); }}
                          className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-200 ${paymentMethod === pm.id ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'}`}
                        >
                          <div className="flex items-center gap-2 font-semibold text-sm">{pm.icon} {pm.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{pm.code}</div>
                          <div className="text-xs mt-0.5" style={{ color: 'hsl(var(--gold-dark))' }}>Dial {pm.step}</div>
                        </button>
                      ))}
                      <button
                        onClick={() => setPaymentMethod('')}
                        className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-200 ${paymentMethod === '' ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'}`}
                      >
                        <div className="flex items-center gap-2 font-semibold text-sm">💵 Cash on Delivery / Pickup</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Review */}
              {step === 'review' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-gold/30 bg-gold/5">
                    <div className="text-sm font-semibold mb-1">Order Ready to Send 🎉</div>
                    <div className="text-xs text-muted-foreground">Branch: <strong>{branch.shortName}</strong></div>
                    <div className="text-xs text-muted-foreground">Delivery: <strong>{selectedDeliveryArea || 'Pickup'}</strong></div>
                    <div className="text-xs text-muted-foreground">Payment: <strong>{paymentMethod === 'mtn' ? 'MTN MoMo' : paymentMethod === 'airtel' ? 'Airtel Money' : 'Cash'}</strong></div>
                    <div className="text-sm font-bold mt-2" style={{ color: 'hsl(var(--gold-dark))' }}>Total: {formatUGX(grandTotal)}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Rate Your Experience</label>
                    <div className="star-rating flex gap-1">
                      {[1,2,3,4,5].map(n => (
                        <span key={n} onClick={() => setRating(n)} style={{ color: n <= rating ? 'hsl(var(--gold))' : 'hsl(var(--muted-foreground))' }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {rating === 5 ? '⭐⭐⭐⭐⭐ Excellent' : rating === 4 ? '⭐⭐⭐⭐ Great' : rating === 3 ? '⭐⭐⭐ Good' : rating === 2 ? '⭐⭐ Fair' : rating === 1 ? '⭐ Poor' : ''}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Share Your Feedback (Optional)</label>
                    <textarea
                      value={feedback}
                      onChange={e => setFeedback(e.target.value)}
                      placeholder="Tell us about your experience..."
                      rows={3}
                      className="input-field text-sm resize-none"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            {/* Totals */}
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Total ({cart.reduce((s,i) => s+i.quantity,0)} items)</span>
              <span className="font-bold text-lg" style={{ color: 'hsl(var(--gold-dark))' }}>{formatUGX(grandTotal)}</span>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              {step !== 'cart' && (
                <button
                  onClick={() => goToStep(step === 'review' ? 'payment' : step === 'payment' ? 'delivery' : 'cart')}
                  className="flex-1 py-3 rounded-xl font-semibold text-sm border-2 border-border hover:bg-muted transition-all duration-200"
                >
                  ← Back
                </button>
              )}
              {step !== 'review' && (
                <button
                  onClick={() => goToStep(step === 'cart' ? 'delivery' : step === 'delivery' ? 'payment' : 'review')}
                  className="flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                >
                  {step === 'cart' ? 'Choose Delivery →' : step === 'delivery' ? 'Payment →' : 'Review Order →'}
                </button>
              )}
              {step === 'review' && (
                <button
                  onClick={handleSendOrder}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'hsl(142 70% 32%)', color: 'white' }}
                >
                  <MessageCircle size={16} />
                  Confirm & Send via WhatsApp
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
