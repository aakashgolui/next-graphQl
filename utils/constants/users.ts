import { gql } from "@apollo/client";

export const GET_USERS = gql`
  {
    users {
      data {
        id
        username
        email
      }
    }
  }
`;