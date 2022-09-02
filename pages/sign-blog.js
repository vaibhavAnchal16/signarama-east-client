import { BiSearchAlt } from "react-icons/bi";
import client from "../apollo-client";
import { BlogCard, Layout } from "../components";
import { BLOGS } from "../graphql/queries";
const SignBlog = ({ blogs }) => {
  return (
    <>
      <section className="sign-blogs-search-wrapper">
        <section className="sign-blogs-search-inner">
          <div className="section-heading">
            <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
              Blogs & <span className="highlighted">Stories </span>
            </h1>
            <p>
              {" "}
              Some of our Clients include Delta Hotels, Fairmount Hotels, YMCA,
              CBRE, Triovest, SNC Lavalin and list goes on...
            </p>
          </div>
          <form className="blog-search">
            <div className="fields-wrapper fields-flex search">
              <input type="text" placeholder="Search Signarama Blogs.." />
              <button>
                {" "}
                <BiSearchAlt />
              </button>
            </div>
          </form>
        </section>
      </section>
      <section className="sign-blogs-wrapper">
        <section className="sign-blogs-inner">
          {blogs?.map((blg, i) => (
            <BlogCard
              key={i}
              title={blg?.title}
              image={blg?.featuredImage}
              slug={blg?.slug}
            />
          ))}
        </section>
      </section>
    </>
  );
};
// This also gets called at build time
export async function getServerSideProps({ params, query }) {
  const { data } = await client.query({
    query: BLOGS,
    variables: {
      page: query?.page ? Number(query.page) : 1,
      size: 3,
    },
  });
  // Pass post data to the page via props
  return { props: { blogs: data?.blogs } };
}

export default SignBlog;

SignBlog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
