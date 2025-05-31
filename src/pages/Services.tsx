
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
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java']
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
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'ElasticSearch']
    },
    {
      icon: Brain,
      title: 'AI Integration & Automation',
      description: 'Cutting-edge artificial intelligence solutions integrated seamlessly into your business processes.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbot Development'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face']
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
      technologies: ['Docker', 'Kubernetes', 'Istio', 'Consul', 'Prometheus']
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
      technologies: ['Spring Boot', '.NET Core', 'Cloud Platforms', 'DevOps Tools']
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
      technologies: ['Salesforce', 'SAP', 'Oracle', 'Power BI', 'Tableau']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive software development services designed to accelerate your digital transformation 
            and drive business growth through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 glass-effect border-0 shadow-lg hover-lift group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
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
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Development <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and technical requirements' },
              { step: '02', title: 'Design', description: 'Creating detailed architecture and user experience designs' },
              { step: '03', title: 'Development', description: 'Agile development with continuous testing and feedback' },
              { step: '04', title: 'Deployment', description: 'Seamless deployment with ongoing support and maintenance' }
            ].map((process, index) => (
              <Card key={index} className="p-6 text-center glass-effect border-0 shadow-lg hover-lift">
                <div className="text-3xl font-bold text-primary mb-4 font-playfair">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our services can help transform your business and achieve your goals
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover-lift">
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
