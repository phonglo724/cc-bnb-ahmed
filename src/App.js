import { Component } from 'react';

import './App.css';

import CharactersContainer from './components/characterContainer';

const charactersURL = "https://rickandmortyapi.com/api/character";

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    fetch(charactersURL)
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }))
  }

  render() {
    return (
      <div className="App">
        <CharactersContainer characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
