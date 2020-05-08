import React from 'react';
import ReactDOM from 'react-dom';
import WalkerItem from './WalkerItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WalkerItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});