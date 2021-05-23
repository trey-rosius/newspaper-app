/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      userType
      profilePicUrl
      email
      createdAt
      updatedAt
      owner
      posts {
        items {
          id
          title
          userId
          postImageUrl
          postType
          postStatus
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        userType
        profilePicUrl
        email
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      userId
      postImageUrl
      postType
      postStatus
      createdAt
      updatedAt
      user {
        id
        username
        userType
        profilePicUrl
        email
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        userId
        postImageUrl
        postType
        postStatus
        createdAt
        updatedAt
        user {
          id
          username
          userType
          profilePicUrl
          email
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
