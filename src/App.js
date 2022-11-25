import requests from './services/request'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import About from './About'
import Create from './Create'
import Enter from './Enter'
import NotFound from './NotFound'

const App = () => {
  requests.request()
  return (
    <Router>
      <Link to='/'>Root</Link>
      <Link to='/Create'>Create</Link>
      <Link to='/About'>About</Link>
      <Link to='/*'>*</Link>
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
