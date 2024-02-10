import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '../graphql/queries';

interface Props {
  props: string;
}

const PokemonTest: React.FC<Props> = ({props}) => {

  const { data, loading, error } = useQuery(GET_POKEMON_BY_NAME, { variables: { name: props }  });
  console.log("🚀 ~ data:", data)

  if (loading) return <div className='loading'><h1>Loading...</h1></div>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="container">
      <div className='information'>
      <h3>Type: <a>{data.pokemon.type && data.pokemon.type.length > 0 ? data.pokemon.type[0] : 'Unknown'}</a></h3>
      </div>
    </div>
  );
}

export default PokemonTest;
