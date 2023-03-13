import styled from 'styled-components'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
import React from 'react';

const HeaderContainer = styled.header`
    /* width: 1%; */
    max-width: 720px;
    margin: 30px auto;
    height: 40px;
    color: #378ac3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .menu {
        display: flex;
        flex-direction: row;
    }
    @media (max-width: 768px) {
        max-width: 90%;
    }
`

const Logo = styled.div`
    width: 100px;
    color: white;
`

const MenuItem = styled.a`
    display: flex;
    flex-direction: row;
    color: white;
    text-decoration: none;
    height: fit-content;
    padding: 4px;
    align-items: center;

`

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {logo:""}
    }
    componentDidMount() {
        const logo_str = 'flashlink'
        let i = 0
        this.timer = setInterval(() => {
            this.setState({logo: logo_str.slice(0, i+1)})
            if (i > logo_str.length) {
                clearInterval(this.timer)
            }
            i++;
        }, 100)
        let cursor = true 
        this.timer2 = setInterval(()=> {
            if (cursor) {
                this.setState({logo: logo_str})
            } else {
                this.setState({logo: logo_str+"_"})
            }
            cursor = !cursor
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
        return (
            <HeaderContainer>
                <Logo>
                    {this.state.logo}
                </Logo>
                <div className='menu'>
                    <MenuItem href='/'><div className='shortcut'>^E</div> Enter</MenuItem>
                    <MenuItem href='/Create'><div className='shortcut'>^C</div>Create</MenuItem>
                    <MenuItem href='/About'><div className='shortcut'>^A</div>About</MenuItem>
                </div>

            </HeaderContainer>
        )
    }
}

export default Header;