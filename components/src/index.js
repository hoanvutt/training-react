import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Post comment 1"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00PM"
        content="Post comment 2"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Simon"
        timeAgo="Yesterday at 5:00PM"
        content="Post comment 3"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#root'));
