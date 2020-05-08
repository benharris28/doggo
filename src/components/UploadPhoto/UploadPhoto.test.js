import React from 'react';
import ReactDOM from 'react-dom';
import UploadPhoto from './UploadPhoto';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UploadPhoto />, div);
  ReactDOM.unmountComponentAtNode(div);
});