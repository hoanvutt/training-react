import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Season App</div>;
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));
