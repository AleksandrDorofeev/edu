import React, { Component } from 'react';

import './App.css'

import SelectComponent from './components/Select/Select';
import Card from './components/List/Card/Card';
import List from './components/List/List';
import Footer from './containers/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="App-title">
            <h1>Заголовок</h1>
          </div>
          <List />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
