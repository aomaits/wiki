import { gql } from '@apollo/client';

export const QUERY_ALL_CHARACTERS = gql`
query Query {
    characters {
      name
      nickname
      gender
      race
      age
      height
      weight
      alignment
      description
      itemsId {
        name
        description
      }
    }
  }
`

export const QUERY_ALL_LOCATIONS = gql`
query Query {
    locations {
      name
      type
      description
    }
  }
`