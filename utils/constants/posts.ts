import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          id
          username
        }
      }
      meta {
        totalCount
      }
    }
  }
`;