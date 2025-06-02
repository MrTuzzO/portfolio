
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import educationData from "@/data/education";
import experienceData from "@/data/experience";
import skillsData from "@/data/skills";

const Resume = () => {
  const workExperience = experienceData.filter(exp => exp.type === 'work');
  const projectExperience = experienceData.filter(exp => exp.type === 'project');
  
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          {/* Header */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">My Resume</h1>
                  <p className="text-lg text-muted-foreground">
                    A summary of my experience, skills, and education.
                  </p>
                </div>
                <Button asChild size="lg" className="gap-2">
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Personal Info */}
          <section className="py-10 border-b">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h2 className="text-2xl font-bold">Personal Info</h2>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: khalidjislam14@gmail.com</p>
                      <p>Phone: +880 1234 5678</p>
                      <p>Location: Bangladesh</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">On the Web</h3>
                    <div className="space-y-2">
                      <p>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          GitHub
                        </a>
                      </p>
                      <p>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          LinkedIn
                        </a>
                      </p>
                      <p>
                        <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Portfolio Website
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Experience */}
          <section className="py-10 border-b">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h2 className="text-2xl font-bold">Experience</h2>
                </div>
                <div className="md:col-span-3">
                  {workExperience.map((exp) => (
                    <div key={exp.id} className="mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <span className="text-muted-foreground">{exp.duration}</span>
                      </div>
                      <p className="text-primary font-medium">{exp.company}, {exp.location}</p>
                      <p className="mt-2 text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Education */}
          <section className="py-10 border-b">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <div className="md:col-span-3">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <span className="text-muted-foreground">{edu.duration}</span>
                      </div>
                      <p className="text-primary font-medium">{edu.institution}, {edu.location}</p>
                      <p className="mt-2 text-muted-foreground">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Skills */}
          <section className="py-10 border-b">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h2 className="text-2xl font-bold">Skills</h2>
                </div>
                <div className="md:col-span-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {skillsData.map((category) => (
                      <div key={category.id} className="mb-6">
                        <h3 className="text-lg font-semibold mb-3">{category.name}</h3>
                        <div className="space-y-2">
                          {category.skills.map((skill) => (
                            <div key={skill.id} className="space-y-1">
                              <div className="flex justify-between">
                                <span>{skill.name}</span>
                                {skill.level && <span className="text-muted-foreground text-sm">{skill.level}%</span>}
                              </div>
                              {skill.level && (
                                <div className="w-full bg-secondary rounded-full h-1.5">
                                  <div
                                    className="bg-primary h-1.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Projects */}
          <section className="py-10 border-b">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h2 className="text-2xl font-bold">Projects</h2>
                </div>
                <div className="md:col-span-3">
                  {projectExperience.map((proj) => (
                    <div key={proj.id} className="mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="text-xl font-bold">{proj.title}</h3>
                        <span className="text-muted-foreground">{proj.duration}</span>
                      </div>
                      <p className="text-primary font-medium">{proj.company}, {proj.location}</p>
                      <p className="mt-2 text-muted-foreground">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="py-16 bg-muted/30 text-center">
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm currently available for freelance work and open to new opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/contact">Contact Me</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Resume;
