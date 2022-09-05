import { gql } from "@apollo/client";
export const CREATEBLOG = gql`
  mutation Mutation(
    $title: String!
    $description: String!
    $featuredImage: String
    $seoData: JSON
  ) {
    createBlog(
      title: $title
      description: $description
      featuredImage: $featuredImage
      seoData: $seoData
    ) {
      title
    }
  }
`;

export const UPDATEBLOG = gql`
  mutation Mutation(
    $id: ID!
    $title: String!
    $description: String!
    $featuredImage: String
    $seoData: JSON
    $blogCategory: [ID]
  ) {
    updateBlog(
      _id: $id
      title: $title
      description: $description
      featuredImage: $featuredImage
      seoData: $seoData
      blogCategory: $blogCategory
    ) {
      _id
    }
  }
`;

export const CREATESIGN = gql`
  mutation Mutation(
    $title: String!
    $description: String!
    $type: String!
    $featuredImage: String
    $seoData: JSON
    $gallery: ID
  ) {
    createSign(
      title: $title
      description: $description
      type: $type
      featuredImage: $featuredImage
      seoData: $seoData
      gallery: $gallery
    ) {
      _id
      title
    }
  }
`;

export const UPDATESIGN = gql`
  mutation Mutation(
    $id: ID!
    $title: String!
    $description: String!
    $type: String!
    $featuredImage: String
    $seoData: JSON
    $gallery: ID
  ) {
    updateSign(
      _id: $id
      title: $title
      description: $description
      type: $type
      featuredImage: $featuredImage
      seoData: $seoData
      gallery: $gallery
    ) {
      _id
    }
  }
`;

export const CREATEGALLERY = gql`
  mutation CreateGallery(
    $title: String!
    $description: String
    $images: [String!]
  ) {
    createGallery(title: $title, description: $description, images: $images) {
      _id
    }
  }
`;

export const UPDATEGALLERY = gql`
  mutation UpdateGallery(
    $id: ID!
    $title: String!
    $description: String
    $images: [String!]
  ) {
    updateGallery(
      _id: $id
      title: $title
      description: $description
      images: $images
    ) {
      _id
    }
  }
`;
