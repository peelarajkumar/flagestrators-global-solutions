
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Database, Brain, Zap, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

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

  const heroImages = [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
  ];

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
      description: 'End-to-end web application development from concept to deployment',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Cutting-edge artificial intelligence solutions for business automation',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Seamless legacy system migration and data transformation',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop'
    }
  ];

  const techImages = [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop'
  ];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    const techInterval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techImages.length);
    }, 5000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(serviceInterval);
      clearInterval(techInterval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50/80 via-blue-50/60 to-cyan-50/40">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-blue-400/10 to-cyan-400/10" />
        
        {/* Hero Background Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroIndex ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-cyan-400/30 to-sky-400/30 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full animate-wiggle" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fly-in">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-playfair font-bold mb-8">
              <span className="text-gradient animate-pulse-slow">Flagestrators Global</span>
              <br />
              <span className="text-gray-800 animate-slide-in-left">Software Solutions</span>
            </h1>
            
            <div className="mb-10 h-20 flex items-center justify-center">
              <div className="text-xl sm:text-3xl text-gray-700 font-medium">
                <span className="inline-block animate-slide-in-right">Transforming businesses through </span>
                <span className="text-sky-600 font-bold animate-wiggle text-2xl sm:text-4xl">
                  {heroKeywords[Math.floor(Date.now() / 3000) % heroKeywords.length]}
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-slow">
              We deliver cutting-edge software solutions, AI integration, and enterprise-grade applications 
              that drive innovation and accelerate digital transformation for businesses worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-zoom-in">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-2xl button-hover glow-effect text-lg">
                  Talk to Us
                  <ArrowRight className="ml-3 h-6 w-6 animate-bounce" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-3 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white px-10 py-4 rounded-full font-bold transition-all duration-500 hover-lift text-lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-8 h-12 border-3 border-sky-400 rounded-full flex justify-center">
            <div className="w-2 h-4 bg-sky-400 rounded-full mt-3 animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* Services Preview with Carousel */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Tech Carousel */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          {techImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentTechIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            >
              <img
                src={image}
                alt={`Tech ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl sm:text-6xl font-playfair font-bold text-gray-900 mb-6 animate-slide-down">
              Our Core <span className="text-gradient animate-wiggle">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          {/* Automatic Services Carousel */}
          <div className="relative mb-16">
            <Carousel className="w-full">
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full glass-effect border-0 shadow-2xl hover-lift card-hover animate-on-scroll group overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                          <service.icon className="h-10 w-10 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-sky-100 hover:bg-sky-200 border-sky-300" />
              <CarouselNext className="right-4 bg-sky-100 hover:bg-sky-200 border-sky-300" />
            </Carousel>
          </div>

          {/* Featured Service Card */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto glass-effect border-0 shadow-2xl hover-lift p-10 animate-scale-in">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                <img
                  src={services[currentServiceIndex].image}
                  alt={services[currentServiceIndex].title}
                  className="w-full h-full object-cover animate-zoom-in"
                />
              </div>
              <h3 className="text-3xl font-bold text-sky-600 mb-4">{services[currentServiceIndex].title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{services[currentServiceIndex].description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-24 bg-gradient-to-r from-sky-100/80 via-blue-100/80 to-cyan-100/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/20 to-blue-200/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              { number: '50+', label: 'Projects Delivered', icon: '🚀' },
              { number: '20+', label: 'Happy Clients', icon: '😊' },
              { number: '5+', label: 'Years Experience', icon: '⭐' },
              { number: '4.9', label: 'Client Rating', icon: Star }
            ].map((stat, index) => (
              <Card key={index} className="p-8 glass-effect border-0 shadow-2xl hover-lift card-hover animate-on-scroll group">
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {typeof stat.icon === 'string' ? stat.icon : <Star className="h-12 w-12 text-yellow-400 mx-auto" />}
                </div>
                <div className="text-5xl font-bold text-sky-600 mb-3 font-playfair animate-pulse-slow">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Latest <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions for modern businesses
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {techImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden glass-effect border-0 shadow-2xl hover-lift card-hover group">
                    <div className="aspect-video">
                      <img
                        src={image}
                        alt={`Technology ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Technology {index + 1}</h3>
                      <p className="text-gray-600">Innovative solutions for digital transformation</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-sky-100 hover:bg-sky-200 border-sky-300" />
            <CarouselNext className="right-4 bg-sky-100 hover:bg-sky-200 border-sky-300" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-blue-600/20" />
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-6xl font-playfair font-bold text-white mb-8 animate-slide-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-white/95 mb-12 leading-relaxed animate-fade-in-slow">
            Let's discuss how our innovative solutions can accelerate your digital transformation journey
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 px-12 py-5 rounded-full font-bold shadow-2xl hover-lift button-hover text-xl">
              Start Your Project Today
              <ArrowRight className="ml-3 h-6 w-6 animate-bounce" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
