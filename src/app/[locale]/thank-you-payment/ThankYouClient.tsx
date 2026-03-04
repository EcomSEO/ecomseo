"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

const logos = [
  "https://framerusercontent.com/images/t2yR7ACCVBmSnnUUjNT7njcCKU.png",
  "https://framerusercontent.com/images/GBYkGoRfRJI1RTbDG3VVMkFcA.png",
  "https://framerusercontent.com/images/Ts3FQ67LyRFYn1bXxKAKUvJo5s.png",
  "https://framerusercontent.com/images/F4l4UGH2sO1TG1hwPsVlyqtWk.png",
  "https://framerusercontent.com/images/X9SFdl0C2lB2eSoN5sJxO5I3Bw.png",
];

export default function ThankYouPaymentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-bg">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 pt-[120px] md:pt-[160px] pb-20">
          {/* Hero */}
          <section className="text-center mb-16">
            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-white-10 border-2 border-bg"
                  />
                ))}
              </div>
              <span className="text-body text-sm">
                Backed by 19+ brand owners
              </span>
            </div>

            <h1 className="text-[32px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-heading mb-3">
              Thank you for your payment!
            </h1>
            <p className="text-body text-base max-w-[400px] mx-auto">
              We appreciate you as our client.
            </p>
          </section>

          {/* GIF */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/AB0iieRBYCg49jEBwxtcw3fs4.gif"
                alt="Thank you"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16 opacity-50">
            {logos.map((logo, i) => (
              <div key={i} className="relative h-6 w-24">
                <Image
                  src={logo}
                  alt="Client logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="https://wa.link/2ls6pk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-heading text-bg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Whatsapp
            </a>
            <a
              href="https://cal.com/fabianvantil/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-heading font-medium text-sm hover:border-accent transition-colors"
            >
              Book 30 min
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Contact form */}
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-heading text-2xl font-semibold mb-8 text-center">
              Get in touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-body text-sm mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-body text-sm mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-body text-sm mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-body text-sm mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-body text-sm mb-1.5">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-body text-sm mb-1.5">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-heading text-sm placeholder:text-body/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-heading text-bg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Send email
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
