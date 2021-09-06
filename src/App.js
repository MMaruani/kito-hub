import React, { Component } from "react";
import "./App.css";
import MediaWall from "./mediaWall/MediaWall";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Glasgow 7</h1>
          <span class="arrow-down">↓</span>
        </header>
        <header className="App-header">
          <h2>
            {" "}
            Photos prises lors d'un premier repérage - KAIROUAN - TATAOUINE
            .&nbsp;.&nbsp;.
          </h2>
          <span class="arrow-down">↓</span>
        </header>
        <body>
          <MediaWall />
        </body>
      </div>
    );
  }
}

export default App;
