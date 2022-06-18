import { gql } from "@apollo/client";

export const HEADER = gql`
{
  header {
    data {
      id
      attributes {
        title
      }
      }
    }
  }

`;