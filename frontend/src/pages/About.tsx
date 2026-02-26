import { Link } from '@tanstack/react-router';
import {
  Target, Eye, Heart, Users, Lightbulb, Shield, Globe, ArrowRight,
  MapPin, Calendar
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Client-Centric Focus',
    description: 'Every solution we build starts with a deep understanding of your business goals. Your success is our success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation at Core',
    description: 'We stay ahead of technology trends to bring you modern, future-proof solutions that give you a competitive edge.',
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description: 'Rigorous quality assurance and best-practice engineering ensure every deliverable meets the highest standards.',
  },
  {
    icon: Heart,
    title: 'Integrity & Transparency',
    description: 'Honest communication, clear timelines, and no surprises. We build relationships on trust and accountability.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'We work as a true extension of your team — sharing knowledge, aligning on goals, and celebrating wins together.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Serving clients across geographies with a nuanced understanding of diverse business environments and cultures.',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Brainscribe Founded',
    description: 'Established in Pune, India, with a vision to deliver world-class IT services to businesses of all sizes.',
  },
  {
    year: '2020',
    title: 'Microsoft Technology Practice',
    description: 'Launched our dedicated Microsoft Technologies practice, delivering .NET, SharePoint, and SQL Server solutions.',
  },
  {
    year: '2021',
    title: 'Moodle LMS Division',
    description: 'Expanded into eLearning with a specialized Moodle LMS development and customization team.',
  },
  {
    year: '2022',
    title: 'Cloud & Infrastructure Services',
    description: 'Introduced managed cloud hosting and infrastructure services on Azure and AWS for enterprise clients.',
  },
  {
    year: '2023',
    title: 'Extended Development Teams (XDT)',
    description: 'Launched our offshore XDT model, enabling global clients to build dedicated development teams in India.',
  },
  {
    year: '2024',
    title: '50+ Projects Milestone',
    description: 'Celebrated the delivery of over 50 successful projects across industries and geographies.',
  },
  {
    year: '2025',
    title: 'Instructional Design Practice',
    description: 'Added Instructional Design and Graphics Design services for eLearning, completing our full-service offering.',
  },
];

const differentiators = [
  { label: 'Deep Microsoft Expertise', desc: 'Certified professionals in .NET, SharePoint, and Azure ecosystems.' },
  { label: 'End-to-End Delivery', desc: 'From requirements to deployment and support — we own the full lifecycle.' },
  { label: 'Flexible Engagement Models', desc: 'Fixed-price, T&M, or dedicated team — we adapt to your needs.' },
  { label: 'Pune Advantage', desc: 'Access to India\'s top tech talent at competitive rates without compromising quality.' },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sky-light font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
              Powering Digital Transformation Since 2019
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Brainscribe is a Pune-based IT services company committed to delivering intelligent technology solutions that help businesses grow, innovate, and lead in a digital-first world.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-sky-pale rounded-xl"></div>
              <img
                src="/images/about-hero.dim_1200x500.png"
                alt="Brainscribe Team"
                className="relative z-10 rounded-xl shadow-card w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
              <h2 className="section-title text-left">Who We Are</h2>
              <div className="divider-line-left"></div>
              <p className="text-slate-600 leading-relaxed mb-5">
                Founded in 2019 and headquartered in Pune, Maharashtra, Brainscribe was born from a simple belief: that technology, when applied thoughtfully, can solve real business problems and unlock extraordinary growth.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Over the past six years, we have grown into a full-service IT company serving clients across India and internationally. Our team of experienced engineers, designers, and consultants brings together expertise in Microsoft technologies, cloud platforms, eLearning, and staffing solutions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our mission is to be the technology partner that businesses trust — not just for a project, but for the long term. We measure our success by the outcomes we create for our clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-sky-pale rounded-lg p-4">
                  <Calendar size={20} className="text-navy flex-shrink-0" />
                  <div>
                    <div className="font-bold text-navy font-heading">Est. 2019</div>
                    <div className="text-xs text-slate-500">6+ Years Strong</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-sky-pale rounded-lg p-4">
                  <MapPin size={20} className="text-navy flex-shrink-0" />
                  <div>
                    <div className="font-bold text-navy font-heading">Pune, India</div>
                    <div className="text-xs text-slate-500">Headquarters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding light-blue-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">Purpose & Direction</p>
            <h2 className="section-title">Mission & Vision</h2>
            <div className="divider-line"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-card border-t-4 border-navy">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-5">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with intelligent, scalable, and reliable technology solutions — delivered with integrity, precision, and a genuine commitment to client success. We strive to be the partner that helps our clients not just keep up with change, but lead it.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-card border-t-4 border-sky">
              <div className="w-12 h-12 rounded-full bg-sky flex items-center justify-center mb-5">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be recognized as India's most trusted IT services partner — known for engineering excellence, innovative thinking, and the ability to transform complex challenges into elegant, impactful solutions that drive lasting business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider-line"></div>
            <p className="section-subtitle text-slate-600">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="value-card group hover:border-sky border border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-sky-pale flex items-center justify-center mb-4 group-hover:bg-navy transition-colors duration-300">
                    <Icon size={22} className="text-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-navy font-heading mb-2">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding light-blue-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="section-title">Milestones & Growth</h2>
            <div className="divider-line"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="timeline-item">
                <div className="bg-white rounded-lg p-5 shadow-xs border border-slate-200 hover:shadow-card transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-navy text-white rounded-lg px-3 py-1.5 text-sm font-bold font-heading">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy font-heading mb-1">{milestone.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brainscribe */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">The Brainscribe Difference</p>
            <h2 className="section-title">Why Choose Us</h2>
            <div className="divider-line"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <div key={item.label} className="flex items-start gap-4 bg-sky-pale rounded-lg p-5">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-navy font-heading mb-1">{item.label}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blue-section text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Reach out to our team and discover how Brainscribe can accelerate your digital journey.
          </p>
          <Link
            to="/contact"
            className="bg-white text-navy px-8 py-3 rounded font-semibold hover:bg-sky-pale transition-colors duration-200 inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
