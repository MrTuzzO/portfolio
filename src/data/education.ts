
export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  year: number;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "BSc in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    location: "Bangladesh",
    duration: "2020-2024",
    description: "Currently in the final year of BSc in Computer Science & Engineering with a research focus in data Mining. My studies work includes mastering algorithm complexity, developing predictive models, and exploring machine learning for data science and AI projects.",
    year: 2024,
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    institution: "Rajbari Govt. College",
    location: "Bangladesh",
    duration: "2018-2019",
    description: "Graduated as part of science group, earning with a 9/10 GPA. During my college years I was introduced to programming in C, becoming my passion for technology.",
    year: 2019,
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    institution: "Secondary School",
    location: "Bangladesh",
    duration: "2016-2017",
    description: "Completed my secondary school education (SSC) with a strong academic focus. During this time, my curiosity about the internet and mobile games initially grew, sparking my passion for technology.",
    year: 2017,
  }
];

export default educationData;
