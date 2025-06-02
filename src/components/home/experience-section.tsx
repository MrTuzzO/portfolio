
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import experienceData from "@/data/experience";
import educationData from "@/data/education";

const ExperienceEducationSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = experienceData;
  const education = educationData;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and academic background that shaped my skills and expertise.
          </p>
        </div>
        
        <Tabs defaultValue="experience" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience" onClick={() => setActiveTab("experience")}>
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" onClick={() => setActiveTab("education")}>
              Education
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-8">
            {experiences.map((item) => (
              <div key={item.id} className="relative pl-8 pb-8 border-l border-muted animate-fade-in">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                <div className="mb-1">
                  <Badge>{item.duration}</Badge>
                  <Badge variant="outline" className="ml-2">{item.type}</Badge>
                </div>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-primary font-medium">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-8">
            {education.map((item) => (
              <div key={item.id} className="relative pl-8 pb-8 border-l border-muted animate-fade-in">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                <Badge>{item.duration}</Badge>
                <h3 className="text-xl font-bold mt-2">{item.degree}</h3>
                <p className="text-primary font-medium">{item.institution}</p>
                <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
