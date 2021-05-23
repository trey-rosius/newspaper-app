/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
