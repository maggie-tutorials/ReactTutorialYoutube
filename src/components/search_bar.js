import React, { Component } from 'react';

// ES6 Class is a Javascript object that holds properties and methods
// Defines a new class SearchBar that has access to all the functionality
// that React.Component has.
class SearchBar extends Component {
  // State is a plain JS object that is used to record, and react, to user events.
  // Each class-based component that we define has its own state object.
  // Whenever the state is changed, the component immediately re-renders.
  // and forces its children to re-render.
  // Only class-based components have state.
  // The constructor function is the only one that gets called automatically
  // whenever the component is created.
  constructor(props) {
    // Calling the parent method
    super(props);

    this.state = {term: ''};
  }

  // Every class-based React component needs to have a render method
  // A controlled field is an element whose value is set by the state
  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })}/>
      </div>
    )
  }

  // Event handler is a function that runs whenever the event occurs.
  // All browser events come with an event payload that describes the context
  // in which the event has occurred.
  onInputChange(event) {
      console.log(event.target.value);
  }
}

export default SearchBar;
