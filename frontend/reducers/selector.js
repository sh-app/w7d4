
export const allPokemon = (pokemon = {}) => (
  Object.keys(pokemon).map((id) => (pokemon[id]))
);

export const allToys = (toys = {}) => (
  Object.keys(toys).map((id) => {
    let toy = toys[id];
    toy[id] = id;
    return toy;
  })
);
