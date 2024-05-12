import React, { useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Text from "../Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import Draggable from "react-draggable";

const EditPage = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const [textColor, setTextColor] = useState("black");
    const [zoomFactor, setZoomFactor] = useState(1); // Default zoom factor
    const [textSize, setTextSize] = useState(16); // Default text size
    const memeRef = useRef();

    const navigateTo = (path) => {
        navigate(path);
    };

    const addText = () => {
        setCount(count + 1);
    };

    const increaseZoom = () => {
        setZoomFactor(zoomFactor + 0.1); // Increase zoom factor by 0.1
    };

    const decreaseZoom = () => {
        if (zoomFactor > 0.1) {
            setZoomFactor(zoomFactor - 0.1); // Decrease zoom factor by 0.1, minimum zoom factor 0.1
        }
    };

    const increaseTextSize = () => {
        setTextSize(textSize + 1); // Increase text size by 1
    };

    const decreaseTextSize = () => {
        if (textSize > 1) {
            setTextSize(textSize - 1); // Decrease text size by 1, minimum text size 1
        }
    };

    return (
        <div>
            <div className="relative">
                <div ref={memeRef} className="h-[40rem] w-[40rem] p-2 bg-white overflow-hidden">
                    <Draggable>
                        <div className="w-full h-full">
                            <img src={params.get("url")} alt="meme" style={{ transform: `scale(${zoomFactor})` }} className="h-full" />
                        </div>
                    </Draggable>
                    {Array(count)
                        .fill(0)
                        .map((_, index) => (
                            <Text key={index} color={textColor} fontSize={textSize} />
                        ))}
                </div>
            </div>
            <div className="buttons flex gap-6 items-center mt-6 mb-4">
                <button className="bg-blue-600 text-white hover:bg-blue-800" onClick={addText}>
                    Add Text
                </button>
                <div className="flex items-center gap-2 h-fit py-2 px-4 rounded-md">
                    <span>Text Color:</span>
                    <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                </div>
                <div className="flex gap-2 items-center">
                    <span>Image Size:</span>
                    <button className="text-white bg-green-500 hover:bg-green-700" onClick={increaseZoom}>
                        +
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-700" onClick={decreaseZoom}>
                        -
                    </button>
                </div>
                <div className="flex gap-2 items-center">
                    <span>Text Size:</span>
                    <button className="text-white bg-green-500 hover:bg-green-700" onClick={increaseTextSize}>
                        +
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-700" onClick={decreaseTextSize}>
                        -
                    </button>
                </div>

            </div>
            <div className="flex gap-4">
                <button className="text-white bg-green-500 hover:bg-green-700" onClick={() => exportComponentAsJPEG(memeRef)}>
                    Download
                </button>
                <button className="bg-black text-white hover:bg-slate-700" onClick={() => navigateTo("/")}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default EditPage;
