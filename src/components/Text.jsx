import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = ({ color, fontSize }) => {
    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState("Tap and hold to edit text");
    let timer;

    const startTimer = () => {
        timer = setTimeout(() => {
            setEditMode(true);
        }, 1000);
    };

    const clearTimer = () => {
        clearTimeout(timer);
    };

    return (
        <Draggable>
            <div className="absolute top-[10rem] right-[4rem]">
                {editMode ?
                    <input
                        className="font-semibold font-poppins text-2xl"
                        style={{ color: color || "black",  fontSize: `${fontSize}px` }}
                        onBlur={() => setEditMode(false)} // Exit edit mode on blur
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    /> : (
                        <h4
                            className="font-semibold font-poppins text-2xl"
                            style={{ color: color || "black",  fontSize: `${fontSize}px` }}
                            onTouchStart={startTimer}
                            onTouchEnd={clearTimer}
                            onMouseDown={startTimer}
                            onMouseUp={clearTimer}
                            onMouseLeave={clearTimer}
                        >
                            {text}
                        </h4>
                    )}
            </div>
        </Draggable>
    );
};

export default Text;
