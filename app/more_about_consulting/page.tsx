import SectionTitle from "components/Common/SectionTitle";
import Singletab from "./Singletab";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28"
    style={{
     
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    >
      <div className="container">
        <SectionTitle
          title="CONSULTING"
          paragraph="Delivering specialized expertise to optimize performance and solve complex challenges with precision."center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <Singletab blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
