// Import the React an ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
/* 
const App = function() {
  return <div>Hi there!</div>;
};
*/
const App = () => {
  return <h1>Hi there!</h1>;
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);