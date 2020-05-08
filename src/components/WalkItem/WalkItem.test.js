import React from 'react';
import ReactDOM from 'react-dom';
import WalkItem from './WalkItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WalkItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});