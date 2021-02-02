import React, {Component} from 'react'
import Header from '../components/Header';
import "../App.css"

class Home extends Component{
    render(){
        return(
            <>
            <Header active="Home"/>
            <div className="Home_Hi">
                ㅇㅅ님찬양
            </div>
            </>
        )
    }
}

export default Home;