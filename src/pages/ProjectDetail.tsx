
import { useParams, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import projectsData, { ProjectItem } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <ThemeProvider defaultTheme="light">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24">
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-3xl font-bold mb-4">Project not found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <NavLink to="/projects">Back to Projects</NavLink>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          {/* Hero */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="mb-6">
                <Button asChild variant="ghost" size="sm" className="mb-4">
                  <NavLink to="/projects" className="flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to projects
                  </NavLink>
                </Button>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mb-10">
                {project.sourceUrl && (
                  <Button asChild variant="outline" className="gap-2">
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Source Code
                    </a>
                  </Button>
                )}
                
                {project.demoUrl && (
                  <Button asChild className="gap-2">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </section>
          
          {/* Project Image */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>
          
          {/* Project Details */}
          {project.details && (
            <section className="py-12">
              <div className="container mx-auto px-4 max-w-4xl">
                {project.details.problem && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                    <p className="text-muted-foreground">{project.details.problem}</p>
                  </div>
                )}
                
                {project.details.solution && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                    <p className="text-muted-foreground">{project.details.solution}</p>
                  </div>
                )}
                
                {project.details.features && project.details.features.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2">
                      {project.details.features.map((feature, index) => (
                        <li key={index} className="text-muted-foreground">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.details.challenges && project.details.challenges.length > 0 && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                    <ul className="list-disc list-inside space-y-2">
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index} className="text-muted-foreground">{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.details.lessons && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">What I Learned</h2>
                    <p className="text-muted-foreground">{project.details.lessons}</p>
                  </div>
                )}
              </div>
            </section>
          )}
          
          {/* Related Projects */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">More Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectsData
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map(relatedProject => (
                    <div 
                      key={relatedProject.id} 
                      className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{relatedProject.title}</h3>
                        <Button asChild size="sm">
                          <NavLink to={`/projects/${relatedProject.id}`}>View Details</NavLink>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProjectDetail;
