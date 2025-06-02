
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import SkillsSection from "@/components/home/skills-section";
import ExperienceEducationSection from "@/components/home/experience-section";

const About = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
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
                  <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
                  
                  <div className="space-y-4">
                    <p className="text-lg">
                      <span className="font-semibold">Hi, I'm <span className="text-primary">Khlidul Islam</span>.</span> I hold a BSc in <span className="font-medium">Computer Science & Engineering</span>, graduating in 2024 from Green University of Bangladesh, specializing in data mining and analysis.
                    </p>
                    
                    <p className="text-muted-foreground">
                      I have experience in developing web applications using <span className="font-medium">Django and Django REST Framework</span>. With a strong background in building mobile and web-friendly systems, I'm always eager to enhance my skills to stay up to date with the latest technologies.
                    </p>
                    
                    <p className="text-muted-foreground">
                      My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems. I enjoy working in collaborative environments where I can contribute my technical skills and learn from others.
                    </p>
                    
                    <p className="text-muted-foreground">
                      When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active through hiking and photography.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="gap-2">
                      <a href="/resume.pdf" download>
                        Download Resume <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <SkillsSection />
          <ExperienceEducationSection />
          
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm currently available for freelance work and open to new opportunities. If you have a project that needs my expertise, don't hesitate to reach out!
              </p>
              <Button asChild size="lg">
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
