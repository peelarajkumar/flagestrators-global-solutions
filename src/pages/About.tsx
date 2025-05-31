
import { Card } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'P Murali Krishna',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader driving innovation in enterprise software solutions with extensive experience in business strategy and technology leadership.',
      social: {
        linkedin: '#',
        email: 'murali@flagestrators.com'
      }
    },
    {
      name: 'Hari Krishna',
      role: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in designing scalable system architectures and leading complex software implementations across diverse technology stacks.',
      social: {
        linkedin: '#',
        email: 'hari@flagestrators.com'
      }
    },
    {
      name: 'Ravi Teja',
      role: 'Technical Lead, Senior Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack development expert specializing in modern web technologies, microservices, and cloud-native solutions.',
      social: {
        linkedin: '#',
        email: 'ravi@flagestrators.com'
      }
    },
    {
      name: 'Rajkumar',
      role: 'Senior Full Stack Developer, AI Integration Engineer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
      bio: 'AI integration specialist with deep expertise in machine learning implementations and intelligent automation solutions.',
      social: {
        linkedin: '#',
        email: 'rajkumar@flagestrators.com'
      }
    },
    {
      name: 'Shiva',
      role: 'Senior Business Analyst',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
      bio: 'Business analysis expert bridging technology and business requirements to deliver solutions that drive measurable outcomes.',
      social: {
        linkedin: '#',
        email: 'shiva@flagestrators.com'
      }
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
            About <span className="text-gradient">Flagestrators Global</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dynamic software solutions company dedicated to transforming businesses through 
            innovative technology, AI integration, and world-class development practices.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 glass-effect border-0 shadow-lg hover-lift">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in delivering transformative software solutions that empower 
                businesses to achieve unprecedented growth through cutting-edge technology and AI innovation.
              </p>
            </Card>
            <Card className="p-8 glass-effect border-0 shadow-lg hover-lift">
              <h2 className="text-3xl font-playfair font-bold text-secondary mb-4">Our Mission</h2>
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
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in software development, 
              AI integration, and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-lift glass-effect border-0 shadow-lg group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-primary hover:text-primary/80 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-primary hover:text-primary/80 transition-colors">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
              },
              {
                title: 'Excellence',
                description: 'We are committed to delivering the highest quality in everything we do.'
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships based on trust, transparency, and mutual success.'
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 text-center glass-effect border-0 shadow-lg hover-lift">
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
