import React from 'react';
import styled from 'styled-components'

import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'

import request from './services/request'


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
`

const Input = styled.input`
    
`

const Button = styled.button`
` 


class Create extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.renderCode = this.renderCode.bind(this)
        this.state = {data:""}
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value)
        request({
            url: '/api/create', 
            method: 'POST',
            body: {url: event.target[0].value}
        }, (response) => {
            console.log(response)
            this.setState({data: response})
        }) 
    }

    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header/>
                <Wrapper>
                    <form onSubmit={this.handleSubmit}>
                        <Input/>
                        <Button name="url" type='submit'>create</Button>
                        <p>{this.state.data.code}</p>
                    </form>
                </Wrapper>
            </div>
        );
    }
}

export default Create;