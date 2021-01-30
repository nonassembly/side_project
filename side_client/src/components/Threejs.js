import React, {Component} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

class Threejs extends Component{
    componentDidMount(){
        const scene=new THREE.Scene();
        const camera=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        camera.position.z=5;
        
        const loader=new GLTFLoader();
        loader.load('http://localhost:8000/universe.gltf', function(gltf){
            scene.add(gltf.scene);
        }, undefined, function(error){
            console.error(error)
        })

        const renderer=new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        function animate() {
            requestAnimationFrame( animate );
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