import React from 'react';
import ReactDOM from 'react-dom';
import FeedbackItem from './FeedbackItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedbackItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});