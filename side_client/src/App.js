import { render } from "@testing-library/react";
import React, {Component} from "react";
import Threejs from "./threeD/Threejs"; 

class App extends Component{
  render(){
    return (
      <Threejs />
    );
  }
}

export default App;
