/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideos = /* GraphQL */ `
  query GetVideos($id: ID!) {
    getVideos(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listVideoss = /* GraphQL */ `
  query ListVideoss(
    $filter: ModelVideosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
