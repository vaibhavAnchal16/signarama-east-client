import { gql } from "@apollo/client";
export const CREATEBLOG = gql`
  mutation Mutation(
    $title: String!
    $description: String!
    $featuredImage: String
    $seoData: JSON
    $published: Boolean
    $trending: Boolean
    $recentWork: Boolean
  ) {
    createBlog(
      title: $title
      description: $description
      featuredImage: $featuredImage
      seoData: $seoData
      published: $published
      trending: $trending
      recentWork: $recentWork
    ) {
      title
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      name
      token
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
    $published: Boolean
    $trending: Boolean
    $recentWork: Boolean
  ) {
    updateBlog(
      _id: $id
      title: $title
      description: $description
      featuredImage: $featuredImage
      seoData: $seoData
      blogCategory: $blogCategory
      published: $published
      trending: $trending
      recentWork: $recentWork
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

export const SENDFORM = gql`
  mutation CreateFormEntry(
    $name: String!
    $phoneNumber: String!
    $email: String!
    $address: String
    $attachment: String
    $message: String
  ) {
    createFormEntry(
      name: $name
      phoneNumber: $phoneNumber
      email: $email
      address: $address
      attachment: $attachment
      message: $message
    ) {
      _id
    }
  }
`;

export const ADDUPDATEHEROGALLERY = gql`
  mutation UpdateHeroGallery($gallery: ID!) {
    updateHeroGallery(gallery: $gallery) {
      _id
      description
      images
      title
    }
  }
`;

export const ADDREVIEWDATA = gql`
  mutation AddReviewData($reviewData: ReviewData) {
    addReviewData(ReviewData: $reviewData) {
      _id
      reviewLink
      reviews
      reviewsCount
      totalRating
    }
  }
`;
