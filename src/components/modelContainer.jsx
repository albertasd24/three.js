import { useEffect, useRef } from "react";
import * as THREE from "three";
import Model from "../hooks/loadModel";
import "../style/model.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ModelContainer = ({ nameModel }) => {
    const mountRef = useRef(null);
    const modelGroup = new THREE.Group()
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 30);
    const renderer = new THREE.WebGLRenderer({ alpha: true, powerPreference: 'high-performance', precision: 'lowp', animation: true });
    let currectRef, orbitControls;

    useEffect(() => {
        currectRef = mountRef.current;
        createScene()
        initRenderer(currectRef)
        initOrbit()
        console.log(renderer.domElement);
        animate()
        mountRef.current.appendChild(renderer.domElement)

        return () => {
            currectRef.removeChild(renderer.domElement)
            scene.clear();
            camera.clear();
            renderer.clear();

        }
    }, []);

    const createScene = () => {
        const ambientLight = new THREE.AmbientLight(0xeeeeee, 5);
        const pointLight = new THREE.PointLight(0xffffff, 2);
        pointLight.position.set(1, 1, 1);
        camera.position.set(0, 0, 10)
        scene.add(ambientLight);
        scene.add(pointLight);
        scene.add(camera);
        importModel();
    }

    const importModel = () => {
        console.log(modelGroup);
        if (nameModel === "flowerVase") {
            const { ModelFlowerVase } = Model();
            ModelFlowerVase(modelGroup);
        }
        scene.add(modelGroup);
    };

    const initOrbit = () => {
        orbitControls = new OrbitControls(camera, renderer.domElement)
        orbitControls.enableDamping = true
    }

    const initRenderer = (currentRef) => {

        const { clientWidth: width, clientHeight: height } = currentRef;
        // camera.aspect = width / height;
        renderer.setSize(width, height);
        // renderer.setPixelRatio(window.devicePixelRatio);
        renderer.render(scene, camera);
    };

    const animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    return (
        <div className="container3d" ref={mountRef}>
        </div>
    );
};

export default ModelContainer;
