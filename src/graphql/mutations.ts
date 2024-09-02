import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $description: String, $price: Float!) {
    createProduct(name: $name, description: $description, price: $price) {
      id
      name
      description
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: ID!
    $name: String
    $description: String
    $price: Float
  ) {
    updateProduct(
      id: $id
      name: $name
      description: $description
      price: $price
    ) {
      id
      name
      description
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;
