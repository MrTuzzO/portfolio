
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import projectsData from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Get unique categories
  const categories = ["all", ...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on category
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          {/* Header */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my portfolio of projects spanning web development, mobile applications, and more.
              </p>
            </div>
          </section>
          
          {/* Filter */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={filter === category ? "default" : "outline"}
                    onClick={() => setFilter(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden border transition-all hover:shadow-md group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-4 mt-4">
                        <Button asChild size="sm">
                          <NavLink to={`/projects/${project.id}`}>View Details</NavLink>
                        </Button>
                        
                        {project.demoUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Contact CTA */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's collaborate and bring your ideas to life with the perfect blend of functionality and design.
              </p>
              <Button asChild size="lg">
                <NavLink to="/contact">Get In Touch</NavLink>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Projects;
