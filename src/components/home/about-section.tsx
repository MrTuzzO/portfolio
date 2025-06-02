
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full md:w-2/5">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-3/5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Hi, I'm <span className="text-primary">Khlidul Islam</span>.</span> I hold a BSc in <span className="font-medium">Computer Science & Engineering</span>, graduating in 2024 from Green University of Bangladesh, specializing in data mining and analysis.
              </p>
              
              <p className="text-muted-foreground">
                I have experience in developing web applications using <span className="font-medium">Django and Django REST Framework</span>. With a strong background in building mobile and web-friendly systems, I'm always eager to enhance my skills to stay up to date with the latest technologies.
              </p>
              
              <p className="text-muted-foreground">
                Let's connect and create something amazing together! <span className="text-primary">✌️</span>
              </p>
            </div>
            
            <div className="pt-4">
              <Button asChild variant="default">
                <NavLink to="/about">Learn more about me</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
