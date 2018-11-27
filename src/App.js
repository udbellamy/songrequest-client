import React, { Component } from 'react';
import './App.css';
import './Material.css';

import Header from './Header.js';
import Body from './Body.js';

import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import storeBank from './stores/StoreIndex.js';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['PT Serif', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <Provider {...storeBank}>
        <div className="App">
          <div className="App-header">
            <Header />
            {/* <DevTools /> */}
          </div>
          <div className="App-body">
            <Body />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
