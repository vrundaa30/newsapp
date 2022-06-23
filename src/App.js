import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import Spinner from './components/Spinner';


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Router> */}
        <NavBar/>   
        <News pageSize={5} country="in" category="science"/>
        <Spinner/>
        
          
         
        {/* </Router> */}
      </div>
    )
  }
}



