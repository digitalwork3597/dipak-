import React, { useState } from 'react';
import { PageType, ContactFormData } from '../types';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* Hero Header */}
      <section className="bg-[#FAF6F0] py-12 sm:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Get in Touch with BORCELLE
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Have questions regarding pet nutrition, formula ingredients, or authorized stockist availability? Our pet care team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
                <p className="text-xs text-slate-600 mt-1">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Received!</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you for reaching out, <strong>{formData.name}</strong>. A BORCELLE pet nutrition specialist will review your inquiry and respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' }); }}
                    className="text-xs font-bold text-emerald-800 underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                      >
                        <option value="General Inquiry">General Product Inquiry</option>
                        <option value="Dog Food Questions">Dog Food Formula Question</option>
                        <option value="Cat Food Questions">Cat Food Formula Question</option>
                        <option value="Store Stockist Inquiry">Store Stockist Availability</option>
                        <option value="Veterinary Partnership">Veterinary Clinic Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help you and your pet today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Cards + Map Frame (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-stone-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-lg">Contact Information</h3>
                
                <ul className="space-y-4 text-xs text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Phone Line</span>
                      <span>+1 (800) 555-BORCELLE</span>
                      <span className="text-slate-500 block text-[11px]">Toll-free customer support</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Email Address</span>
                      <span>support@borcellepet.com</span>
                      <span className="text-slate-500 block text-[11px]">Replies within 24 business hours</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Headquarters</span>
                      <span>742 Evergreen Terrace, Suite 100, Pet Health Plaza, CA 90210</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-200 text-slate-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Business Hours</span>
                      <span>Monday - Friday: 8:00 AM - 6:00 PM PST</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Instant WhatsApp Support Widget Box */}
              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-emerald-900 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    Instant WhatsApp Support
                  </h4>
                  <p className="text-[11px] text-emerald-800">Chat directly with a pet care representative in real time.</p>
                </div>
                <a
                  href="https://wa.me/919712663470?text=Hi%20BORCELLE%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Dog%20%26%20Cat%20Food%20products.%20Can%20you%20please%20help%20me%20choose%20the%20right%20food%20for%20my%20pet%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shrink-0 cursor-pointer shadow-xs inline-block"
                >
                  Chat Now
                </a>
              </div>

              {/* Google Map Section */}
              <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-2xs h-56 bg-stone-100 relative">
                <iframe
                  title="BORCELLE Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.39958742353342!3d34.06401087315183!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf8f1807983%3A0x673a6e60b2496a79!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
