import 'normalize.css/normalize.css';
import '../styles/App.css';

import React, {Component} from 'react';

class AppComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="index">
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

export default AppComponent;
