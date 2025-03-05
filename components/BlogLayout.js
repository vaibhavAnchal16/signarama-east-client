import React, { useEffect, useState } from "react";
import client from "../apollo-client";
import { BLOGS, GETREVIEWS } from "../graphql/queries";
import Footer from "./Footer";
import Header from "./Header";

export default function BlogLayout({ children }) {
  const [recentBlogs, setRecentBlogs] = useState({
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const { data, loading, error } = await client.query({
        fetchPolicy: "network-only",
        query: BLOGS,
        variables: {
          page: 1,
          size: 5,
          filters: {
            recentWork: true,
            published: true,
          },
        },
      });
      const {
        data: data2,
        loading: loading2,
        error: error2,
      } = await client.query({
        fetchPolicy: "network-only",
        query: GETREVIEWS,
      });
      setRecentBlogs({
        loading: loading || loading2,
        blogs: data?.blogs?.blogs,
        error: error || error2,
        reviews: data2?.getGoogleReviews,
      });
    })();
  }, []);

  return (
    <>
      {/* <Head></Head> */}
      <Header />
      <main>{children}</main>
      <Footer recentBlogs={recentBlogs} />
    </>
  );
}
