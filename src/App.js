import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  renderMatches,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components'

import About from './About'
import Create from './Create'
import Enter from './Enter'
import Redirect from './Redirect'
import NotFound from './NotFound'

import Header from './components/Header'

import request from './services/request'
import React from 'react';
import R from './Redirect';

import { useNavigate } from 'react-router-dom';


const Wrapper = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`
const F = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/goodbye');
}
class App extends React.Component {

  constructor(props) {
    super(props)
  }
  onKeyDown(e) {
    
    if (e.keyCode === 69 && e.ctrlKey) { // CTRL + E
      console.log("!")
      window.location.href = '/'
    } else if (e.keyCode === 67 && e.ctrlKey) { // CTRL + C
      window.location.href = '/Create'
    } else if (e.keyCode === 65 && e.ctrlKey) { // CTRL + A
      window.location.href = '/About'
    }
  }
  render() {  
    return (<div onKeyDown={this.onKeyDown}>
        <Router>
          <Routes>
            <Route path='/' element={<Enter/>}/> 
            <Route path='/Create' element={<Create />}/> 
            <Route path='/About' element={<About />}/> 
            <Route path='/Redirect' element={<Redirect />}/> 
            <Route path='*' element={<NotFound />}/> 
          </Routes>
        </Router>
        </div>
    );
  }
}

export default App;
