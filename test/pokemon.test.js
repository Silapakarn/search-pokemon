import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing'; 
import PokemonTest from './PokemonTest'; 
import { GET_POKEMON_BY_NAME } from '../graphql/queries';

// Test correct type 'Grass'

const mocks_Bulbasaur = [
  {
    request: {
      query: GET_POKEMON_BY_NAME,
      variables: { name: 'Bulbasaur' },
    },
    result: {
      data: {
        pokemon: {
          id: 'UG9rZW1vbjowMDE=',
          name: 'Bulbasaur',
          image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
          type: [ "Grass", "Poison" ],      
        },
      },
    },
  },
];

describe('POKEMON : ------------> Bulbasaur', () => {
  it('renders with mocked data', async () => {
    render(
      <MockedProvider mocks={mocks_Bulbasaur} addTypename={false}>
        <PokemonTest props={'Bulbasaur'} />
      </MockedProvider>
    );


    await waitFor(() => {
      const typeElement = screen.getByText('Grass');
      expect(typeElement).toBeInTheDocument();
    });
  });
});


// Test correct type 'Fire'

const mocks_Charmander = [
  {
    request: {
      query: GET_POKEMON_BY_NAME,
      variables: { name: 'Charmander' },
    },
    result: {
      data: {
        pokemon: {
          id: 'UG9rZW1vbjowMDQ=',
          name: 'Charmander',
          image: "https://img.pokemondb.net/artwork/charmander.jpg",
          type: [ "Fire" ],      
        },
      },
    },
  },
];

describe('POKEMON : ------------> Charmander', () => {
  it('renders with mocked data', async () => {
    render(
      <MockedProvider mocks={mocks_Charmander} addTypename={false}>
        <PokemonTest props={'Charmander'} />
      </MockedProvider>
    );


    await waitFor(() => {
      const typeElement = screen.getByText('Fire');
      expect(typeElement).toBeInTheDocument();
    });
  });
});

// Test correct type 'Water'

const mocks_Squirtle = [
  {
    request: {
      query: GET_POKEMON_BY_NAME,
      variables: { name: 'Squirtle' },
    },
    result: {
      data: {
        pokemon: {
          id: 'UG9rZW1vbjowMDc=',
          name: 'Squirtle',
          image: "https://img.pokemondb.net/artwork/squirtle.jpg",
          type: [ "Water" ],      
        },
      },
    },
  },
];

describe('POKEMON : ------------> Squirtle', () => {
  it('renders with mocked data', async () => {
    render(
      <MockedProvider mocks={mocks_Squirtle} addTypename={false}>
        <PokemonTest props={'Squirtle'} />
      </MockedProvider>
    );


    await waitFor(() => {
      const typeElement = screen.getByText('Water');
      expect(typeElement).toBeInTheDocument();
    });
  });
});