import { Component } from 'react';

import './App.css';

import CharactersContainer from './components/characterContainer';
import FavoriteCharacter from './components/favoriteCharacter';

const charactersURL = "https://rickandmortyapi.com/api/character";

class App extends Component {

  state = {
    isFavoriteCharacter: false,
    favorite: {},
    characters: []
  }

  componentDidMount() {
    fetch(charactersURL)
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }))
  }

  setFavorite = (clickedCharacter) => {
    this.setState({ 
      favorite: clickedCharacter, 
      isFavoriteCharacter: true 
    })
  }

  render() {
    return (
      <div className="App">
        {/* condition ? what to do if true : what to do if false */}
        { this.state.isFavoriteCharacter
          ? <FavoriteCharacter favorite={this.state.favorite} /> 
          : null 
        }
        <CharactersContainer 
          characters={this.state.characters}
          setFavorite={this.setFavorite}
        />
      </div>
    );
  }
}

export default App;
