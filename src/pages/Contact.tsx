import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Brief Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-hero-bg">
        <div className="absolute inset-0 premium-gradient"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">Let's Create Together</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-panel p-8">
                <h2 className="font-display text-3xl font-bold mb-8 text-foreground">
                  Send Us Your Brief
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="bg-muted border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+27 (0)11 xxx xxxx"
                        className="bg-muted border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-muted border border-border rounded-md text-foreground"
                      >
                        <option value="">Select project type</option>
                        <option value="commercial">Commercial</option>
                        <option value="film">Film/Series</option>
                        <option value="music-video">Music Video</option>
                        <option value="corporate">Corporate</option>
                        <option value="documentary">Documentary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-muted border border-border rounded-md text-foreground"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under R10,000</option>
                        <option value="10k-25k">R10,000 - R25,000</option>
                        <option value="25k-50k">R25,000 - R50,000</option>
                        <option value="50k-100k">R50,000 - R100,000</option>
                        <option value="over-100k">Over R100,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, timeline, specific requirements, and any reference materials you'd like to share..."
                      rows={6}
                      required
                      className="bg-muted border-border"
                    />
                  </div>

                  <Button type="submit" className="btn-cinematic w-full md:w-auto">
                    Send Brief
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass-panel p-6">
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Studio Address</div>
                      <div className="text-muted-foreground text-sm">
                        123 Creative Hub<br />
                        Johannesburg, South Africa<br />
                        2000
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground text-sm">+27 (0)11 123 4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground text-sm">hello@immortalmedia.co.za</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-panel p-6">
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                  Quick Actions
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full justify-start btn-ghost"
                    onClick={() => window.open('https://wa.me/27111234567', '_blank')}
                  >
                    <MessageCircle size={16} className="mr-3" />
                    WhatsApp Us
                  </Button>
                  
                  <Button 
                    className="w-full justify-start btn-ghost"
                    onClick={() => window.open('https://calendly.com/immortalmedia', '_blank')}
                  >
                    <Calendar size={16} className="mr-3" />
                    Book a Meeting
                  </Button>
                </div>
              </Card>

              {/* Studio Hours */}
              <Card className="glass-panel p-6">
                <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
                  Studio Hours
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-4">
                    <div className="text-primary text-xs">
                      Emergency support available 24/7 for ongoing projects
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-muted">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-primary mx-auto mb-4" />
            <div className="font-display text-xl font-semibold text-foreground mb-2">
              Studio Location
            </div>
            <div className="text-muted-foreground">
              Interactive map would be embedded here
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;