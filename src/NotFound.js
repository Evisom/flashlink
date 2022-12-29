import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'


class NotFound extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header/>
                404
            </div>
        );
    }
}

export default NotFound;