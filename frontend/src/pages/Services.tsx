import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'microsoft',
    badge: '01',
    title: 'Custom Application Development',
    subtitle: 'Microsoft Technologies — .NET, SharePoint & SQL Server',
    image: '/images/service-dotnet.dim_600x400.png',
    imageAlt: 'Microsoft .NET and SharePoint Development',
    description:
      'Brainscribe delivers robust, scalable custom applications built on the Microsoft technology stack. Whether you need a line-of-business application, a collaborative intranet portal, or a high-performance database solution, our certified engineers bring deep expertise and a proven delivery methodology.',
    highlights: [
      'ASP.NET Core & .NET Framework web and API development',
      'SharePoint Online & On-Premises portals and workflows',
      'SQL Server database design, optimization, and migration',
      'Microsoft 365 integration and Power Platform solutions',
      'Legacy application modernization and re-platforming',
      'Custom reporting and business intelligence dashboards',
    ],
    reverse: false,
  },
  {
    id: 'moodle',
    badge: '02',
    title: 'Moodle LMS Solutions',
    subtitle: 'Development, Customization & Integration',
    image: '/images/service-moodle.dim_600x400.png',
    imageAlt: 'Moodle LMS Development and Customization',
    description:
      'As a specialized Moodle partner, Brainscribe helps organizations harness the full power of the world\'s most popular open-source learning management system. From fresh installations to complex customizations and third-party integrations, we deliver eLearning platforms that engage learners and simplify administration.',
    highlights: [
      'Moodle installation, configuration, and hosting',
      'Custom theme development and UI/UX redesign',
      'Plugin development and third-party integrations',
      'SCORM, xAPI, and AICC content compatibility',
      'Single Sign-On (SSO) and LDAP/Active Directory integration',
      'Performance optimization and scalability for large user bases',
    ],
    reverse: true,
  },
  {
    id: 'staffing',
    badge: '03',
    title: 'IT Staffing Services',
    subtitle: 'Skilled Professionals Across All Technologies',
    image: '/images/service-staffing.dim_600x400.png',
    imageAlt: 'IT Staffing and Talent Solutions',
    description:
      'Finding the right technology talent at the right time is critical to project success. Brainscribe\'s IT staffing practice connects you with pre-vetted, skilled professionals across a wide range of technologies — quickly and reliably. Whether you need contract, contract-to-hire, or permanent placements, we have the talent network to deliver.',
    highlights: [
      'Contract, contract-to-hire, and permanent staffing',
      'Developers, architects, QA engineers, and project managers',
      'Microsoft, Java, Python, React, Angular, and more',
      'Cloud specialists: Azure, AWS, and GCP certified professionals',
      'Rapid turnaround — profiles within 48–72 hours',
      'Background verification and technical screening included',
    ],
    reverse: false,
  },
  {
    id: 'xdt',
    badge: '04',
    title: 'Extended Development Teams (XDT)',
    subtitle: 'Dedicated Offshore Teams That Work Like Your Own',
    image: '/images/service-xdt.dim_600x400.png',
    imageAlt: 'Offshore Extended Development Teams',
    description:
      'Brainscribe\'s Extended Development Team (XDT) model gives you the benefits of a dedicated, full-time development team in India — without the overhead of setting up your own offshore office. Your XDT team is fully integrated with your processes, tools, and culture, operating as a seamless extension of your in-house team.',
    highlights: [
      'Dedicated team of developers, QA, and leads',
      'Full alignment with your tools, processes, and timezone',
      'Transparent reporting and daily standups',
      'Flexible team scaling — ramp up or down as needed',
      'IP protection and NDA-backed engagement',
      'Significant cost savings vs. onshore hiring',
    ],
    reverse: true,
  },
  {
    id: 'hosting',
    badge: '05',
    title: 'Hosting & Infrastructure Management',
    subtitle: 'Azure & AWS Cloud Services',
    image: '/images/service-cloud.dim_600x400.png',
    imageAlt: 'Azure and AWS Cloud Hosting',
    description:
      'Brainscribe provides comprehensive cloud hosting and infrastructure management services on Microsoft Azure and Amazon Web Services. From initial architecture design to ongoing monitoring and optimization, we ensure your applications run with maximum performance, security, and availability.',
    highlights: [
      'Cloud architecture design and migration planning',
      'Azure and AWS infrastructure provisioning and management',
      'DevOps, CI/CD pipeline setup and automation',
      '24/7 monitoring, alerting, and incident response',
      'Security hardening, compliance, and backup management',
      'Cost optimization and cloud spend governance',
    ],
    reverse: false,
  },
  {
    id: 'instructional',
    badge: '06',
    title: 'Instructional & Graphic Design',
    subtitle: 'eLearning Content & Visual Design Services',
    image: '/images/service-design.dim_600x400.png',
    imageAlt: 'Instructional Design and eLearning Graphics',
    description:
      'Great eLearning is more than just content — it\'s about designing experiences that engage, inform, and inspire learners. Brainscribe\'s Instructional Design and Graphics Design team creates compelling, pedagogically sound eLearning content and visuals that drive measurable learning outcomes.',
    highlights: [
      'Instructional design and curriculum development',
      'SCORM-compliant eLearning module development',
      'Interactive simulations and scenario-based learning',
      'Storyboarding, scripting, and voiceover coordination',
      'Custom graphics, infographics, and visual assets',
      'Rapid eLearning development using Articulate & Adobe tools',
    ],
    reverse: true,
  },
];

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-gradient text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sky-light font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
              Comprehensive IT Services for Modern Businesses
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              From custom software development to cloud infrastructure and eLearning — Brainscribe delivers end-to-end technology solutions that drive real business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-16 md:top-20 z-40">
        <div className="container-custom">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex-shrink-0 px-4 py-2 text-xs font-medium text-slate-600 hover:text-navy hover:bg-sky-pale rounded transition-colors duration-200 whitespace-nowrap"
              >
                {service.badge}. {service.title.split(' ').slice(0, 2).join(' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'light-blue-section'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={service.reverse ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 bg-sky-pale text-navy rounded-full px-4 py-1.5 text-xs font-bold font-heading mb-4 uppercase tracking-wider">
                  Service {service.badge}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-2">{service.title}</h2>
                <p className="text-sky font-medium text-sm mb-4">{service.subtitle}</p>
                <div className="w-12 h-1 bg-sky rounded-full mb-5"></div>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-sky mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Discuss Your Requirements <ArrowRight size={16} />
                </Link>
              </div>

              {/* Image */}
              <div className={`relative ${service.reverse ? 'lg:order-1' : ''}`}>
                <div className={`absolute ${service.reverse ? '-top-4 -right-4' : '-top-4 -left-4'} w-full h-full bg-sky-pale rounded-xl`}></div>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="relative z-10 rounded-xl shadow-card w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="blue-section text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Our consultants are happy to understand your requirements and recommend the right solution for your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-navy px-8 py-3 rounded font-semibold hover:bg-sky-pale transition-colors duration-200 inline-flex items-center gap-2"
          >
            Talk to an Expert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
