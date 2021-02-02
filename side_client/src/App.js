import React, {Component} from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import {Home, Chapters, About, Book} from './pages';
import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'
import './App.css';

class App extends Component{
  componentDidMount(){
    
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.x=0;
    camera.position.y=0;
    camera.position.z=100;
    
    const loader=new OBJLoader();
    loader.load('http://localhost:8000/universe.obj', function(object){
        scene.add(object);
    }, undefined, function(error){
        console.error(error)
    })

    const renderer=new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function animate() {
        requestAnimationFrame( animate );
        scene.rotateOnAxis(new THREE.Vector3(0, 0.01, 0), 0.005)
        renderer.render( scene, camera );
    }
    animate();

    document.getElementsByTagName('canvas')[0].style.position="fixed"
    document.getElementsByTagName('canvas')[0].style.zIndex="-9999"
    document.getElementsByTagName('canvas')[0].style.top="0"
    document.getElementsByTagName('canvas')[0].style.left="0"
}

  render(){
    return (
      <>
        <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/Home' component={Home}/>
        <Route path='/Chapters' component={Chapters}/>
        <Route path='/About' component={About}/>
        <Route path='/Book' component={Book}/>
        </BrowserRouter>
        
      </>
    );
  }
}

export default App;