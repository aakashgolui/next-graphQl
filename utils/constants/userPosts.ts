import { gql } from "@apollo/client";

export const GET_USER_POSTS = (id: string) => gql`
  query {
    user(id: ${id}) {
      posts {
        data {
          id
          title
          body
          user {
            id
            username
          }
        }
      }
    }
  }
`;