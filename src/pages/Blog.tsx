
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";
import blogsData from "@/data/blogs";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(blogsData.flatMap(blog => blog.tags))
  ).sort();

  // Filter blogs based on search term and selected tag
  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || 
      blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });
  
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          {/* Header */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thoughts, ideas, and insights on web development, design, and technology.
              </p>
            </div>
          </section>
          
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Search</h3>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Search articles..."
                          className="pl-10"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant={selectedTag === tag ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="lg:col-span-3">
                  {filteredBlogs.length > 0 ? (
                    <div className="space-y-8">
                      {filteredBlogs.map((blog) => (
                        <Card key={blog.id} className="overflow-hidden border hover:shadow-md transition-shadow">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3">
                              <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="w-full h-full object-cover aspect-video md:aspect-square"
                              />
                            </div>
                            
                            <CardContent className="p-6 md:w-2/3">
                              <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-muted-foreground">{blog.date}</span>
                                <span className="text-sm text-muted-foreground">{blog.readTime} min read</span>
                              </div>
                              
                              <h2 className="text-2xl font-bold mb-2">
                                <NavLink
                                  to={`/blog/${blog.id}`}
                                  className="hover:text-primary transition-colors"
                                >
                                  {blog.title}
                                </NavLink>
                              </h2>
                              
                              <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {blog.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary">{tag}</Badge>
                                ))}
                              </div>
                              
                              <div className="flex items-center mt-4">
                                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-3">
                                  {blog.author.charAt(0).toUpperCase()}
                                </div>
                                <span>{blog.author}</span>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2">No articles found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search or filter to find what you're looking for.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog;
