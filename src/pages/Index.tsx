
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import SkillsSection from "@/components/home/skills-section";
import FeaturedProjects from "@/components/home/featured-projects";
import ExperienceEducationSection from "@/components/home/experience-section";
import LatestBlogs from "@/components/home/latest-blogs";
import ContactSection from "@/components/home/contact-section";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <FeaturedProjects />
          <ExperienceEducationSection />
          <LatestBlogs />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
