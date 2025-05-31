
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For demo purposes, we'll simulate a successful email send
      // To configure EmailJS properly, you'll need to:
      // 1. Create an account at https://www.emailjs.com/
      // 2. Create a service and template
      // 3. Replace the IDs below with your actual EmailJS configuration
      
      console.log('Form submission:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Uncomment and configure when you have EmailJS set up:
      /*
      await emailjs.send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'contact@flagestrators.com'
        },
        'your_public_key' // Replace with your EmailJS public key
      );
      */

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Flagestrators Global Software Solutions', 'Hyderabad, Telangana, India'],
      color: 'from-primary to-secondary'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 XXX-XXX-XXXX', 'Available Mon-Fri 9AM-6PM IST'],
      color: 'from-secondary to-accent'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@flagestrators.com', 'Response within 24 hours'],
      color: 'from-accent to-primary'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      color: 'from-primary to-accent'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how our innovative solutions 
            can help you achieve your goals. We're here to answer your questions and provide expert guidance.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 glass-effect border-0 shadow-lg">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-primary focus:ring-primary resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 rounded-lg font-semibold shadow-lg hover-lift"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to help you succeed. Reach out to us through any of the following channels, 
                  and we'll respond promptly to discuss your project needs.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 glass-effect border-0 shadow-lg hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`${idx === 0 ? 'text-gray-900 font-medium' : 'text-gray-600'} text-sm`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Hyderabad's technology hub, we're easily accessible and ready to meet in person.
            </p>
          </div>

          <Card className="overflow-hidden glass-effect border-0 shadow-lg">
            <div className="aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  Hyderabad, Telangana, India
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Interactive map integration will be configured with your specific address
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services and processes
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while enterprise solutions can range from 3-18 months. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer: 'Yes, we provide comprehensive post-launch support including bug fixes, updates, security patches, and feature enhancements. We offer various support packages to meet different needs.'
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Absolutely! We excel at collaborative projects and can integrate seamlessly with your existing development team, following your established processes and standards.'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We have extensive experience across multiple industries including healthcare, finance, e-commerce, manufacturing, education, and logistics. Our solutions are adaptable to various business domains.'
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 glass-effect border-0 shadow-lg hover-lift">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
