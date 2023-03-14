import React from 'react';
import styled from 'styled-components'

import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'

import request from './services/request'

import Error from './components/Error'


const Wrapper = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 48px;
    form {
        display: block;
        height: fit-content;
        .row {
            /* height: ; */
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            * {padding-top: 4px;}
        }
    }
`

const Input = styled.input`
    display: block;
    background-color: rgb(199,199,199);
    outline: none;
    border: none;
    border-radius: 0;
    font-size: 24px;
    font-weight: 800;
    padding: 8px;
    caret-color: transparent;
`

const Button = styled.button`
    display: block;
    background: none;
    border: none;
    outline: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* margin-top: 16px; */
    background: rgb(199,199,199);
    color: black;
` 

const Warning = styled.div`
    color: white;
    margin-top: 32px;
`


class Create extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.renderCode = this.renderCode.bind(this)
        this.state = {data: ""}
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
            if (response.status === 'ok') {
                let msg = ''
                for (let i=0; i<response.code.length; i++) {
                    msg+='<div class="shortcut">' + response.code[i] + '</div>'
                }
                this.setState({data: "Code: " + msg})
            } else {
                this.setState({data: "Error! " + response.status})
            }
                
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
                        <div className='row'>
                        <Error>

                            <div dangerouslySetInnerHTML={{__html : this.state.data}}></div>
                        </Error>
                        <Button name="url" type='submit'>
                            Create
                        </Button>                        
                        </div>
                    </form>
                    <Warning>Codes are valid only for 1 day!</Warning>

                </Wrapper>
            </div>
        );
    }
}

export default Create;
