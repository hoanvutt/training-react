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
  const buttonText = { text : 'Click Me!' };
  const style = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);