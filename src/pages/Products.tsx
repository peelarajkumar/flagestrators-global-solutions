
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Zap, Shield, Cloud, ArrowRight, Users, BarChart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: Brain,
      title: 'AI Enterprise Suite',
      subtitle: 'Intelligent Business Automation Platform',
      description: 'Comprehensive AI-powered platform that automates business processes, enhances decision-making, and provides predictive insights.',
      features: [
        'Machine Learning Pipelines',
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Reporting',
        'Real-time Insights'
      ],
      useCases: ['Process Automation', 'Customer Service', 'Fraud Detection', 'Demand Forecasting'],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Elasticsearch'],
      category: 'AI & Machine Learning',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      icon: Database,
      title: 'DataFlow Pro',
      subtitle: 'Enterprise Data Migration & ETL Platform',
      description: 'Advanced data migration and ETL solution designed for seamless legacy system modernization and data transformation.',
      features: [
        'Visual ETL Designer',
        'Real-time Data Sync',
        'Data Quality Monitoring',
        'Schema Migration Tools',
        'Automated Testing'
      ],
      useCases: ['Legacy Migration', 'Data Warehousing', 'System Integration', 'Data Cleansing'],
      technologies: ['Apache Spark', 'PostgreSQL', 'Apache Airflow', 'Docker'],
      category: 'Data Management',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'CRM360',
      subtitle: 'Next-Generation Customer Relationship Management',
      description: 'Modern CRM solution with AI-powered insights, automated workflows, and comprehensive customer journey tracking.',
      features: [
        'AI-Powered Lead Scoring',
        'Automated Workflows',
        'Customer Journey Mapping',
        'Predictive Sales Analytics',
        'Mobile-First Design'
      ],
      useCases: ['Sales Management', 'Customer Support', 'Marketing Automation', 'Lead Generation'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      category: 'Business Solutions',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      icon: BarChart,
      title: 'Analytics Hub',
      subtitle: 'Business Intelligence & Visualization Platform',
      description: 'Powerful business intelligence platform that transforms raw data into actionable insights with interactive visualizations.',
      features: [
        'Interactive Dashboards',
        'Real-time Analytics',
        'Custom Report Builder',
        'Data Source Connectors',
        'Mobile Analytics'
      ],
      useCases: ['Business Intelligence', 'Performance Monitoring', 'Financial Reporting', 'Market Analysis'],
      technologies: ['React', 'D3.js', 'Apache Superset', 'ClickHouse'],
      category: 'Analytics',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      icon: Cloud,
      title: 'CloudOps Manager',
      subtitle: 'DevOps & Infrastructure Management Platform',
      description: 'Comprehensive DevOps platform for managing cloud infrastructure, deployments, and monitoring across multiple environments.',
      features: [
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Security Scanning'
      ],
      useCases: ['DevOps Automation', 'Infrastructure Management', 'Deployment Pipelines', 'System Monitoring'],
      technologies: ['Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
      category: 'DevOps',
      status: 'Beta',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
    },
    {
      icon: Shield,
      title: 'SecureGuard',
      subtitle: 'Enterprise Security & Compliance Platform',
      description: 'Advanced security platform providing comprehensive threat detection, compliance monitoring, and automated security responses.',
      features: [
        'Threat Detection & Response',
        'Compliance Monitoring',
        'Security Analytics',
        'Incident Management',
        'Automated Remediation'
      ],
      useCases: ['Security Monitoring', 'Compliance Management', 'Threat Detection', 'Risk Assessment'],
      technologies: ['Python', 'ELK Stack', 'Splunk', 'SIEM'],
      category: 'Security',
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800 border-green-200';
      case 'Beta': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Coming Soon': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flagship software products and customizable solutions designed to streamline operations, 
            enhance productivity, and drive digital transformation across industries.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden glass-effect border-0 shadow-lg hover-lift group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                        <p className="text-primary font-medium">{product.subtitle}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(product.status)} border`}>
                      {product.status}
                    </Badge>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Built With:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Product <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our products span across multiple domains to address diverse business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'AI & ML', count: '2 Products', icon: Brain, color: 'from-purple-400 to-pink-400' },
              { name: 'Data Management', count: '1 Product', icon: Database, color: 'from-blue-400 to-cyan-400' },
              { name: 'Business Solutions', count: '1 Product', icon: Users, color: 'from-green-400 to-teal-400' },
              { name: 'Analytics', count: '1 Product', icon: BarChart, color: 'from-yellow-400 to-orange-400' },
              { name: 'DevOps', count: '1 Product', icon: Cloud, color: 'from-indigo-400 to-blue-400' },
              { name: 'Security', count: '1 Product', icon: Shield, color: 'from-red-400 to-pink-400' }
            ].map((category, index) => (
              <Card key={index} className="p-6 text-center glass-effect border-0 shadow-lg hover-lift group cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Custom <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need something unique? We create fully customized solutions tailored to your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry-Specific Solutions',
                description: 'Tailored software solutions designed for specific industries and regulatory requirements.',
                icon: Settings
              },
              {
                title: 'Integration Services',
                description: 'Seamlessly integrate our products with your existing systems and third-party applications.',
                icon: Zap
              },
              {
                title: 'White-Label Options',
                description: 'Rebrand our products with your company identity for resale or internal deployment.',
                icon: Code
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 text-center glass-effect border-0 shadow-lg hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule a demo to see how our products can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover-lift">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold">
                Request Custom Solution
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
