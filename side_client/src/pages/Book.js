import React, {Component} from 'react'
import Header from '../components/Header';

class Book extends Component{
    render(){
        return(
            <>
            <Header active="Book"/>
            <div className="Home_Hi">
                ㅇㅅ님책
            </div>
            </>
        )
    }
}

export default Book;