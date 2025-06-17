
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Brain, Cog, Shield, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'End-to-End Web Application Development',
      description: 'Complete web application development from concept to deployment using modern frameworks and best practices.',
      features: [
        'Custom Web Applications',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Responsive Design',
        'API Development & Integration'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java'],
      image: 'https://th.bing.com/th/id/R.efa0ef9a399d88ef0441657557d2cc88?rik=zuSrq5VHUiC7iw&riu=http%3a%2f%2fmuscatwebs.com%2fblog%2fwp-content%2fuploads%2f2024%2f07%2f9f76fde70a-1000x480.jpg&ehk=eIvZz8txFABpv%2fv29%2fMcHV4ZFoz1PHKnElicyog7%2bio%3d&risl=&pid=ImgRaw&r=0?w=400&h=300&fit=crop'
    },
    {
      icon: Database,
      title: 'Schema Design to Production Deployment',
      description: 'Comprehensive database design and deployment solutions for optimal performance and scalability.',
      features: [
        'Database Architecture Design',
        'Performance Optimization',
        'Data Modeling',
        'Migration Strategies',
        'Backup & Recovery Solutions'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase'],
      image: 'https://th.bing.com/th/id/OIP.Xj6_aGAI63CGvaMdFqbr1AHaD4?o=7rm=3&rs=1&pid=ImgDetMain?w=400&h=300&fit=crop'
    },
    {
      icon: Brain,
      title: 'AI Integration & Automation Piping',
      description: 'Cutting-edge artificial intelligence solutions integrated seamlessly into your business processes.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbot Development'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
      image: 'https://th.bing.com/th/id/OIP.syZzti6YwMTlXlhAyPTr3wHaEv?rs=1&pid=ImgDetMain?w=400&h=300&fit=crop'
    },
    {
      icon: Cog,
      title: 'Microservices Architecture',
      description: 'Scalable microservices solutions for enterprise-grade applications with high availability.',
      features: [
        'Service Decomposition',
        'API Gateway Implementation',
        'Container Orchestration',
        'Service Mesh',
        'Monitoring & Logging'
      ],
      technologies: ['Docker', 'Kubernetes', 'Istio', 'Consul', 'Prometheus'],
      image: 'https://img.freepik.com/premium-photo/blockchain-technology-transformation-cybersecurity-big-data-technology-network-blue-background_1236927-8203.jpg?w=400&h=300&fit=crop'
    },
    {
      icon: Shield,
      title: 'Legacy Project Migration',
      description: 'Seamless migration of legacy systems to modern, secure, and scalable platforms.',
      features: [
        'Legacy Assessment',
        'Migration Planning',
        'Data Migration',
        'Security Upgrades',
        'Performance Enhancement'
      ],
      technologies: ['Spring Boot', '.NET Core', 'Cloud Platforms', 'DevOps Tools'],
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop'
    },
    {
      icon: Cloud,
      title: 'CRM & Enterprise Solutions',
      description: 'Comprehensive business management solutions including CRM, inventory, and resource management.',
      features: [
        'Customer Relationship Management',
        'Inventory Management',
        'Resource Planning',
        'Wealth Management',
        'Business Intelligence'
      ],
      technologies: ['Salesforce', 'SAP', 'Oracle', 'Power BI', 'Tableau'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
  ];

  const backgroundImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-green-50/20 relative overflow-hidden">
        {/* Animated background images */}
        <div className="absolute inset-0 opacity-10">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="absolute w-40 h-40 rounded-2xl overflow-hidden floating-animation"
              style={{
                top: `${15 + (index * 25)}%`,
                right: `${5 + (index * 15)}%`,
                animationDelay: `${index * 2.5}s`
              }}
            >
              <img src={image} alt={`Background ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full floating-animation opacity-60" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full floating-animation opacity-60" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-teal-200 rounded-full floating-animation opacity-60" style={{ animationDelay: '4s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 animate-slide-up">
            Our <span className="text-gradient-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Comprehensive software development services designed to accelerate your digital transformation 
            and drive business growth through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
  {/* Animated decorative images */}
  <div className="absolute top-10 left-10 w-24 h-24 rounded-xl overflow-hidden floating-animation opacity-15">
    <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&h=200&fit=crop" alt="Development" className="w-full h-full object-cover" />
  </div>
  <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full overflow-hidden floating-animation opacity-15" style={{ animationDelay: '3s' }}>
    <img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=200&h=200&fit=crop" alt="Architecture" className="w-full h-full object-cover" />
  </div>
  <div className="absolute bottom-20 left-1/4 w-28 h-28 rounded-2xl overflow-hidden floating-animation opacity-15" style={{ animationDelay: '5s' }}>
    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop" alt="AI" className="w-full h-full object-cover" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="p-5 glass-morphism border-0 shadow-lg card-hover group h-full animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="aspect-video overflow-hidden rounded-xl mb-4">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="flex items-start space-x-3 mb-5">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <service.icon className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {service.technologies.map((tech, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link to="/contact">
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white transform hover:scale-105 transition-all duration-300 text-sm">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50/50 via-green-50/30 to-teal-50/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="absolute w-16 h-16 bg-emerald-200 rounded-full floating-animation opacity-20"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${index * 1.2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Our Development <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery', 
                description: 'Understanding your business needs and technical requirements',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop'
              },
              { 
                step: '02', 
                title: 'Design', 
                description: 'Creating detailed architecture and user experience designs',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop'
              },
              { 
                step: '03', 
                title: 'Development', 
                description: 'Agile development with continuous testing and feedback',
                image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop'
              },
              { 
                step: '04', 
                title: 'Deployment', 
                description: 'Seamless deployment with ongoing support and maintenance',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop'
              }
            ].map((process, index) => (
              <Card key={index} className="overflow-hidden glass-morphism border-0 shadow-lg card-hover group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={process.image} 
                    alt={process.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-4 font-poppins">{process.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-6 animate-slide-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Let's discuss how our services can help transform your business and achieve your goals
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 animate-scale-in">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
