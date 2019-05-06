import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App-header">
        <div className="fa fa-list" />
        <span>{this.props.title}</span>
        <div className="fa fa-search searchIcon" />
      </div>
    );
  }
}

export default Header;
