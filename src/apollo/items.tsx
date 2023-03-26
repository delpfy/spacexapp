import { gql } from "@apollo/client";

export const ALL_ITEMS = gql`
  query AllItems {
    rockets{
      id
      description
      name
    }
  }
`;
