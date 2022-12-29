import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'

class About extends React.Component{
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header/>
                About
            </div>
        );
    }
}

export default About;