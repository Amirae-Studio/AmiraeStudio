"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare
} from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Commercial Project Inquiry",
    message: "",
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("arun@amirae.studio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e52fdb81-d925-4fa7-97a3-f37c9bf6032a",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Network error. Please try again or email arun@amirae.studio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] border-t border-black/10 overflow-hidden font-[family-name:var(--font-your-hero-font)]"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 leading-tight">
            Connect With Our <span className="text-teal-600">Studio</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have a question, custom commission idea, or partnership proposal? Reach out directly to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-black/10 shadow-sm space-y-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 block mb-1">
                  Official Studio Details
                </span>
                <h3 className="text-2xl font-bold text-gray-900">AMIRAE STUDIO LLC</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Premier 3D design, digital product prototyping, precision scale miniatures, and interactive WebGL engineering studio.
                </p>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-gray-100 text-sm">
                
                {/* Email with copy */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#21E1B5]/20 text-teal-900 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-gray-500 block">Direct Inquiries</span>
                      <a href="mailto:arun@amirae.studio" className="font-semibold text-gray-900 hover:text-teal-600">
                        arun@amirae.studio
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-black transition-all cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/60">
                  <div className="w-9 h-9 rounded-xl bg-gray-200/80 text-gray-700 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-gray-500 block">Studio Hours</span>
                    <span className="font-semibold text-gray-900">Mon - Fri: 9:00 AM – 6:00 PM EST</span>
                  </div>
                </div>

                {/* Response Guarantee */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/60">
                  <div className="w-9 h-9 rounded-xl bg-teal-100/70 text-teal-900 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-gray-500 block">Response SLA</span>
                    <span className="font-semibold text-gray-900">Guaranteed response within 24 hours</span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-mono uppercase text-gray-500 block mb-3 font-semibold">Studio Channels</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/amirae__studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-mono font-bold text-gray-900 hover:border-black hover:shadow-xs transition-all"
                  >
                    <span>Instagram</span>
                    <ExternalLink size={12} className="text-gray-400" />
                  </a>

                  <a
                    href="https://discord.com/channels/1529705981926182953"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-mono font-bold text-gray-900 hover:border-black hover:shadow-xs transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <span>Discord</span>
                    <ExternalLink size={12} className="text-gray-400" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quote Prompt Card */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-7 sm:p-8 border border-zinc-800 shadow-lg">
              <span className="font-mono text-xs uppercase tracking-widest text-[#21E1B5] font-bold block mb-1">
                Detailed Quotation
              </span>
              <h4 className="text-lg font-bold">Looking for a custom project quote?</h4>
              <p className="text-xs text-gray-400 mt-1 mb-4 leading-relaxed">
                Use our comprehensive Request a Quote wizard to select specific deliverables, budget tiers, and target turnaround.
              </p>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#21E1B5] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1bc79f] transition-all hover:scale-105"
              >
                Go to Quote Wizard →
              </a>
            </div>

          </div>

          {/* Right Column: Clean Rounded Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-black/10 shadow-sm">
              
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Fill out the form below and we will respond promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-bold tracking-wider text-gray-700 mb-2">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#21E1B5] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold tracking-wider text-gray-700 mb-2">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#21E1B5] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold tracking-wider text-gray-700 mb-2">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3D Miniature Commission or Product Prototyping"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#21E1B5] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold tracking-wider text-gray-700 mb-2">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your inquiry, project scope, or questions in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#21E1B5] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-all disabled:opacity-50 cursor-pointer shadow-md hover:scale-105"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to AMIRAE STUDIO LLC. Our team has received your note and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: "", email: "", subject: "Commercial Project Inquiry", message: "" });
                    }}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-700 hover:underline"
                  >
                    ← Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}