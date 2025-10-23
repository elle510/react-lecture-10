import { Suspense } from 'react';
import { use } from 'react';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const cache = new Map<number, Promise<Pokemon>>();

const fetchPokemon = (id: number): Promise<Pokemon> => {
  if (!cache.has(id)) {
    cache.set(
      id,
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
    );
  }
  return cache.get(id)!;
};

const PokemonInfo = ({ id }: { id: number }) => {
  const pokemon = use(fetchPokemon(id));
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

const UseExample = () => {
  return (
    <div>
      <h2>3-3: React.use() Example</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonInfo id={1} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonInfo id={25} />
      </Suspense>
    </div>
  );
};

export default UseExample;
