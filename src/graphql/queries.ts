import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      name
      description
      price
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      price
    }
  }
`;
