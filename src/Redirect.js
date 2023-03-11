import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header'
import {useNavigate} from 'react-router-dom';

class Redirect extends React.Component {
    componentDidMount() {
        console.log(window.location.href.split('?=')[1])
        let url = window.location.href.split('?=')[1]
        // this.props.navigate('example.com' , { replace: true })
        const timeout = setTimeout(() => {
            window.location.href = url.replace('https', 'http')
        }, 3000)
        
    }
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header/>
            r
            </div>
        );
    }
}

const R = (props) => {
    const navigate = useNavigate()

    return (<Redirect navigate={navigate    }/>)
}

export default R;