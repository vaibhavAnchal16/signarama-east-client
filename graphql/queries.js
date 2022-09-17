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
        trending
        recentWork
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

export const SIGNS = gql`
  query Signs($page: Int, $size: Int, $filters: JSON) {
    signs(page: $page, size: $size, filters: $filters) {
      page
      size
      signs {
        title
        _id
        type
        description
        featuredImage
        slug
        seoData
        published
        gallery {
          _id
          title
          description
          images
        }
      }
      total
    }
  }
`;

export const SIGNSLUGS = gql`
  query Signs($page: Int, $size: Int, $filters: JSON) {
    signs(page: $page, size: $size, filters: $filters) {
      page
      size
      total
      signs {
        title
        _id
        slug
      }
    }
  }
`;

export const SIGN = gql`
  query Sign($slug: String!) {
    sign(slug: $slug) {
      _id
      title
      description
      type
      featuredImage
      seoData
      slug
      gallery {
        title
        images
      }
    }
  }
`;

export const GALLERYIDS = gql`
  query Query($page: Int, $size: Int) {
    galleries(page: $page, size: $size) {
      page
      size
      total
      galleries {
        title
        _id
      }
    }
  }
`;

export const GALLERIES = gql`
  query Query($page: Int, $size: Int) {
    galleries(page: $page, size: $size) {
      page
      size
      total
      galleries {
        title
        _id
        description
        images
      }
    }
  }
`;

export const GALLERYBYTITLE = gql`
  query GalleryByName($title: String!) {
    galleryByName(title: $title) {
      _id
      title
      description
      images
    }
  }
`;
