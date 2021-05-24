/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          postText
          userId
          postImageUrl
          image
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          postText
          userId
          postImageUrl
          image
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          postText
          userId
          postImageUrl
          image
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      postText
      userId
      postImageUrl
      image
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      postText
      userId
      postImageUrl
      image
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      postText
      userId
      postImageUrl
      image
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
