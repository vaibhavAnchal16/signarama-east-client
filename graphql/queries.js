import { gql } from "@apollo/client";

export const BLOGS = gql`
  query Blogs($page: Int, $filters: JSON, $size: Int) {
    blogs(page: $page, filters: $filters, size: $size) {
      page
      size
      total
      blogs {
        _id
        title
        description
        featuredImage
        slug
        seoData
        published
      }
    }
  }
`;

export const BLOG = gql`
  query Blog($slug: String!) {
    blog(slug: $slug) {
      title
      description
      featuredImage
      slug
      seoData
      published
    }
  }
`;
