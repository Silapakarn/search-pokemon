import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { GET_POKEMON_BY_NAME } from '../graphql/queries';

function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(router.query.name || '');

  const { data, loading, error } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name: searchQuery },
    skip: !searchQuery,
  });

  const handleSearch = (event: any) => {
    const { value } = event.target;
    setSearchQuery(value);
    router.push({ pathname: '/', query: { name: value } }, undefined, { shallow: true });
  };

  const handleEvolutionClick = (evolutionName: any) => {
    setSearchQuery(evolutionName);
    router.push({ pathname: '/', query: { name: evolutionName } }, undefined, { shallow: true });
  };

  if (loading) return <div className='loading'><h1>Loading...</h1></div>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="container">
      <img className='logo' src={'https://cdn.worldvectorlogo.com/logos/pokemon-23.svg'} alt={'Search Pokémon by name'} />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search Pokémon by name"
        className='search-input'
      />
      <div className='information'>
        {data && data.pokemon ? (
          <div key={data.pokemon.id}>
            <img src={data.pokemon.image} alt={data.pokemon.name} />
            <h1>{data.pokemon.name}</h1>
            <h3 className={`type ${data.pokemon.types[0].toLowerCase()}`}>
              Type: <a>{data.pokemon.types[0]}</a>
            </h3>

            <div>
              <h3>Attacks:</h3>
              <ul>
                {data.pokemon.attacks.fast.map((attack: any, index: any) => (
                  <li key={index}>
                    {attack.name} ({attack.type}) - Damage: {attack.damage}
                  </li>
                ))}
                {data.pokemon.attacks.special.map((attack: any, index: any) => (
                  <li key={index}>
                    {attack.name} ({attack.type}) - Damage: {attack.damage}
                  </li>
                ))}
              </ul>
            </div>

            {data.pokemon.evolutions && data.pokemon.evolutions.length > 0 && (
              <div className='evolutions_header'>
                <h3>Evolutions:</h3>
                <ul  className='evolutions'>
                  {data.pokemon.evolutions.map((evolution: any) => (
                    <li key={evolution.id} onClick={() => handleEvolutionClick(evolution.name)}>
                      <img src={evolution.image} alt={evolution.name} />
                      <h1>{evolution.name}</h1>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className='no_found'>
            <h1>No found Pokémon.</h1>
            <img src={'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg'} alt={'No found Pokémon.'} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;



