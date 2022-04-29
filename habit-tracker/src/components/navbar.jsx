import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-cloud"></i>
        <span className="navbar-name">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCounts}</span>
      </div>
    );
  };
};

export default Navbar;