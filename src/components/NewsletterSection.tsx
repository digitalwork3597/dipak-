import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!consent) {
      setErrorMsg('Please check the consent box to receive email updates.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section id="newsletter" className="bg-[#FEF3C7] py-16 sm:py-20 border-b border-amber-200 relative overflow-hidden">
      
      {/* Decorative background blobs */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-200/50 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-300/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="space-y-3 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-white/80 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-amber-300/80 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>PET PARENT NEWSLETTER</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
            Get Pet Care Tips in Your Inbox
          </h2>
          <p className="text-amber-950 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Subscribe for pet-care tips, nutrition information, and BORCELLE updates.
          </p>
        </div>

        {/* Form or Success View */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 border border-amber-300 shadow-md max-w-xl mx-auto space-y-3 animate-fadeIn">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Thank you for subscribing!</h3>
            <p className="text-sm text-slate-600">
              Welcome to the BORCELLE pet care community, <strong className="text-slate-900">{name}</strong>. Look out for helpful nutrition guides and tips in your inbox soon.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setEmail('');
                setConsent(false);
              }}
              className="mt-2 text-xs font-bold text-[#0F3C8A] hover:underline cursor-pointer"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md max-w-xl mx-auto space-y-4 text-left">
            {errorMsg && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold p-3 rounded-xl">
                ⚠️ {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-[#0F3C8A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 font-medium focus:ring-2 focus:ring-[#0F3C8A] focus:outline-none"
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="newsletter-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#0F3C8A] border-slate-300 rounded focus:ring-[#0F3C8A] cursor-pointer"
              />
              <label htmlFor="newsletter-consent" className="text-xs text-slate-600 leading-snug cursor-pointer">
                I agree to receive BORCELLE updates by email.{' '}
                <span className="text-[#0F3C8A] font-bold underline">Privacy Policy</span>
              </label>
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="w-full bg-[#0F3C8A] hover:bg-[#0A2E70] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Subscribe Now</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
