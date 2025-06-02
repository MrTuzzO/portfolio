
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium mb-2">
            Welcome to my portfolio website!
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hey there, I'm <span className="text-gradient">Python Dev</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A versatile software developer with hands-on experience in Django, REST
            Framework and API development.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="gap-2">
              <NavLink to="/contact">
                Get a free quote <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="/resume.pdf" download>
                Download Resume <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <img 
              src="/placeholder.svg"
              alt="Developer illustration"
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-background shadow-lg rounded-lg p-4 border">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="ml-2 text-sm font-medium">Currently available for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
