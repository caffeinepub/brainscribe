import { Link } from '@tanstack/react-router';
import {
  Code2, BookOpen, Users, Globe, Cloud, Palette,
  ArrowRight, CheckCircle, Award, Briefcase, TrendingUp, Shield, Zap, HeartHandshake
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Microsoft Technologies',
    description: 'Custom application development using .NET, SharePoint, and SQL Server — built for enterprise scale and reliability.',
    color: 'bg-blue-50',
    iconColor: 'text-navy',
  },
  {
    icon: BookOpen,
    title: 'Moodle LMS Solutions',
    description: 'End-to-end Moodle LMS development, customization, and third-party integration for modern digital learning.',
    color: 'bg-sky-pale',
    iconColor: 'text-sky',
  },
  {
    icon: Users,
    title: 'IT Staffing Services',
    description: 'Skilled IT professionals across all technologies, placed quickly to meet your project timelines and goals.',
    color: 'bg-blue-50',
    iconColor: 'text-navy',
  },
  {
    icon: Globe,
    title: 'Extended Dev Teams (XDT)',
    description: 'Dedicated offshore development teams that integrate seamlessly with your in-house operations.',
    color: 'bg-sky-pale',
    iconColor: 'text-sky',
  },
  {
    icon: Cloud,
    title: 'Cloud Hosting & Infrastructure',
    description: 'Managed hosting and infrastructure services on Microsoft Azure and AWS for performance and uptime.',
    color: 'bg-blue-50',
    iconColor: 'text-navy',
  },
  {
    icon: Palette,
    title: 'Instructional & Graphic Design',
    description: 'Compelling eLearning content and visual design that drives learner engagement and knowledge retention.',
    color: 'bg-sky-pale',
    iconColor: 'text-sky',
  },
];

const stats = [
  { value: '6+', label: 'Years in Business', icon: Award },
  { value: '50+', label: 'Projects Delivered', icon: Briefcase },
  { value: '2019', label: 'Established', icon: TrendingUp },
  { value: '100%', label: 'Client Satisfaction', icon: CheckCircle },
];

const whyUs = [
  {
    icon: Shield,
    title: 'Proven Expertise',
    description: 'Six years of delivering enterprise-grade solutions across Microsoft technologies, cloud platforms, and eLearning.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Iterative, sprint-based delivery model that keeps projects on time, on budget, and aligned with your goals.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Approach',
    description: 'We work as an extension of your team — transparent communication, shared accountability, and long-term relationships.',
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Roots',
    description: 'Headquartered in Pune, India, we serve clients worldwide with a deep understanding of both local and global markets.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/30"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white/20"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border border-white/20"></div>
        </div>
        <div className="container-custom py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-light animate-pulse"></span>
                Pune, India · Est. 2019
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
                Engineering Intelligence.{' '}
                <span className="text-sky-light">Empowering Growth.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Brainscribe is your trusted technology partner — delivering custom software, cloud infrastructure, and eLearning solutions that transform how businesses operate and grow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-white text-navy px-7 py-3 rounded font-semibold hover:bg-sky-pale transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/60 text-white px-7 py-3 rounded font-semibold hover:bg-white/10 transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/hero-banner.dim_1440x600.png"
                alt="Brainscribe Technology Solutions"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="stat-item group">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-sky-pale flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                      <Icon size={20} className="text-navy group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-navy font-heading">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding light-blue-section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="section-title">Our Core Services</h2>
            <div className="divider-line"></div>
            <p className="section-subtitle text-slate-600">
              From enterprise software to cloud infrastructure and eLearning — we deliver end-to-end technology solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="service-card">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={service.iconColor} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy font-heading mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-sky font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="btn-primary"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sky font-semibold text-sm uppercase tracking-widest mb-2">Why Brainscribe</p>
              <h2 className="section-title text-left">Built on Trust. Driven by Results.</h2>
              <div className="divider-line-left"></div>
              <p className="text-slate-600 leading-relaxed mb-8">
                With over six years of experience and 50+ successful projects, Brainscribe has earned the trust of businesses across industries. We combine deep technical expertise with a client-first mindset to deliver solutions that truly make a difference.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="value-card">
                      <div className="w-10 h-10 rounded-lg bg-sky-pale flex items-center justify-center mb-3">
                        <Icon size={20} className="text-navy" />
                      </div>
                      <h4 className="font-semibold text-navy font-heading text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-sky-pale rounded-xl"></div>
              <img
                src="/images/about-hero.dim_1200x500.png"
                alt="Brainscribe Team"
                className="relative z-10 rounded-xl shadow-card w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-navy text-white rounded-xl p-5 z-20 shadow-lg">
                <div className="text-2xl font-bold font-heading">50+</div>
                <div className="text-white/70 text-xs">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blue-section text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how Brainscribe can help you build smarter, scale faster, and deliver better outcomes with technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-navy px-8 py-3 rounded font-semibold hover:bg-sky-pale transition-colors duration-200 inline-flex items-center gap-2"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/60 text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
