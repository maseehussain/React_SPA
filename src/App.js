import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/stuff">Stuff</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="content" />
      </div>
    );
  }
}

export default App;
