import React from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import aboutHero from '@/assets/about-hero.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-hero-bg/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">Our Story</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            Crafting cinematic excellence from South Africa to the world
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Born from Passion, Driven by Excellence
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in the heart of South Africa, Immortal Media emerged from a shared vision to create 
                  world-class post-production that rivals the best studios globally. Our journey began with 
                  a simple belief: every story deserves to be told with uncompromising quality.
                </p>
                <p>
                  From intimate documentaries to blockbuster commercials, we've built our reputation on 
                  technical excellence, creative innovation, and an unwavering commitment to our craft. 
                  Our team combines decades of international experience with cutting-edge technology.
                </p>
                <p>
                  Today, we serve production houses, advertising agencies, and streaming platforms worldwide, 
                  delivering premium post-production that elevates every frame to its fullest potential.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="glass-panel p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To create timeless content that transcends boundaries and connects with audiences globally.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the premier destination for premium post-production, setting new standards for excellence.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Infrastructure */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              State-of-the-Art Infrastructure
            </h2>
            <p className="hero-subtitle max-w-3xl mx-auto">
              Our cutting-edge facilities are designed to bring your vision to life with precision and artistry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Color Grading Suites",
                description: "Industry-leading DaVinci Resolve systems with calibrated reference monitors for precise color work."
              },
              {
                title: "Edit Bays",
                description: "High-performance workstations running Avid Media Composer, Premiere Pro, and Final Cut Pro."
              },
              {
                title: "Audio Post Suite",
                description: "Pro Tools HDX systems with treated acoustic environments for pristine sound design."
              },
              {
                title: "VFX Department",
                description: "Powerful render farms and workstations for After Effects, Nuke, and Cinema 4D workflows."
              },
              {
                title: "Review Theater",
                description: "Professional screening room with 4K projection and surround sound for client presentations."
              },
              {
                title: "Cloud Infrastructure",
                description: "Secure, high-speed delivery systems for global collaboration and asset management."
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-panel p-6 smooth-transition hover:scale-105">
                <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;