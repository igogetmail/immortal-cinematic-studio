import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ExternalLink } from 'lucide-react';
import workAutoCampaign from '@/assets/work-auto-campaign.jpg';
import workTechInnovation from '@/assets/work-tech-innovation.jpg';
import workAfricanRhythms from '@/assets/work-african-rhythms.jpg';
import workHeritageDoc from '@/assets/work-heritage-doc.jpg';
import workFashionForward from '@/assets/work-fashion-forward.jpg';
import workIndieFilm from '@/assets/work-indie-film.jpg';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Commercial', 'Film', 'Music Video', 'Corporate', 'Documentary'];
  
  const projects = [
    {
      id: 1,
      title: "Premium Auto Campaign",
      category: "Commercial",
      client: "Luxury Motors",
      description: "High-end automotive commercial featuring dynamic color grading and seamless VFX integration.",
      services: ["Color Grading", "VFX", "Editorial"],
      thumbnail: workAutoCampaign,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Tech Innovation Series",
      category: "Corporate",
      client: "Global Tech Corp",
      description: "Documentary-style corporate series showcasing innovation and technology breakthroughs.",
      services: ["Editorial", "Sound Design", "Motion Graphics"],
      thumbnail: workTechInnovation,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "African Rhythms",
      category: "Music Video",
      client: "Independent Artist",
      description: "Vibrant music video celebrating African culture with dynamic editing and cinematic color work.",
      services: ["Color Grading", "Editorial", "VFX"],
      thumbnail: workAfricanRhythms,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Heritage Documentary",
      category: "Documentary",
      client: "Cultural Foundation",
      description: "Award-winning documentary exploring South African heritage with intimate storytelling.",
      services: ["Editorial", "Color Grading", "Sound Mix"],
      thumbnail: workHeritageDoc,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Fashion Forward",
      category: "Commercial",
      client: "Luxury Fashion Brand",
      description: "High-fashion campaign with sophisticated color palettes and elegant motion graphics.",
      services: ["Color Grading", "Motion Graphics", "Editorial"],
      thumbnail: workFashionForward,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Independent Short Film",
      category: "Film",
      client: "Indie Filmmaker",
      description: "Atmospheric short film with complex sound design and moody color grading.",
      services: ["Color Grading", "Sound Design", "VFX", "Editorial"],
      thumbnail: workIndieFilm,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-hero-bg">
        <div className="absolute inset-0 premium-gradient"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">Our Work</h1>
          <p className="hero-subtitle max-w-2xl mx-auto">
            A showcase of our finest post-production projects across various industries
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-section-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "btn-cinematic" : "btn-ghost"}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="glass-panel overflow-hidden group smooth-transition hover:scale-105">
                <div className="relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-hero-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" className="btn-cinematic">
                        <Play size={16} className="mr-2" />
                        Watch
                      </Button>
                      <Button size="sm" variant="outline" className="btn-ghost">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-primary border-primary">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.client}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showreel CTA */}
      <section className="section-padding bg-section-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See Our Complete Showreel
          </h2>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Experience the full range of our creative capabilities in our comprehensive showreel
          </p>
          <Button className="btn-cinematic text-lg px-12 py-6">
            <Play size={20} className="mr-3" />
            Watch Showreel
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Work;