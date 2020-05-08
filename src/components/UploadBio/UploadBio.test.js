import React from 'react';
import ReactDOM from 'react-dom';
import UploadBio from './UploadBio';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UploadBio />, div);
  ReactDOM.unmountComponentAtNode(div);
});