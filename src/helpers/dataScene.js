import insideOne from "../assets/images/PanoramaInterior.png";
import insideTwo from "../assets/images/PanoramaInterior2.png";
const Scene = {
    insideOne: {
        title: "house",
        image: insideOne,
        pitch: -11,
        yaw: -3,
        hotSports: {
            flowerVase: {
                type: 'custom',
                pitch: -17.7,
                yaw: -3.6,
                nameModel:"flowerVase",
                cssClass: "hotSpotElement"
            },
            plane: {
                type: "custom",
                pitch: -20.7,
                yaw: -80,
                nameModel:"",
                cssClass: "hotSpotElement"
            },
            chair:{
                type: "custom",
                pitch: -28,
                yaw: -64,
                nameModel:"",
                cssClass: "hotSpotElement"
            },
            nextScene:{
                type: "custom",
                pitch: -2.6,
                yaw: 122.9,
                nameModel:"",
                cssClass: "moveScene",
                scene:"insideTwo"

            }
        }
    },
    insideTwo: {
        title: "House 2",
        image: insideTwo,
        pitch: -11,
        yaw: -3,
        hotSports: {
            flowerVase: {
                type: 'custom',
                pitch: -17.7,
                yaw: -3.6,
                cssClass: "hotSpotElement"
            },
            plane: {
                type: "custom",
                pitch: -20.7,
                yaw: -80,
                cssClass: "hotSpotElement"
            },
            chair:{
                type: "custom",
                pitch: -28,
                yaw: -64,
                cssClass: "hotSpotElement"
            }
        }
    }
};

export default Scene;