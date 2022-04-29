import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  handleAdd = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <>
        <form className="habit-form" onSubmit={this.handleAdd}>
          <input type="text" ref={this.inputRef} className="habit-input" placeholder="Enter your habit" />
          <button className="habit-input-btn"><i className="fas fa-book"></i></button>
        </form>
      </>
    );
  };
};

export default HabitAddForm;