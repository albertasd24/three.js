import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Model = () => {
    const ModelFlowerVase = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/cube/cube.gltf', (model) => {
            console.log('Modelo cargado');
            console.log(model);
            scene.add(model.scene);
            console.log(scene);
        }, (progreess) => {
            progreess.stopPropagation();
        }, (err) => {
            console.log('Error al cargar el modelo');
        });
    }
    return { ModelFlowerVase };
}
export default Model