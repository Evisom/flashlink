import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import {useNavigate} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components'

const Text = styled.p`
    color: white;
    margin: 0 auto;
    width: fit-content;
    height: fit-content;
    margin-top: 64px;
    a {
        color: white;

    }
`

class Redirect extends React.Component {
    componentDidMount() {
        console.log(window.location.href.split('?=')[1])
        let url = window.location.href.split('?=')[1]
        const timeout = setTimeout(() => {
            window.location.href = url.replace('https', 'http')
        }, 3000)
        
    }
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header/>
                <Text>You will be redirected in a few seconds...</Text>
            </div>
        );
    }
}

const R = (props) => {
    const navigate = useNavigate()

    return (<Redirect navigate={navigate    }/>)
}

export default R;