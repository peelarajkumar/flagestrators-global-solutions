
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Database, Brain, Zap, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const heroKeywords = [
    'AI Integration',
    'Enterprise Software',
    'Automation Solutions',
    'Data Migration',
    'Microservices',
    'Legacy Modernization'
  ];

  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development from concept to deployment'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Cutting-edge artificial intelligence solutions for business automation'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Seamless legacy system migration and data transformation'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-bounce-slow" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent/20 to-warning/20 rounded-full animate-float" />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full animate-bounce-slow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6">
              <span className="text-gradient">Flagestrators Global</span>
              <br />
              <span className="text-gray-800">Software Solutions</span>
            </h1>
            
            <div className="mb-8 h-16 flex items-center justify-center">
              <div className="text-xl sm:text-2xl text-gray-600 font-medium">
                <span className="inline-block">Transforming businesses through </span>
                <span className="text-primary font-semibold animate-pulse">
                  {heroKeywords[Math.floor(Date.now() / 3000) % heroKeywords.length]}
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge software solutions, AI integration, and enterprise-grade applications 
              that drive innovation and accelerate digital transformation for businesses worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover-lift">
                  Talk to Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Core <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover-lift animate-on-scroll glass-effect border-0 shadow-lg">
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '20+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '4.9', label: 'Client Rating', icon: Star }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="text-4xl font-bold text-primary mb-2 font-playfair">
                  {stat.number}
                  {stat.icon && <Star className="inline h-8 w-8 text-yellow-400 ml-1" />}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our innovative solutions can accelerate your digital transformation journey
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover-lift">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
