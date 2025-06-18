
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
      image: 'https://th.bing.com/th/id/OIP.d_1vVnJznZBJA6wR2cpjwwHaHa?rs=1&pid=ImgDetMain?w=600&h=400&fit=crop'
    },
    {
      icon: Database,
      title: 'DataFlow Pro',
      subtitle: 'Enterprise Data Migration & ETL Platform',
      description: 'Advanced data migration and ETL solution designed for seamless legacy system modernization, intelligent data mapping, scalable transformation, and integration efficiency.',
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
      description: 'Modern CRM solution with AI-powered insights, automated workflows, and comprehensive customer journey tracking real-time analytics, and seamless integration capabilities.',
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
      image: 'https://wallpaperaccess.com/full/1826227.jpg?w=600&h=400&fit=crop'
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
      image: 'https://phoenixnap.com/blog/wp-content/uploads/2021/08/community-cloud-overview.jpg?w=600&h=400&fit=crop'
    },
    {
      icon: Shield,
      title: 'SecureGuard',
      subtitle: 'Enterprise Security & Compliance Platform',
      description: 'Advanced security platform providing comprehensive threat detection, compliance monitoring, and automated security.',
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
      image: 'https://www.symestic.com/hubfs/software%20securitiy.jpg?w=600&h=400&fit=crop'
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-green-50/20 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full floating-animation opacity-60" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full floating-animation opacity-60" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 animate-slide-up">
            Our <span className="text-gradient-primary">Products</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.3s' }}>
            Flagship software products and customizable solutions designed to streamline operations, 
            enhance productivity, and drive digital transformation across industries.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <Card
          key={index}
          className="overflow-hidden glass-morphism border-0 shadow-lg card-hover group animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
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
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full flex items-center justify-center">
                  <product.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="text-emerald-600 font-semibold">{product.subtitle}</p>
                </div>
              </div>
              <Badge className={`${getStatusColor(product.status)} border`}>
                {product.status}
              </Badge>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 font-medium">{product.description}</p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Use Cases:</h4>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((useCase, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {useCase}
                  </span>
                ))}
              </div>
            </div> */}

            {/* <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Built With:</h4>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div> */}

            <div className="flex space-x-3">
              <Link to="/contact" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
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
      <section className="py-20 bg-gradient-to-r from-emerald-50/50 via-green-50/30 to-teal-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Product <span className="text-gradient-primary">Categories</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
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
              <Card key={index} className="p-6 text-center glass-morphism border-0 shadow-lg card-hover group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600 font-medium">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Custom <span className="text-gradient-primary">Solutions</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              Need something unique? We create fully customized solutions tailored to your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry-Specific Solutions',
                description: 'Tailored software solutions designed for specific industries and regulatory requirements.',
                icon: Settings,
                image: 'https://www.fededacademy.com/wp-content/uploads/2023/01/feded-academy-business-professionals-federal-employee-benefits-19.jpg?w=400&h=300&fit=crop'
              },
              {
                title: 'Integration Services',
                description: 'Seamlessly integrate our products with your existing systems and third-party applications.',
                icon: Zap,
                image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
              },
              {
                title: 'White-Label Options',
                description: 'Rebrand our products with your company identity for resale or internal deployment.',
                icon: Code,
                image: 'https://th.bing.com/th/id/R.f80c8408a78d179b7fa235ba82ad62e6?rik=IjO51ffhk%2bfREw&riu=http%3a%2f%2flegalserviceindia.com%2flegal%2fuploads%2fbasicsofnegotiationitsprocess_681548309.jpg&ehk=B7%2f5u8DNV12UOfjAE9QTmWOh0XfdgZ%2f%2biYxxfsAcQO0%3d&risl=&pid=ImgRaw&r=0?w=400&h=300&fit=crop'
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden glass-morphism border-0 shadow-lg card-hover group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">{service.description}</p>
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
            Interested in Our Products?
          </h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed animate-fade-in font-medium">
            Schedule a demo to see how our products can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-emerald-600 hover:bg-gray-100 hover:text-emerald-600 px-8 py-3 rounded-full font-semibold">
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
