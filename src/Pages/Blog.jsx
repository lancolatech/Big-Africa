import HeroPages from "../components/hero-pages/HeroPages";
import BlogLayout from "../components/blog-page/BlogLayout";
import Images from "../components/legeza/Images";

function Blog() {
  return (
    <main>
      <HeroPages page="Blog" />

      <BlogLayout />
      <Images />
    </main>
  );
}

export default Blog;
