import React, { Component } from 'react';
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header test">

        </header>
        <Navbar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
