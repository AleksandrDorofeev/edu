import React, { Component } from 'react';

import SelectComponent from './components/Select/Select';
import Footer from './containers/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="App-title">
            <h1>Заголовок</h1>
          </div>
          <SelectComponent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
