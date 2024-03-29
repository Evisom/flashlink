import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'

import styled from 'styled-components'
import React, { useEffect } from 'react'
import request from './services/request'

import Error from './components/Error'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const EnterWrapper = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CodeInput = styled.input`
    width: 48px;
    height: 58px;
    background: rgb(199,199,199);
    border: none;
    border-radius: 0;
    color: black;
    margin: 6px;
    outline: none;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    text-transform: uppercase;
    caret-color: transparent;
    font-family: 'JetBrains Mono', monospace;
`

const HiddenInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

class Enter extends React.Component {
    constructor(props) {
        super(props)
        this.code=""
        this.handleChange = this.handleChange.bind(this)
        this.handleBackspace = this.handleBackspace.bind(this)
        this.sendCode = this.sendCode.bind(this)
        this.state = {error: ''};
    }

    getElement(event, step, callback) {
        let id = event.target.id.split('-')[0] + '-' + (Number(event.target.id.split('-')[1]) + step)
        let element = document.getElementById(id)
        if (element) {
            callback(element)
        }
    }

    handleChange(event) {
        if (event.target.value != "") {
            this.code+=event.target.value
            this.getElement(event, 1, (element) => {element.focus()})
        }
    }
    handleBackspace(event) {
        if (event.key === 'Backspace') {
            this.code = this.code.substring(0, this.code.length-1)
            event.target.value = ""
            this.getElement(event, -1, (element) => {
                console.log(event.target.value)
                element.focus()
            }, ()=>{})
        }
    }
    sendCode() {
        console.log(this.code)
        request({
            url: ('/api/link?code='+this.code.toLowerCase()),
            method:'GET', 
            body: undefined
        }, (response) => {
            if (response.url) {
                this.redirect(response.url)
            } else {
                console.log(response)
                this.setState({error: "Error! " + response.status})
            }
        })
    }
    redirect(url) {

        window.location.href = 'Redirect?=' + url.slice(1,-1)
    }

    render() {
        return (
            <Container>
                <GlobalStyle/>
                <Header/>
                <EnterWrapper>
                    <form onKeyDown={this.handleBackspace} onChange={this.handleChange}>
                        <CodeInput autoFocus id="code-0" maxLength="1"/>
                        <CodeInput id="code-1" maxLength="1"/>
                        <CodeInput id="code-2" maxLength="1"/>
                        <CodeInput id="code-3" maxLength="1"/>
                        <CodeInput id="code-4" maxLength="1"/>
                        <HiddenInput onFocus={this.sendCode} id="code-5" maxLength="0"/>
                    </form>
                    <Error>{this.state.error}</Error>    
                </EnterWrapper>    
                
            </Container>
        );
    }
}

export default Enter;