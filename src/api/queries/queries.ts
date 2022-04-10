import { gql } from "@apollo/client";

export const LOAD_SUPPLIES = gql`
  query {
    supplies {
    categoryId
    imageUrl
    price
    }
  }`