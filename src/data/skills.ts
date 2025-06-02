
export interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
  name: string;
  icon?: string;
  level?: number;
  color?: string;
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    name: "Programming Languages",
    skills: [
      { id: 101, name: "Python", level: 90, color: "#3776AB" },
      { id: 102, name: "C", level: 75, color: "#A8B9CC" },
      { id: 103, name: "C++", level: 60, color: "#00599C" },
      { id: 104, name: "JavaScript", level: 85, color: "#F7DF1E" },
      { id: 105, name: "TypeScript", level: 70, color: "#3178C6" },
    ]
  },
  {
    id: 2,
    name: "Frontend",
    skills: [
      { id: 201, name: "HTML5", level: 95, color: "#E34F26" },
      { id: 202, name: "CSS3", level: 90, color: "#1572B6" },
      { id: 203, name: "React", level: 80, color: "#61DAFB" },
      { id: 204, name: "TailwindCSS", level: 85, color: "#06B6D4" },
      { id: 205, name: "Bootstrap", level: 90, color: "#7952B3" },
    ]
  },
  {
    id: 3,
    name: "Backend",
    skills: [
      { id: 301, name: "Django", level: 90, color: "#092E20" },
      { id: 302, name: "REST Framework", level: 85, color: "#A30000" },
      { id: 303, name: "FastAPI", level: 75, color: "#009688" },
      { id: 304, name: "Node.js", level: 70, color: "#339933" },
      { id: 305, name: "Express", level: 65, color: "#000000" },
    ]
  },
  {
    id: 4,
    name: "Databases",
    skills: [
      { id: 401, name: "PostgreSQL", level: 80, color: "#336791" },
      { id: 402, name: "MySQL", level: 85, color: "#4479A1" },
      { id: 403, name: "SQLite", level: 90, color: "#003B57" },
      { id: 404, name: "MongoDB", level: 65, color: "#47A248" },
    ]
  },
  {
    id: 5,
    name: "Tools",
    skills: [
      { id: 501, name: "Git", level: 90, color: "#F05032" },
      { id: 502, name: "Docker", level: 70, color: "#2496ED" },
      { id: 503, name: "Heroku", level: 75, color: "#430098" },
      { id: 504, name: "AWS", level: 60, color: "#FF9900" },
      { id: 505, name: "Figma", level: 70, color: "#F24E1E" },
    ]
  }
];

export default skillsData;
