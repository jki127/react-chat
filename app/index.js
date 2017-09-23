import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

import Chat from './Chat/index.jsx';

class App extends React.Component {
  render() {
    return (
      <Chat />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
