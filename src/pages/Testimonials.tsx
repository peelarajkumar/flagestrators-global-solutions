
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CTO',
      company: 'TechCorp Industries',
      rating: 5,
      text: 'Flagestrators Global transformed our legacy systems into a modern, scalable platform. Their AI integration has improved our operational efficiency by 60%. Outstanding technical expertise and project management.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      title: 'VP of Engineering',
      company: 'DataFlow Solutions',
      rating: 5,
      text: 'The team delivered exceptional results on our data migration project. Their attention to detail and proactive communication made the complex process seamless. Highly recommend their services.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Director of Operations',
      company: 'Global Logistics Inc.',
      rating: 5,
      text: 'Flagestrators delivered a comprehensive supply chain optimization platform that reduced our shipping costs by 25%. Their innovative approach and technical excellence exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      title: 'Chief Information Officer',
      company: 'HealthTech Innovations',
      rating: 5,
      text: 'The healthcare analytics platform they developed has revolutionized our patient care processes. The AI-powered insights have improved diagnostic accuracy by 40%. Exceptional work!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lisa Wang',
      title: 'Head of Digital Transformation',
      company: 'RetailMax Group',
      rating: 5,
      text: 'Their e-commerce automation suite increased our conversion rates by 35% and dramatically improved customer satisfaction. The team is professional, skilled, and delivers on time.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Robert Kumar',
      title: 'IT Director',
      company: 'Manufacturing Plus',
      rating: 5,
      text: 'The IoT integration project exceeded our expectations. Real-time monitoring and predictive maintenance capabilities have reduced our equipment downtime by 30%. Outstanding technical team.',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Amanda Foster',
      title: 'Chief Technology Officer',
      company: 'FinanceForward',
      rating: 5,
      text: 'Flagestrators modernized our entire banking platform with incredible efficiency. The fraud detection system they implemented has saved us millions. Their expertise in financial services is unmatched.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      title: 'VP Technology',
      company: 'EduTech Solutions',
      rating: 5,
      text: 'The AI-powered educational platform they created has transformed how we deliver personalized learning. Student engagement improved by 50%, and teachers love the adaptive learning features.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const companyLogos = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1560472354-adf27b0d2d6a?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1560472355-ac8a87cd7de5?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1560472355-176d1fad1edc?w=200&h=100&fit=crop'
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-green-50/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="absolute w-20 h-20 bg-emerald-200 rounded-full floating-animation opacity-20"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${index * 0.8}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 animate-slide-up">
            What Our Clients <span className="text-gradient-primary">Say About Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Don't just take our word for it. Here's what industry leaders and satisfied clients 
            have to say about their experience working with Flagestrators Global.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated decorative images */}
        <div className="absolute top-20 right-10 w-24 h-24 rounded-full overflow-hidden floating-animation opacity-15">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop" alt="Success" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-20 left-10 w-28 h-28 rounded-2xl overflow-hidden floating-animation opacity-15" style={{ animationDelay: '3s' }}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop" alt="Team" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 glass-morphism border-0 shadow-lg card-hover group relative overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-emerald-600" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-emerald-600 font-medium">{testimonial.title}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Fixed with primary green background */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white mb-16 animate-slide-up">
            <h2 className="text-4xl font-poppins font-bold mb-4">
              Client Success by the Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '98%', label: 'Client Retention Rate', description: 'Long-term partnerships built on trust' },
              { number: '4.9/5', label: 'Average Rating', description: 'Consistently high client satisfaction' },
              { number: '100%', label: 'On-Time Delivery', description: 'Projects delivered as promised' },
              { number: '45%', label: 'Average ROI Increase', description: 'Measurable business value delivered' }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold font-poppins mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Companies */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 rounded-xl overflow-hidden floating-animation opacity-10">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop" alt="Company" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full overflow-hidden floating-animation opacity-10" style={{ animationDelay: '4s' }}>
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop" alt="Business" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Trusted by <span className="text-gradient-primary">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with companies across various industries and sizes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companyLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300 card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="max-h-16 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-gradient-to-r from-emerald-50/50 via-green-50/30 to-teal-50/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="absolute w-12 h-12 bg-emerald-200 rounded-full floating-animation opacity-30"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${index * 1.5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient-primary">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive deeper into specific case studies and see how we've transformed businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Banking Platform Modernization',
                result: '75% faster transactions',
                industry: 'Financial Services',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
              },
              {
                title: 'Healthcare Analytics Platform',
                result: '40% improved diagnostic accuracy',
                industry: 'Healthcare',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop'
              },
              {
                title: 'E-commerce Automation',
                result: '35% increase in conversion',
                industry: 'Retail',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
              }
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden glass-morphism border-0 shadow-lg card-hover group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-emerald-600 font-semibold mb-1">{story.result}</p>
                  <p className="text-sm text-gray-600">{story.industry}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
