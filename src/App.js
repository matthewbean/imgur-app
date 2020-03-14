import React from 'react';
import './App.css';

import Image from './modules/Image';
import Page from './modules/Page';
import ImageState from './context/image/ImageState';

const config = require('./config/default.json');
const applicationID = config.userName;
function App() {
  return (
    <ImageState>
      <div className='App'>
        <Page />
      </div>
    </ImageState>
  );
}

export default App;
