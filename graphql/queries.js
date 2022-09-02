import { gql } from "@apollo/client";

export const BLOGS = gql`
  query Blogs($page: Int, $size: Int) {
    blogs(page: $page, size: $size) {
      title
      description
      featuredImage
      blogCategory {
        title
        description
        featuredImage
        slug
        seoData
      }
      slug
      seoData
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
    }
  }
`;
