import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import client from "../apollo-client";
import { BlogCard, Layout } from "../components";
import { BLOGS } from "../graphql/queries";
const SignBlog = ({ blogs }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const search = urlParams.get("search");
    setSearch(search);
    const urlpage = urlParams.get("page");
    if (urlpage) {
      setPage(urlpage);
    }
  }, []);

  const managePagination = (type, value) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (type === "increment") {
      const page = +value + 1;
      window.location.href = `${window.location.pathname}?page=${page}`;
    }
    if (type === "decrement" && value > 1) {
      const page = value - 1;
      window.location.href = `${window.location.pathname}?page=${page}`;
    }
  };

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
          <form
            className="blog-search"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `${window.location.pathname}?search=${e.target.search.value}`;
            }}
          >
            <div className="fields-wrapper fields-flex search">
              <input
                type="text"
                defaultValue={search}
                placeholder="Search Signarama Blogs.."
                name="search"
              />
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
              description={blg?.description}
            />
          ))}
        </section>
        <div className="pagination">
          <button
            onClick={(e) => {
              managePagination("decrement", page);
            }}
          >
            {" "}
            Previous
          </button>
          <button
            onClick={(e) => {
              managePagination("increment", page);
            }}
          >
            {" "}
            Next
          </button>
        </div>
      </section>
    </>
  );
};
// This also gets called at build time
export async function getServerSideProps({ params, query }) {
  const filters = {};
  if (query.search) {
    filters["title"] = {
      $regex: query.search,
      $options: "i",
    };
  }
  const { data } = await client.query({
    query: BLOGS,
    variables: {
      page: query?.page ? Number(query.page) : 1,
      size: 15,
      filters,
    },
  });
  return { props: { blogs: data?.blogs?.blogs } };
}

export default SignBlog;

SignBlog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
