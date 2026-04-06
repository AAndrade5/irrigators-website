import React, { useState, type FormEvent } from 'react';

interface QuoteFormProps {
  compact?: boolean;
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-lime-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold text-white mb-2">Estimate Request Received!</h3>
        <p className="text-gray-400">We'll get back to you within one business day. You can also call us at <a href="tel:2504687041" className="font-semibold text-lime-400 underline">250-468-7041</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500" placeholder="250-XXX-XXXX" />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">Address / City *</label>
          <input type="text" id="city" name="city" required className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500" placeholder="City or address" />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service Interested In</label>
        <select id="service" name="service" className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white">
          <option value="">Select a service...</option>
          <option value="spring-startup">Spring Irrigation Start-Up</option>
          <option value="winter-blowout">Winter Irrigation Blowout</option>
          <option value="repair">Repair / Service Call</option>
          <option value="installation">New Sprinkler System Installation</option>
          <option value="lighting">Landscape Lighting</option>
          <option value="maintenance">Annual Maintenance Plan</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea id="message" name="message" rows={compact ? 3 : 4} className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500 resize-none" placeholder="Tell us about your irrigation needs..." />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-lime-500 text-dark-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-lime-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
      >
        {loading ? 'Sending...' : 'Get My Free Estimate'}
      </button>
      <p className="text-xs text-gray-500 text-center">No spam. We'll respond within one business day.</p>
    </form>
  );
}
