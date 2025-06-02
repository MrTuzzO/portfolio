
import { useParams, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import blogsData from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogsData.find(b => b.id === Number(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <ThemeProvider defaultTheme="light">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24">
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-3xl font-bold mb-4">Article not found</h1>
              <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <NavLink to="/blog">Back to Blog</NavLink>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  // Simple markdown parser for headers, paragraphs and code blocks
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    let inCodeBlock = false;
    const renderedContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Code blocks
      if (line.trim().startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        if (inCodeBlock) {
          renderedContent.push(<div key={i} className="bg-muted rounded-t-lg mt-4 px-4 py-2 text-sm font-mono">{line.replace("```", "")}</div>);
        } else {
          renderedContent.push(<div key={i} className="bg-muted rounded-b-lg mb-4 px-4 py-2 text-sm font-mono"></div>);
        }
        continue;
      }
      
      if (inCodeBlock) {
        renderedContent.push(<div key={i} className="bg-muted px-4 py-0.5 text-sm font-mono whitespace-pre">{line}</div>);
        continue;
      }
      
      // Headers
      if (line.startsWith("# ")) {
        renderedContent.push(<h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>);
      } else if (line.startsWith("## ")) {
        renderedContent.push(<h2 key={i} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>);
      } else if (line.startsWith("### ")) {
        renderedContent.push(<h3 key={i} className="text-xl font-bold mt-5 mb-2">{line.substring(4)}</h3>);
      }
      // Empty lines
      else if (line.trim() === "") {
        renderedContent.push(<div key={i} className="h-4"></div>);
      }
      // Regular paragraphs
      else {
        renderedContent.push(<p key={i} className="my-2 text-muted-foreground">{line}</p>);
      }
    }
    
    return renderedContent;
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          {/* Hero */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <Button asChild variant="ghost" size="sm" className="mb-4">
                <NavLink to="/blog" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to blog
                </NavLink>
              </Button>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-3">
                    {blog.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium">{blog.author}</p>
                    <p className="text-sm text-muted-foreground">{blog.date}</p>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {blog.readTime} min read
                </div>
              </div>
            </div>
          </section>
          
          {/* Featured Image */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Blog Content */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-lg">
                {renderContent(blog.content)}
              </div>
            </div>
          </section>
          
          {/* Related Posts */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogsData
                  .filter(b => b.id !== blog.id)
                  .slice(0, 3)
                  .map(relatedBlog => (
                    <div 
                      key={relatedBlog.id} 
                      className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img 
                        src={relatedBlog.image} 
                        alt={relatedBlog.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{relatedBlog.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                        <Button asChild size="sm">
                          <NavLink to={`/blog/${relatedBlog.id}`}>Read Post</NavLink>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPost;
