import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import styled, { createGlobalStyle } from 'styled-components'

const Text = styled.p`
    color: white;
    margin: 0 auto;
    width: fit-content;
    max-width: 80%;
    height: fit-content;
    margin-top: 64px;
    a {
        color: white;

    }
`
class About extends React.Component{
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header/>
                    <Text>
                    So far, I don't know what to write here. <br/>
                    Developed by <a href='https://github.com/Evisom'>Dmitry Shishmintsev</a>
                    </Text>
                    
            </div>
        );
    }
}

export default About;