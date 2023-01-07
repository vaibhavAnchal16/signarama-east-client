import { getServerSideSitemap } from "next-sitemap";
import client from "../../apollo-client";
import { BLOGS, SIGNS } from "../../graphql/queries";

export const getServerSideProps = async (ctx) => {
  const signs = await client.query({
    query: SIGNS,
    variables: {
      page: null,
      size: null,
      filters: null,
    },
  });
  const blogs = await client.query({
    query: BLOGS,
    variables: {
      page: null,
      size: null,
      filters: null,
    },
  });
  const newsigns = signs?.data?.signs?.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}${item.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const newblogs = blogs?.data?.blogs?.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}${item.slug}`,
    lastmod: new Date().toISOString(),
  }));
  const fields = [...newblogs, ...newsigns];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
