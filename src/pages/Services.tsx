import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Film, Palette, Sparkles, Volume2, Cloud } from 'lucide-react';
import servicesHero from '@/assets/services-hero.jpg';

const Services = () => {
  const services = [
    {
      icon: Film,
      title: "Editorial",
      description: "Precision editing that shapes your narrative with expert storytelling techniques and seamless post-production workflows.",
      features: ["Offline & Online Editing", "Multi-camera Sync", "Conforming", "Proxy Workflows"]
    },
    {
      icon: Palette,
      title: "Colour Grading",
      description: "Transform your footage with cinematic color palettes that enhance mood and elevate visual impact.",
      features: ["HDR Grading", "Film Emulation", "Look Development", "Dailies Services"]
    },
    {
      icon: Sparkles,
      title: "VFX & Motion Graphics",
      description: "Stunning visual effects and motion graphics that seamlessly integrate with your live-action footage.",
      features: ["Compositing", "CGI Integration", "Title Design", "2D/3D Animation"]
    },
    {
      icon: Volume2,
      title: "Sound Design & Mix",
      description: "Immersive audio experiences that complement your visuals with professional sound design and mixing.",
      features: ["5.1 Surround Mix", "Sound Design", "ADR", "Music Composition"]
    },
    {
      icon: Cloud,
      title: "Cloud Delivery",
      description: "Secure, efficient delivery systems that ensure your content reaches its destination safely and on time.",
      features: ["Secure Transfer", "Global CDN", "Multi-format Delivery", "Asset Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 bg-hero-bg/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">Our Services</h1>
          <p className="hero-subtitle max-w-2xl mx-auto mb-8">
            Comprehensive post-production solutions for every stage of your creative journey
          </p>
          <Button className="btn-cinematic">
            View Our Work
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Premium Post-Production Services
            </h2>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Every project receives the same meticulous attention to detail, regardless of scope or budget
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-panel p-8 smooth-transition hover:scale-105 group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon size={32} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Process
            </h2>
            <p className="hero-subtitle max-w-3xl mx-auto">
              A streamlined workflow designed to bring your vision to life efficiently and creatively
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Brief & Planning", description: "Understanding your vision and technical requirements" },
              { step: "02", title: "Production", description: "Collaborative workflow with real-time feedback loops" },
              { step: "03", title: "Review & Refinement", description: "Iterative process ensuring perfect final output" },
              { step: "04", title: "Delivery", description: "Secure delivery in all required formats and specifications" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="font-display text-2xl font-bold text-primary">{phase.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your creative vision to life with our premium post-production services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-cinematic">
              Send Us a Brief
            </Button>
            <Button variant="outline" className="btn-ghost">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;