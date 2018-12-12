import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three'; 
import { AmbientLight, PointLight } from 'three';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  light1:any;
  light2:any;

  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  meshBox = null;
  meshFloor = null;
 
  constructor() {
    //this.renderer.setClearColor(0xff0000); 
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    //this.camera.position.z = 1;

    // this.light = new THREE.PointLight(0xffffff, 0.5); 
    // this.scene.add(this.light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({color: 0xff4444, wireframe: false});
    this.meshBox = new THREE.Mesh(geometry, material);
    this.meshBox.position.y += 1;
    this.scene.add(this.meshBox);

    const geometryFloor = new THREE.PlaneGeometry(10, 10, 10, 10);
    const materialFloor = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false});
    this.meshFloor = new THREE.Mesh(geometryFloor, materialFloor);
    this.scene.add(this.meshFloor);

    this.light1 = new THREE.AmbientLight(0xffffff, 0.2);
    this.scene.add(this.light1);

    this.light2 = new PointLight(0xffffff, 0.8, 18);
    this.light2.position.set(-3, 6, -3);
    this.light2.castShadow = true;
    this.light2.shadow.camera.near = 0.1;
    this.light2.shadow.camera.far = 25;
    this.scene.add(this.light2);
    

    //this.camera.position.selector(0, 1.8, -5); 
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  ngOnInit() {
    
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.meshBox.rotation.x += 0.01;
    this.meshBox.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }

}
