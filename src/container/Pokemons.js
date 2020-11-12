import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';

class Pokemons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [
        { name: 'Pikachu', id: 1, color: 'yellow' },
        { name: 'Snorlax', id: 2, color: 'blue' },
        { name: 'Charmander', id: 3, color: 'orange' },
      ],
    };
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        <Pokemon pokemons={pokemons} />
      </div>
    );
  }
}

export default Pokemons;