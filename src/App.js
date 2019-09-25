import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <p>Hola CourseIt - {this.props.counter}</p>
      </div>)
  };
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
export default connect(mapStateToProps)(App);
