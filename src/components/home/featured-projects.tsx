
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import projectsData from "@/data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Check out some of my recent work and see how I tackle complex problems with elegant solutions.
            </p>
          </div>
          
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <NavLink to="/projects" className="flex items-center gap-2">
              View all projects <ArrowRight className="h-4 w-4" />
            </NavLink>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
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
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline">+{project.technologies.length - 4}</Badge>
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
  );
};

export default FeaturedProjects;
