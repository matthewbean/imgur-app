import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Page from './pages/Page';
import Current from './pages/Current';
import ImageState from './context/image/ImageState';
import Navbar from './modules/Navbar';

const config = require('./config/default.json');
const applicationID = config.userName;
function App() {
  return (
    <ImageState>
      <div className='App'>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Page} />
            <Route exact path='/post' component={Current} />
          </Switch>
        </Router>
      </div>
    </ImageState>
  );
}

export default App;
