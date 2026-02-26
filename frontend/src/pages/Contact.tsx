import { MapPin, Phone, Mail, Clock, MessageSquare, Building2 } from 'lucide-react';

const contactDetails = [
  {
    icon: Building2,
    label: 'Headquarters',
    value: 'Brainscribe',
    sub: 'Pune, Maharashtra, India — 411 001',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@brainscribe.in',
    sub: 'We respond within 1 business day',
    href: 'mailto:info@brainscribe.in',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 20 1234 5678',
    sub: 'Mon–Fri, 9:00 AM – 6:00 PM IST',
    href: 'tel:+912012345678',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday',
    sub: '9:00 AM – 6:00 PM IST (UTC+5:30)',
  },
];

const faqs = [
  {
    q: 'What industries do you serve?',
    a: 'We serve clients across education, healthcare, finance, manufacturing, retail, and professional services — both in India and internationally.',
  },
  {
    q: 'Do you work with startups as well as enterprises?',
    a: 'Absolutely. We have flexible engagement models suited for startups, SMEs, and large enterprises alike.',
  },
  {
    q: 'How quickly can you start a project?',
    a: 'Depending on scope and resource availability, we can typically onboard and begin within 1–2 weeks of contract signing.',
  },
  {
    q: 'Do you offer post-delivery support?',
    a: 'Yes. We offer ongoing maintenance, support, and enhancement services for all solutions we deliver.',
  },
];

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sky-light font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
              Let's Start a Conversation
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Whether you have a project in mind, need a technology consultation, or simply want to learn more about Brainscribe — we'd love to hear from you. Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">Get in Touch</p>
              <h2 className="text-2xl font-bold text-navy font-heading mb-2">Contact Information</h2>
              <div className="w-12 h-1 bg-sky rounded-full mb-6"></div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Our team is based in Pune, India and serves clients globally. Reach out through any of the channels below and we'll respond within one business day.
              </p>
              <div className="space-y-5">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sky-pale flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-navy" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-0.5">{detail.label}</p>
                        {detail.href ? (
                          <a href={detail.href} className="text-navy font-semibold text-sm hover:text-sky transition-colors">
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-navy font-semibold text-sm">{detail.value}</p>
                        )}
                        <p className="text-slate-500 text-xs mt-0.5">{detail.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 bg-sky-pale h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-navy mx-auto mb-2" />
                  <p className="text-navy font-semibold text-sm font-heading">Pune, Maharashtra</p>
                  <p className="text-slate-500 text-xs">India — 411 001</p>
                </div>
              </div>
            </div>

            {/* HubSpot Form Placeholder */}
            <div className="lg:col-span-2">
              <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">Send Us a Message</p>
              <h2 className="text-2xl font-bold text-navy font-heading mb-2">We'd Love to Hear From You</h2>
              <div className="w-12 h-1 bg-sky rounded-full mb-6"></div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Fill out the form below and one of our team members will get back to you within one business day. For urgent inquiries, please call us directly.
              </p>

              {/* HubSpot Embed Placeholder */}
              {/* INSERT HUBSPOT FORM EMBED CODE HERE */}
              <div className="border-2 border-dashed border-sky rounded-xl p-10 bg-sky-pale flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-sky flex items-center justify-center mb-5 shadow-sm">
                  <MessageSquare size={28} className="text-sky" />
                </div>
                <h3 className="text-navy font-bold font-heading text-lg mb-2">HubSpot Form</h3>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-4">
                  Your HubSpot contact form will appear here. Replace this placeholder with your HubSpot embed code.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg px-5 py-3 text-xs text-slate-400 font-mono">
                  {'<!-- INSERT HUBSPOT FORM EMBED CODE HERE -->'}
                </div>
                <p className="text-slate-400 text-xs mt-4">
                  To embed your form: Go to HubSpot → Marketing → Forms → Share → Embed Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding light-blue-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider-line"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-xs border border-slate-200">
                <h4 className="font-semibold text-navy font-heading mb-2 text-sm">{faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="blue-section text-white py-14">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
            Headquartered in Pune. Serving the World.
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Brainscribe · Pune, Maharashtra, India · Est. 2019
          </p>
        </div>
      </section>
    </>
  );
}
