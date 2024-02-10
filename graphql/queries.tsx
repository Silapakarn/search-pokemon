import { gql } from '@apollo/client';

export const GET_POKEMON_BY_NAME = gql`
query GetPokemonByName($name: String!) {
  pokemon(name: $name) {
    id
    name
    image
    types
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      name
      image
    }
  }
}`;


export const GET_DOG = gql`
  query GetDog($name: String!) {
    dog(name: $name) {
      name
      breed
    }
  }
`;