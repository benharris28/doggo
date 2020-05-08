import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkWalkForm from './BookWalkForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookmarkWalkForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});