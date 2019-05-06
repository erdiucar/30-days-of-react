import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header title="Title" />
        <Content />
      </div>
    );
  }
}

export default App;
