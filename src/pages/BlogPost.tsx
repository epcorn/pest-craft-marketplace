
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="container py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-bold mb-6">Blog Post Title</h1>
        <div className="prose max-w-none">
          <p>Blog post content goes here...</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
