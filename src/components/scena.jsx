import { Pannellum } from "pannellum-react";
// import Image from '../assets/images/PanoramaInterior.png'
import { useState } from "react";
import dataScene from "../helpers/dataScene.js";
import useModal from "../hooks/useModal.jsx";
import Modal from "./modal.jsx";
import ModelContainer from "./modelContainer.jsx";
const Scene = () => {

    const [isOpen, openModal, closeModal] = useModal();
    const [scene, setscene] = useState(dataScene['insideOne']);
    const [model, setModel] = useState(null)

    const hotSpots = (element, i) => {

        if (element.cssClass === "hotSpotElement") return (
            <Pannellum.Hotspot type={element.type} pitch={element.pitch} yaw={element.yaw} cssClass={element.cssClass} key={i} handleClick={() => {
                openModal();
                setModel(element.nameModel);
            }} />
        )
        if (element.cssClass === "moveScene") return (
            <Pannellum.Hotspot type={element.type} pitch={element.pitch} yaw={element.yaw} cssClass={element.cssClass} key={i} handleClick={() => {
                let btnCambiarScena = confirm("¿Seguro que quieres cambiar de escena?");
                if (btnCambiarScena) {
                    setscene(dataScene[element.scene]);
                }
            }} />
        )
    }

    return (
        <>
            <Pannellum title={scene.title} width='100%' height='100vh' hotspotDebug={true} image={scene.image} pitch={scene.pitch} yaw={scene.yaw} hfov={110} showZoomCtrl={false} showFullscreenCtrl={false} autoLoad onLoad={() => {
                console.log("panorama loaded");
            }}  >
                {Object.values(scene.hotSports).map((element, i) => hotSpots(element, i))}
            </Pannellum>
            <Modal isOpen={isOpen} closeModal={closeModal} >
                {isOpen ? <ModelContainer nameModel={model} /> : <Modal isOpen={isOpen}/>}
            </Modal>
        </>
    );
};


export default Scene;