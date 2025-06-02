
import { useState } from "react";
import { Card } from "@/components/ui/card";
import skillsData, { Skill, SkillCategory } from "@/data/skills";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const categories = skillsData;
  const activeSkills = categories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            The main technologies and tools I work with to bring projects to life.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {activeSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card className="flex flex-col items-center p-4 h-full transition-transform hover:scale-105">
      <div className="rounded-full bg-primary/10 p-4 mb-3">
        <div
          className="w-6 h-6"
          style={{ backgroundColor: skill.color || "#666" }}
        ></div>
      </div>
      <h3 className="font-medium text-center">{skill.name}</h3>
      {skill.level && (
        <div className="w-full mt-2 bg-secondary rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      )}
    </Card>
  );
};

export default SkillsSection;
