import styled from 'styled-components'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
import React from 'react';

const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    background: #eeeeee;
    color: #378ac3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <Link to='/'>Enter</Link> 
                <Link to='/Create'>Create</Link> 
                <Link to='/About'>About</Link>
            </HeaderContainer>
        )
    }
}

export default Header;