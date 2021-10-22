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
  return (
    <div>
      <label class="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        Submit
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);