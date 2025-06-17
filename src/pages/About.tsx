
import { Card } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'P Murali Krishna',
      role: 'Founder & CEO',
      image: '/assets/images/ceo-img.jpeg',
      bio: 'Visionary leader driving innovation in enterprise software solutions with extensive experience in business strategy and technology leadership.',
      social: {
        linkedin: '#',
        email: 'murali@flagestrators.com'
      }
    },
    {
      name: 'M Hari Krishna',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in designing scalable system architectures and leading complex software implementations across diverse technology stacks.',
      social: {
        linkedin: '#',
        email: 'hari@flagestrators.com'
      }
    },
    {
      name: 'A Ravi Teja',
      role: 'Technical Lead',
      image: '/assets/images/tejdev.jpg',
      bio: 'Full-stack development expert specializing in modern web technologies, microservices, and cloud-native solutions.',
      social: {
        linkedin: '#',
        email: 'ravi@flagestrators.com'
      }
    },
    {
      name: 'P Rajkumar',
      role: 'AI Engineer',
      image: '/assets/images/rajdev.jpeg',
      bio: 'AI integration specialist with deep expertise in web development and intelligent automation solutions.',
      social: {
        linkedin: '#',
        email: 'rajkumar@flagestrators.com'
      }
    },
    {
      name: 'L Shiva',
      role: 'Senior Business Analyst',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      bio: 'Business analysis expert bridging technology and business requirements to deliver solutions that drive measurable outcomes.',
      social: {
        linkedin: '#',
        email: 'shiva@flagestrators.com'
      }
    }
  ];

  const backgroundImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop'
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
              className="absolute w-32 h-32 rounded-full overflow-hidden floating-animation"
              style={{
                top: `${20 + (index * 15)}%`,
                left: `${10 + (index * 20)}%`,
                animationDelay: `${index * 2}s`
              }}
            >
              <img src={image} alt={`Background ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full floating-animation opacity-60" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full floating-animation opacity-60" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-teal-200 rounded-full floating-animation opacity-60" style={{ animationDelay: '4s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 animate-slide-up">
            About <span className="text-gradient-primary">Flagestrators Global</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            We are a dynamic software solutions company dedicated to transforming businesses through 
            innovative technology, AI integration, and world-class development practices.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated decorative images */}
        <div className="absolute top-10 right-10 w-24 h-24 rounded-xl overflow-hidden floating-animation opacity-20">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop" alt="Vision" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full overflow-hidden floating-animation opacity-20" style={{ animationDelay: '3s' }}>
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=200&fit=crop" alt="Mission" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 glass-morphism border-0 shadow-lg card-hover animate-slide-left">
              <h2 className="text-3xl font-poppins font-bold text-emerald-600 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in delivering transformative software solutions that empower 
                businesses to achieve unprecedented growth through cutting-edge technology and AI innovation.
              </p>
            </Card>
            <Card className="p-8 glass-morphism border-0 shadow-lg card-hover animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-poppins font-bold text-emerald-600 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To partner with organizations worldwide in their digital transformation journey by 
                providing innovative, scalable, and intelligent software solutions that drive operational 
                excellence and competitive advantage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50/50 via-green-50/30 to-teal-50/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="absolute w-16 h-16 bg-emerald-200 rounded-full floating-animation opacity-30"
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
              Meet Our <span className="text-gradient-primary">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in software development, 
              AI integration, and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden card-hover glass-morphism border-0 shadow-lg group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div> */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-emerald-600 hover:text-emerald-700 transition-colors transform hover:scale-110">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-emerald-600 hover:text-emerald-700 transition-colors transform hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated images */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-2xl overflow-hidden floating-animation opacity-15">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop" alt="Innovation" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-20 left-20 w-28 h-28 rounded-full overflow-hidden floating-animation opacity-15" style={{ animationDelay: '2s' }}>
          <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=300&fit=crop" alt="Excellence" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-xl overflow-hidden floating-animation opacity-10" style={{ animationDelay: '4s' }}>
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop" alt="Partnership" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Our <span className="text-gradient-primary">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
                image: 'https://img.freepik.com/premium-photo/young-business-people-working-together-modern-office_146671-32300.jpg?w=400&h=300&fit=crop'
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering the highest quality in everything we do.',
                image: 'https://t3.ftcdn.net/jpg/05/90/81/12/360_F_590811228_qjIOmmk1uTJputl3myKsKjMXwSD6hYQA.jpg?w=400&h=300&fit=crop'
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships based on trust, transparency, and mutual success.',
                image: 'https://th.bing.com/th/id/R.8fd119a065478bfe3ed273da840fa968?rik=sqMznfpIFCZU%2fA&riu=http%3a%2f%2fnanoprotech.pk%2fwp-content%2fuploads%2f2016%2f08%2fPartnership.jpg&ehk=2yTWYzzeik4ObbWYvDE3HEuKwHw8pa2S007hQS%2bGHcY%3d&risl=&pid=ImgRaw&r=0?w=400&h=300&fit=crop'
              }
            ].map((value, index) => (
              <Card key={index} className="overflow-hidden glass-morphism border-0 shadow-lg card-hover group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img src={value.image} alt={value.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
