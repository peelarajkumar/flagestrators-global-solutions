
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Database, Brain, Zap, Users, Star, Play, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.slide-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const heroImages = [
    'https://ia-ace.org/wp-content/uploads/2023/07/Untitled-design-10.png?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    'https://www.gtntechnicalstaffing.com/wp-content/uploads/2021/04/programmer-build-influence.jpeg?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop'
  ];

  const services = [
    {
      icon: Code,
      title: 'Application Development',
      description: 'End-to-end web application development with cutting-edge technologies',
      image: 'https://wallpaperaccess.com/full/4391695.jpg?w=400&h=300&fit=crop',
      features: ['React/Vue.js', 'Node.js/Python', 'Cloud Deployment']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent automation and machine learning solutions for your business',
      image: 'https://www.synapse-innovation.com/wp-content/uploads/2019/12/iStock-851956310.jpg?w=400&h=300&fit=crop',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Seamless legacy system migration and data transformation services',
      image: 'https://wallpaperaccess.com/full/2481551.png?w=400&h=300&fit=crop',
      features: ['ETL Processes', 'Database Optimization', 'Real-time Sync']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent workflow automation',
      image: 'https://pinnacleqm.com/wp-content/uploads/2022/07/enable-automation.jpg?w=400&h=300&fit=crop',
      features: ['Workflow Automation', 'API Integration', 'Business Intelligence']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechCorp',
      content: 'Flagestrators transformed our legacy systems into a modern, scalable platform. Their expertise in AI integration saved us months of development time.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'CEO, DataFlow Inc',
      content: 'The team delivered exceptional results on our data migration project. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager, InnovateLab',
      content: 'Working with Flagestrators was a game-changer. They understood our vision and delivered a solution that exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const projectShowcase = [
    {
      title: 'Enterprise CRM Platform',
      description: 'Built a comprehensive CRM system with AI-powered analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML']
    },
    {
      title: 'E-commerce Automation',
      description: 'Automated inventory management and customer service workflows',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Healthcare Data Migration',
      description: 'Migrated legacy healthcare systems to cloud infrastructure',
      image: 'https://www.innohealthsci.com/wp-content/uploads/2022/12/home-products.jpg?w=600&h=400&fit=crop',
      tech: ['Next', 'Java', 'Azure', 'HIPAA Compliance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Background decorative images */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
            {heroImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden animate-fade-in floating-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <img
                  src={image}
                  alt={`Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full floating-animation opacity-60" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full floating-animation opacity-60" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-teal-200 rounded-full floating-animation opacity-60" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-8 animate-slide-up">
                <span className="text-gradient-primary">Transform Your Business</span>
                <br />
                <span className="text-gray-900">with Cutting-Edge Software</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.3s' }}>
                We deliver enterprise-grade software solutions, AI integration, and digital transformation 
                services that drive innovation and accelerate business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <Link to="/contact">
                  <Button className="btn-primary text-lg h-14 px-10">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button className="btn-secondary text-lg h-14 px-10">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Hero Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 animate-slide-left">
                {heroImages.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square rounded-2xl overflow-hidden shadow-2xl card-hover"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <img
                      src={image}
                      alt={`Hero showcase ${index + 1}`}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gray-900 mb-6 animate-slide-up">
              Our <span className="text-gradient-primary">Core Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in font-medium">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full glass-morphism border-0 card-hover group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <div className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Delivered', icon: TrendingUp },
              { number: '50+', label: 'Happy Clients', icon: Users },
              { number: '8+', label: 'Years Experience', icon: Star },
              { number: '99%', label: 'Client Satisfaction', icon: Shield }
            ].map((stat, index) => (
              <Card key={index} className="p-6 glass-morphism border-0 card-hover group slide-up animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-10 w-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2 font-poppins">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-semibold">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gray-900 mb-6 animate-slide-up">
              Recent <span className="text-gradient-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in font-medium">
              Discover how we've helped businesses transform their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectShowcase.map((project, index) => (
              <Card key={index} className="overflow-hidden glass-morphism border-0 card-hover group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-gray-900 mb-6 animate-slide-up">
              What Our <span className="text-gradient-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in font-medium">
              Real feedback from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 glass-morphism border-0 card-hover group text-center h-full animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-white mb-8 animate-slide-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium">
            Let's discuss how our innovative solutions can accelerate your digital transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Link to="/contact">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 text-lg h-14 px-10 font-semibold">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg h-14 px-10 font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
