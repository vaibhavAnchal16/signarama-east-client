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
