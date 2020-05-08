import React from 'react';
import ReactDOM from 'react-dom';
import WalkFeedbackForm from './WalkFeedbackForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WalkFeedbackForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});