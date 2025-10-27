import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Clients = () => {
  const clients = [
    { name: "Netflix", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=NETFLIX" },
    { name: "Discovery", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=DISCOVERY" },
    { name: "Amazon Studios", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=AMAZON" },
    { name: "Apple TV+", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=APPLE+TV" },
    { name: "HBO Max", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=HBO+MAX" },
    { name: "Paramount", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=PARAMOUNT" },
    { name: "BBC Studios", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=BBC" },
    { name: "National Geographic", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=NAT+GEO" },
    { name: "Warner Bros", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=WARNER+BROS" },
    { name: "Sony Pictures", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=SONY" },
    { name: "Universal", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=UNIVERSAL" },
    { name: "Lionsgate", logo: "https://via.placeholder.com/200x80/000000/FFFFFF?text=LIONSGATE" }
  ];

  const testimonials = [
    {
      quote: "Immortal Media consistently delivers world-class post-production that elevates our content to international standards. Their attention to detail and creative vision is unmatched.",
      author: "Sarah Mitchell",
      position: "Executive Producer",
      company: "Global Productions"
    },
    {
      quote: "Working with Immortal Media feels like having a premium post house in Los Angeles, but with the personal touch and efficiency that sets them apart. They understand our vision completely.",
      author: "David Chen",
      position: "Creative Director",
      company: "Visionary Films"
    },
    {
      quote: "The team at Immortal Media transformed our raw footage into something truly cinematic. Their color grading and sound design brought our story to life in ways we never imagined.",
      author: "Maria Rodriguez",
      position: "Director",
      company: "Independent Filmmaker"
    },
    {
      quote: "From initial brief to final delivery, Immortal Media's professionalism and technical expertise made our complex multi-platform campaign seamless. They're our go-to partners for premium work.",
      author: "James Thompson",
      position: "Brand Manager",
      company: "Luxury Automotive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-hero-bg">
        <div className="absolute inset-0 premium-gradient"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">Our Clients</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            Trusted by leading production houses, agencies, and creators worldwide
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Trusted Partnerships
            </h2>
            <p className="hero-subtitle max-w-3xl mx-auto">
              We're proud to work with industry leaders who trust us with their most important projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="glass-panel p-6 flex items-center justify-center smooth-transition hover:scale-105 hover:cinematic-glow">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-16 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What Our Clients Say
            </h2>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Don't just take our word for it – hear from the creators who trust us with their vision
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
                    {testimonial.position}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="font-display text-5xl md:text-6xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground text-lg">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="font-display text-5xl md:text-6xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground text-lg">Global Clients</div>
            </div>
            <div className="space-y-2">
              <div className="font-display text-5xl md:text-6xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground text-lg">Awards Won</div>
            </div>
            <div className="space-y-2">
              <div className="font-display text-5xl md:text-6xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join Our Family of Creators
          </h2>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Ready to experience the premium post-production services that industry leaders trust?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-cinematic">
              Start Your Project
            </button>
            <button className="btn-ghost">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;