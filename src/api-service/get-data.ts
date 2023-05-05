import { gql } from "@apollo/client";
export const GET_DATA = gql`
query GetCountry {
  countries {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
`;