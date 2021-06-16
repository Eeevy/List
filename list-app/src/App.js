import React, { Component } from "react";
import "./App.css";
import ListView from "./components/ListView";
import GridView from "./components/GridView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      visible_characters: [],
      viewType: "grid",
      sortType: "name",
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.sortCharacters = this.sortCharacters.bind(this);
  }

  async componentDidMount() {
    Promise.all([fetch('https://the-one-api.dev/v2/character', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 9syRLb1-I6VEq9irvSI-'
      },
    }), fetch('https://the-one-api.dev/v2/quote', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer 9syRLb1-I6VEq9irvSI-'
      },
    })])
      .then(([res1, res2]) => { 
         return Promise.all([res1.json(), res2.json()]) 
      })
      .then(([res1, res2]) => {
        res1.docs.map((x) => res2.docs.map((y) => { if (y.character === x._id) { x.dialog = y.dialog; return x; } }) );

          this.setState({
            characters: res1.docs,
            visible_characters: res1.docs
          });
      });
  }

  handleViewChange = (value) => {
    this.setState({ viewType: value });
  };

  handleSort = (e) => {
    this.setState({ sortType: e.target.value });
    this.sortCharacters(e.target.value);
  };

  sortCharacters(sortType) {
    this.state.visible_characters.sort(function (x, y) {
      let a, b;
      if (sortType === "name") {
        a = x.name;
        b = y.name;
      } else {
        a = x.race;
        b = y.race;
      }
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }

  render() {
    let view;
    if (this.state.viewType === "grid") {
      view = <GridView characters={this.state.visible_characters} />;
    } else {
      view = <ListView characters={this.state.visible_characters} />;
    }

    return (
      <div className="App">
        <div className="top-div py-4 text-center text-white">
          <h1>The Lord of the Rings</h1>
          <h3>- Characters</h3>
          <small><strong>Powered by: </strong>The One API</small>
        </div>

        <div className="container-lg py-4">
          <div className="row">

            <div className="col pb-2">
              <div className="btn-group">
                <button
                  type="button"
                  key="button-grid"
                  className={this.state.viewType === 'grid' ? "btn-grid-view btn btn-secondary" : "btn-list-view btn btn-outline-secondary"}
                  value="grid"
                  onClick={() => this.handleViewChange("grid")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-grid"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  key="button-listview"
                  className={this.state.viewType === 'grid' ? "btn-list-view btn btn-outline-secondary" : "btn-list-view btn btn-secondary"}
                  value="list"
                  onClick={() => this.handleViewChange("list")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="col pb-2">
              <div className="sorting d-flex justify-content-end">
                <select
                  className="select-sort p-2 rounded btn btn-outline-secondary"
                  value={this.state.sortType}
                  onChange={this.handleSort}>
                  <option key="sort-name" value="name">Name</option>
                  <option key="sort-race" value="office">Race</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className="container-lg text-center">{view}</div>
      </div>
    );
  }
}

export default App;