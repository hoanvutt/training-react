// Import the React an ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
/* 
const App = function() {
  return <div>Hi there!</div>;
};
*/

function getButtonText() {
  return 'Click on Me!';
}

const App = () => {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);