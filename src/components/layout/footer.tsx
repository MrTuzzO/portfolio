
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-12 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <NavLink to="/" className="text-2xl font-bold text-gradient">
              tuzz<span className="text-brand-orange">i</span>
            </NavLink>
            <p className="mt-4 text-muted-foreground">
              A passionate software developer with hands-on experience in Django, REST Framework, and API development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <NavLink to="/" className="hover:text-primary transition-colors">Home</NavLink>
              <NavLink to="/about" className="hover:text-primary transition-colors">About</NavLink>
              <NavLink to="/projects" className="hover:text-primary transition-colors">Projects</NavLink>
              <NavLink to="/blog" className="hover:text-primary transition-colors">Blog</NavLink>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">Email: khalidjislam14@gmail.com</p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} tuzzi. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Designed by tuzzi team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
