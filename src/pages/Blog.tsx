
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container py-12">
      <h1 className="font-heading text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/blog/1">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-heading font-semibold text-xl mb-2">Blog Post Title</h2>
              <p className="text-gray-600">Preview of the blog post content...</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
