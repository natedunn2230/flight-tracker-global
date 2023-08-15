import { Component, OnInit } from "@angular/core";
import * as ThreeJS from 'three';

@Component({
    selector: 'globe',
    templateUrl: './global-scene.component.html'
})
export default class GlobeComponent  implements OnInit {
    ngOnInit(): void {
        this.createScene();
    }

    private createScene() {
        // TODO remove example scene
        const canvas = document.getElementById('globe-canvas');

        const scene = new ThreeJS.Scene();

        const earthTextureLoader = new ThreeJS.TextureLoader();

        earthTextureLoader.load('assets/images/earth_texture.jpg', (texture) => {
            console.log('loaded', texture);

            const material = new ThreeJS.MeshBasicMaterial({map: texture});
        
            const globe = new ThreeJS.Mesh(
                new ThreeJS.SphereGeometry(15),
                material
            );

            globe.rotateX(Math.PI * 1 / 6);
            const ambientLight = new ThreeJS.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const pointLight = new ThreeJS.PointLight(0xffffff, 0.5);
            pointLight.position.x = 2;
            pointLight.position.y = 2;
            pointLight.position.z = 2;
            scene.add(pointLight);



            scene.add(globe);

            const canvasSizes = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            
            const camera = new ThreeJS.PerspectiveCamera(
                75,
                canvasSizes.width / canvasSizes.height,
                0.001,
                1000
            );
            camera.position.z = 30;
            scene.add(camera);
            
            if (!canvas) {
                return;
            }
            
            const renderer = new ThreeJS.WebGLRenderer({
                canvas: canvas,
            });
            renderer.setClearColor(0xe232222, 1);
            renderer.setSize(canvasSizes.width, canvasSizes.height);

            window.addEventListener('resize', () => {
                canvasSizes.width = window.innerWidth;
                canvasSizes.height = window.innerHeight;
            
                camera.aspect = canvasSizes.width / canvasSizes.height;
                camera.updateProjectionMatrix();
            
                renderer.setSize(canvasSizes.width, canvasSizes.height);
                renderer.render(scene, camera);
            });

            const clock = new ThreeJS.Clock();

            const animateGeometry = () => {
                const elapsedTime = clock.getElapsedTime();
            
                globe.rotation.y = 0.2 * elapsedTime;
            
                // Render
                renderer.render(scene, camera);
            
                // Call animateGeometry again on the next frame
                window.requestAnimationFrame(animateGeometry);
            };
            
            animateGeometry();
        })
    }
}