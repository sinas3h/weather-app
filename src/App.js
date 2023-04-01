import React, { Component } from 'react';
import Header from './component/Header';
// import City from './component/City';

class App extends Component {
  
  state = {
    add :[]
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;