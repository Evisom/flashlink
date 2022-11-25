import styled from 'styled-components'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    background: #eeeeee;
    color: #378ac3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Header = (props) => {

    return (
        <HeaderContainer>
            <Link to='/'>Enter</Link> 
            <Link to='/Create'>Create</Link> 
            <Link to='/About'>About</Link>
        </HeaderContainer>
    )
}

export default Header;