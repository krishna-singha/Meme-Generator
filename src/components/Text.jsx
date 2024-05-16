import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

const Text = ({ color, fontSize }) => {
    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState("Click once to edit text");
    let timer;
    const inputRef = useRef(null);

    const startTimer = () => {
        timer = setTimeout(() => {
            setEditMode(true);
            inputRef.current.focus(); // Focus on input when entering edit mode
        }, 1000);
    };

    const clearTimer = () => {
        clearTimeout(timer);
    };

    const handleClickOutside = (e) => {
        if (editMode && inputRef.current && !inputRef.current.contains(e.target)) {
            setEditMode(false);
        }
    };

    return (
        <Draggable>
            <div className="absolute top-[10rem] right-[4rem]" onClick={handleClickOutside}>
                {editMode ?
                    <input
                        ref={inputRef}
                        className="font-semibold font-poppins text-2xl"
                        style={{ color: color || "black",  fontSize: `${fontSize}px` }}
                        onBlur={() => setEditMode(false)}
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    /> : (
                        <h4
                            className="font-semibold font-poppins text-2xl"
                            style={{ color: color || "black",  fontSize: `${fontSize}px` }}
                            onClick={startTimer} // Changed to onClick to enter edit mode
                        >
                            {text}
                        </h4>
                    )}
            </div>
        </Draggable>
    );
};

export default Text;
