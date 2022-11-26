import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'

import styled, {createGlobalStyle} from 'styled-components'
import React from 'react'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const EnterWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CodeInput = styled.input`
    width: 32px;
    height: 32px;
`

class Enter extends React.Component {
    constructor(props) {
        super(props)
        this.code=""
        this.handleChange = this.handleChange.bind(this)
        this.handleBackspace = this.handleBackspace.bind(this)
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
            this.getElement(event, -1, (element) => {element.focus()})
        }
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

                    </form>
                </EnterWrapper>    
            </Container>
        );
    }
}

export default Enter;