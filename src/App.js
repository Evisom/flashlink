import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components'

import About from './About'
import Create from './Create'
import Enter from './Enter'
import NotFound from './NotFound'

import Header from './components/Header'

import request from './services/request'

const Wrapper = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`


const App = () => {
  request({
    url: '/api/create',
    method: 'POST',
    body: {
      url: "test"
    }
  }, (response) => {
    console.log(response)
  })
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Enter/>}/> 
          <Route path='/Create' element={<Create />}/> 
          <Route path='/About' element={<About />}/> 
          <Route path='*' element={<NotFound />}/> 
        </Routes>
      </Router>
    
  );
}

export default App;
