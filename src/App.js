import React, { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setpokemonName] = useState("");
  const [search, setSearch] = useState(false);
  const [pokemon, setpokemon] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const searchpokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);

        setpokemon({
          name: response.data.forms[0].name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
      });
    setSearch(true);
  };

  return (
    <div className="App">
      <header>
        <div className="title">
          <h1>pokemon Stats</h1>
        </div>
        <div className="search">
          <input
            type="text"
            onChange={(e) => setpokemonName(e.target.value)}
            value={pokemonName}
          />
          <button onClick={searchpokemon}>Search pokemon</button>
        </div>
      </header>
      <main>
        {search ? (
          <div style={{ textAlign: "center", margin: "20px" }}>
            <h1 style={{ textDecoration: "underline" }}>{pokemon.name}</h1>
            <img
              src={pokemon.img}
              alt="pokemon character"
              style={{ width: "200px", height: "200px" }}
            />
            <h3>
              <span style={{ color: "red" }}>HP</span> : {pokemon.hp}
            </h3>
            <br />
            <h3>
              <span style={{ color: "red" }}>Attack</span> : {pokemon.attack}
            </h3>
            <br />
            <h3>
              <span style={{ color: "red" }}>Defense</span> : {pokemon.defense}
            </h3>
            <br />
            <h3>
              <span style={{ color: "red" }}>Type</span> : {pokemon.type}
            </h3>
          </div>
        ) : (
          <h2 style={{ textAlign: "center", margin: "10px" }}>NO search</h2>
        )}
      </main>
    </div>
  );
}

export default App;
