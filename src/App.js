import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/cardList/CardList";
import { SearchBox } from "./components/searchBox/SearchBox";

class App extends Component {
  state = {
    monsters: [],
    searchText: ""
  };

  async componentDidMount() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const resJSON = await result.json();
    this.setState({
      monsters: resJSON
    });
  }

  handleSearch = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleSearch={this.handleSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
