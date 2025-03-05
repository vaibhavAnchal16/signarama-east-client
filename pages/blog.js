import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import client from "../apollo-client";
import { BlogCard, Layout } from "../components";
import { BLOGS } from "../graphql/queries";
import { NewsIcon } from "../components/icons";
import BlogLayout from "../components/BlogLayout";
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
      <Head>
        <title>Blogs | Signarama Brampton West</title>
        <meta name="description" content="Blogs & Stories" />
      </Head>
      <div className="bg-white">
        <div className="wavepattern">
          <div className="howsewingworks services-outer-space">
            <div
              className="howsewingworks-inner d-padding-l d-padding-r d-padding-t"
              style={{
                alignItems: "flex-start",
              }}
            >
              <div className="services-outer-space-text l-margin-b d-column-gap">
                <h1 className="d-margin-b">
                  {" "}
                  Signage <span className="highlighted">Stories</span>{" "}
                  <NewsIcon />
                </h1>
                <h2 className="l-margin-b">
                  Explore our latest work, discover innovative sign solutions,
                  and see how we're helping Brampton businesses shine.
                </h2>
                <form
                  className="blog-search d-margin-b"
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
              </div>
            </div>
          </div>
        </div>

        <section className="sign-blogs-wrapper">
          <section className="sign-blogs-inner d-flex d-flex-wrap d-column-gap d-row-gap d-padding-l d-padding-r">
            {blogs?.map((blg, i) => (
              <BlogCard
                key={i}
                title={blg?.title}
                image={blg?.featuredImage}
                slug={`/blog/${blg?.slug}`}
                description={blg?.description}
              />
            ))}
          </section>
          <div className="pagination d-padding-b">
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
      </div>
    </>
  );
};
// This also gets called at build time
export async function getServerSideProps({ params, query }) {
  const filters = {
    published: true,
  };
  if (query?.search) {
    filters["title"] = {
      $regex: query.search,
      $options: "i",
    };
  }
  const { data } = await client.query({
    fetchPolicy: "no-cache",
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
  return <BlogLayout>{page}</BlogLayout>;
};
