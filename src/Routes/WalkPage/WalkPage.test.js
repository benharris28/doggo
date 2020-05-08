import React from 'react';
import ReactDOM from 'react-dom';
import WalkPage from './WalkPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WalkPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});