import React, {Component} from 'react'
import Header from '../components/Header';

class About extends Component{
    render(){
        return(
            <>
            <Header active="About"/>
            <div className="Home_Hi">
                ㅇㅅ님에대해
            </div>
            </>
        )
    }
}

export default About;