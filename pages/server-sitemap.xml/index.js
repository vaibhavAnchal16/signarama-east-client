import { getServerSideSitemap } from "next-sitemap";
import { BLOGS, SIGNS } from "../../graphql/queries";
import client from "../../apollo-client";

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
  const staticPages = [
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}about-us`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}contact-us`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/our-signs`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}blog`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}our-people`,
      lastmod: new Date().toISOString(),
    },
  ];
  const galleryImages = signs?.data?.signs?.signs?.reduce((acc, item) => {
    return [...acc, ...item.gallery?.images];
  }, []);
  const newsigns = signs?.data?.signs?.signs?.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}our-signs$/${item.slug}`,
    lastmod: item?.updatedAt,
  }));
  const newblogs = blogs?.data?.blogs?.blogs?.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}blog/${item.slug}`,
    lastmod: item?.updatedAt,
  }));
  const fields = [
    ...staticPages,
    ...newblogs,
    ...newsigns,
    ...galleryImages?.map((item) => ({
      loc: item.replace(/\/v\d+\//, "/f_auto/").replace(/\.\w+$/, ".webp"),
    })),
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
