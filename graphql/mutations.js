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
