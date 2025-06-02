
export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  year: number;
  type: 'work' | 'project';
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Web Designer & Developer",
    company: "Freelance",
    location: "Remote",
    duration: "2021-Present",
    description: "Focused on building web designing websites using HTML, CSS, JavaScript, and PHP. Created intuitive and responsive user interfaces and seamlessly integrated visual elements. Produced visually appealing responsive websites tailored to client needs.",
    year: 2021,
    type: 'work'
  },
  {
    id: 2,
    title: "Problem Solving Experience",
    company: "Competitive Programming",
    location: "Online",
    duration: "2022-Present",
    description: "I have shown my problem-solving skills through participation in algorithmic challenges on platforms like CodeForces, Codeathon (UVA), LeetCode, and HackerRank. Regularly solve complex programming challenges to improve logical reasoning abilities.",
    year: 2022,
    type: 'project'
  },
  {
    id: 3,
    title: "Academic Projects",
    company: "University",
    location: "Bangladesh",
    duration: "2021-2023",
    description: "Pet Adoption Platform: Developed using Django REST and JWT authentication to streamline pet adoption processes, manage available pets, message requests, and update profiles. Vaccination Management System: Created a web-based solution tracking vaccination campaigns, dose profiles, and dose logs, with features like user profiles and multi-user authentication.",
    year: 2023,
    type: 'project'
  }
];

export default experienceData;
