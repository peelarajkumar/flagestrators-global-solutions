
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Global Banking Platform Modernization',
      client: 'Major Financial Institution',
      category: 'Financial Services',
      duration: '18 months',
      team: '12 developers',
      description: 'Complete modernization of legacy banking systems with microservices architecture, AI-powered fraud detection, and real-time transaction processing.',
      technologies: ['Java Spring Boot', 'React', 'PostgreSQL', 'Apache Kafka', 'Docker', 'Kubernetes'],
      outcomes: [
        '75% reduction in transaction processing time',
        '99.9% system uptime achieved',
        '60% decrease in operational costs',
        'Enhanced security with AI fraud detection'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'Healthcare Consortium',
      category: 'Healthcare',
      duration: '12 months',
      team: '8 developers',
      description: 'Advanced healthcare analytics platform with AI-powered diagnostic insights, patient data management, and real-time monitoring capabilities.',
      technologies: ['Python', 'TensorFlow', 'React', 'MongoDB', 'Apache Spark', 'AWS'],
      outcomes: [
        '40% improvement in diagnostic accuracy',
        'Real-time patient monitoring for 10,000+ patients',
        '50% reduction in administrative overhead',
        'HIPAA-compliant data processing'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      status: 'Completed',
      year: '2023'
    },
    {
      title: 'E-commerce Automation Suite',
      client: 'Retail Giant',
      category: 'E-commerce',
      duration: '10 months',
      team: '10 developers',
      description: 'Comprehensive e-commerce automation platform with AI-powered inventory management, customer behavior analytics, and personalized recommendation engine.',
      technologies: ['Node.js', 'Vue.js', 'PostgreSQL', 'Redis', 'Python ML', 'GCP'],
      outcomes: [
        '35% increase in conversion rates',
        'Automated inventory optimization',
        '25% improvement in customer satisfaction',
        '45% reduction in manual processes'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      status: 'Completed',
      year: '2023'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Manufacturer',
      category: 'Manufacturing',
      duration: '14 months',
      team: '6 developers',
      description: 'IoT-enabled manufacturing monitoring system with predictive maintenance, real-time equipment tracking, and automated quality control.',
      technologies: ['Java', 'Angular', 'InfluxDB', 'MQTT', 'TensorFlow', 'Azure IoT'],
      outcomes: [
        '30% reduction in equipment downtime',
        'Predictive maintenance for 500+ machines',
        '20% improvement in production efficiency',
        'Real-time quality monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      status: 'Completed',
      year: '2023'
    },
    {
      title: 'Educational Platform with AI Tutoring',
      client: 'Education Technology Company',
      category: 'Education',
      duration: '8 months',
      team: '7 developers',
      description: 'Interactive educational platform with AI-powered personalized tutoring, progress tracking, and adaptive learning pathways.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'WebRTC', 'AWS'],
      outcomes: [
        '50% improvement in student engagement',
        'Personalized learning for 50,000+ students',
        '90% user satisfaction rate',
        'Multi-device compatibility'
      ],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'Supply Chain Optimization Platform',
      client: 'Logistics Corporation',
      category: 'Logistics',
      duration: '16 months',
      team: '9 developers',
      description: 'Advanced supply chain management platform with AI-powered route optimization, real-time tracking, and automated vendor management.',
      technologies: ['Python', 'React', 'PostgreSQL', 'Apache Spark', 'TensorFlow', 'Docker'],
      outcomes: [
        '25% reduction in shipping costs',
        'Real-time tracking for global operations',
        '40% improvement in delivery times',
        'Automated vendor performance monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      status: 'In Progress',
      year: '2024'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
            Recent <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects across diverse industries, showcasing innovative solutions 
            that have transformed businesses and delivered measurable results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden glass-effect border-0 shadow-lg hover-lift group">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} border`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-primary font-medium mb-1">{project.client}</p>
                      <p className="text-sm text-gray-500">{project.category} • {project.year}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Calendar className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900">{project.duration}</p>
                      <p className="text-xs text-gray-500">Duration</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900">{project.team}</p>
                      <p className="text-xs text-gray-500">Team Size</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900">{project.outcomes.length}</p>
                      <p className="text-xs text-gray-500">Key Results</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Outcomes:</h4>
                    <div className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Project <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our projects have delivered substantial value across various metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', description: 'Successfully delivered across industries' },
              { number: '95%', label: 'Client Satisfaction', description: 'Average client satisfaction rate' },
              { number: '40%', label: 'Average Cost Savings', description: 'Operational cost reduction achieved' },
              { number: '99.5%', label: 'Uptime Delivered', description: 'System reliability maintained' }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center glass-effect border-0 shadow-lg hover-lift">
                <div className="text-4xl font-bold text-primary mb-2 font-playfair">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Industries <span className="text-gradient">We Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Financial Services',
              'Healthcare',
              'E-commerce',
              'Manufacturing',
              'Education',
              'Logistics',
              'Retail',
              'Technology',
              'Government',
              'Energy',
              'Real Estate',
              'Telecommunications'
            ].map((industry, index) => (
              <Card key={index} className="p-4 text-center glass-effect border-0 shadow-lg hover-lift group cursor-pointer">
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {industry}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
