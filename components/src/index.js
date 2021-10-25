import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Simon" />
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));