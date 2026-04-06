import React, { useState, type FormEvent } from 'react';

export default function ContactForm() {
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
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. We'll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
          <input type="text" id="contact-name" name="name" required className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
          <input type="email" id="contact-email" name="email" required className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
        <input type="tel" id="contact-phone" name="phone" className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500" placeholder="250-XXX-XXXX" />
      </div>
      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-gray-300 mb-1">Service Needed</label>
        <select id="contact-service" name="service" className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white">
          <option value="">Select a service...</option>
          <option value="spring-startup">Spring Irrigation Start-Up</option>
          <option value="winter-blowout">Winter Irrigation Blowout</option>
          <option value="repair">Repair / Service Call</option>
          <option value="installation">New Sprinkler System</option>
          <option value="lighting">Landscape Lighting</option>
          <option value="maintenance">Annual Maintenance Plan</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">Message *</label>
        <textarea id="contact-message" name="message" rows={5} required className="w-full px-4 py-2.5 bg-dark-800 border border-white/10 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 outline-none transition-colors text-white placeholder-gray-500 resize-none" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-lime-500 text-dark-900 py-3 px-6 rounded-lg font-semibold hover:bg-lime-400 transition-colors disabled:opacity-70"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
