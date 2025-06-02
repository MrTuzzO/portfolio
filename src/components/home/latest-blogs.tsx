
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import blogsData from "@/data/blogs";

const LatestBlogs = () => {
  // Get the 3 most recent blogs
  const latestBlogs = [...blogsData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Read my latest thoughts, ideas, and insights on development, design, and technology.
            </p>
          </div>
          
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <NavLink to="/blog" className="flex items-center gap-2">
              View all articles <ArrowRight className="h-4 w-4" />
            </NavLink>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden border transition-all hover:shadow-md group h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                    <span className="text-sm text-muted-foreground">{blog.readTime} min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                </div>
                
                <Button asChild variant="link" className="px-0 mt-4 w-fit">
                  <NavLink to={`/blog/${blog.id}`}>
                    Read more <ArrowRight className="h-4 w-4 ml-1" />
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
