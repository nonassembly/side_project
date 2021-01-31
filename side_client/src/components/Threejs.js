import React, {Component} from 'react';
import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'

class Threejs extends Component{
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
            //scene.rotation.y+=0.01
            scene.rotateOnAxis(new THREE.Vector3(0, 0.5, 0), 0.005)
            renderer.render( scene, camera );
        }
        animate();
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default Threejs;