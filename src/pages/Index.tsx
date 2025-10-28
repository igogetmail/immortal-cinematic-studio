import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Film, Palette, Sparkles, Volume2, Cloud, ArrowRight, Star } from 'lucide-react';
import heroMain from '@/assets/hero-main.jpg';
import workAutoCampaign from '@/assets/work-auto-campaign.jpg';
import workHeritageDoc from '@/assets/work-heritage-doc.jpg';
import workFashionForward from '@/assets/work-fashion-forward.jpg';

const Index = () => {
  const services = [
    {
      icon: Film,
      title: "Editorial",
      description: "Expert narrative construction with precision editing and seamless workflows."
    },
    {
      icon: Palette,
      title: "Colour Grading",
      description: "Cinematic color palettes that transform footage into visual storytelling."
    },
    {
      icon: Sparkles,
      title: "VFX & Motion",
      description: "Stunning visual effects and motion graphics that captivate audiences."
    },
    {
      icon: Volume2,
      title: "Sound Design",
      description: "Immersive audio experiences that complement and enhance visuals."
    }
  ];

  const featuredWork = [
    {
      title: "Premium Auto Campaign",
      category: "Commercial",
      thumbnail: workAutoCampaign
    },
    {
      title: "Heritage Documentary", 
      category: "Documentary",
      thumbnail: workHeritageDoc
    },
    {
      title: "Fashion Forward",
      category: "Commercial", 
      thumbnail: workFashionForward
    }
  ];

  const testimonials = [
    {
      quote: "Immortal Media consistently delivers world-class post-production that elevates our content to international standards.",
      author: "Sarah Mitchell",
      company: "Global Productions"
    },
    {
      quote: "Working with them feels like having a premium post house in Los Angeles, with unmatched personal service.",
      author: "David Chen", 
      company: "Visionary Films"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroMain})` }}
        >
          <div className="absolute inset-0 bg-hero-bg/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary bg-primary/10">
            Premium Post Production Studio
          </Badge>
          
          <h1 className="hero-title mb-8">
            Where Stories Become
            <span className="block text-primary">Immortal</span>
          </h1>
          
          <p className="hero-subtitle mb-12 max-w-3xl mx-auto">
            Elevating global content through world-class post-production services. 
            From South Africa to the world, we craft cinematic excellence that transcends boundaries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-cinematic text-lg px-8 py-6">
              <Play size={20} className="mr-3" />
              View Our Showreel
            </Button>
            <Button variant="outline" className="btn-ghost text-lg px-8 py-6">
              Explore Our Work
              <ArrowRight size={20} className="ml-3" />
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Crafting Excellence
            </h2>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Every frame, every cut, every color grade is meticulously crafted to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-panel p-8 text-center smooth-transition hover:scale-105 group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Featured Work
              </h2>
              <p className="hero-subtitle max-w-2xl">
                A glimpse into the premium content we create for global clients
              </p>
            </div>
            <Button variant="outline" className="btn-ghost hidden lg:flex">
              View All Work
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredWork.map((work, index) => (
              <Card key={index} className="glass-panel overflow-hidden group smooth-transition hover:scale-105">
                <div className="relative">
                  <img 
                    src={work.thumbnail} 
                    alt={work.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-hero-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="btn-cinematic">
                      <Play size={16} className="mr-2" />
                      Watch
                    </Button>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 left-4 text-primary border-primary bg-background/80"
                  >
                    {work.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {work.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 lg:hidden">
            <Button variant="outline" className="btn-ghost">
              View All Work
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Showreel Section */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-foreground">
            See Our Craft in Motion
          </h2>
          <p className="hero-subtitle mb-12 max-w-3xl mx-auto">
            Experience the full spectrum of our capabilities in our cinematic showreel
          </p>
          
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-hero-bg rounded-2xl overflow-hidden cinematic-glow">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="btn-cinematic text-xl px-12 py-8">
                <Play size={32} className="mr-4" />
                Play Showreel
              </Button>
            </div>
            <div className="absolute inset-0 premium-gradient opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Trusted Worldwide
            </h2>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Don't just take our word for it – hear from creators who trust us with their vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-panel p-8 smooth-transition hover:scale-105">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-primary fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-6">
                  <div className="font-display text-lg font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-primary text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Ready to Create Something
            <span className="block text-primary">Immortal?</span>
          </h2>
          <p className="hero-subtitle mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and bring it to life with our premium post-production services
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-cinematic text-lg px-12 py-6">
              Send Us Your Brief
            </Button>
            <Button variant="outline" className="btn-ghost text-lg px-12 py-6">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-display text-2xl font-bold text-primary mb-4">
                IMMORTAL MEDIA
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Premium post-production studio crafting cinematic excellence for global clients. 
                Based in South Africa, serving the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Editorial</li>
                <li>Colour Grading</li>
                <li>VFX & Motion Graphics</li>
                <li>Sound Design & Mix</li>
                <li>Cloud Delivery</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>+27 (0)11 123 4567</li>
                <li>hello@immortalmedia.co.za</li>
                <li>Johannesburg, South Africa</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Immortal Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;