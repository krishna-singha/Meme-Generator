import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = ({ color, fontSize }) => {
    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState("Double click to edit text");

    return (
        <Draggable>
            <div className="absolute top-[10rem] right-[4rem]">
                {editMode ?
                    <input
                        className="font-semibold font-poppins text-2xl"
                        style={{ color: color || "black",  fontSize: `${fontSize}px` }}
                        onDoubleClick={() => setEditMode(false)}
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    /> : (
                        <h4
                            className="font-semibold font-poppins text-2xl"
                            style={{ color: color || "black",  fontSize: `${fontSize}px` }}
                            onDoubleClick={() => setEditMode(true)}
                        >
                            {text}
                        </h4>
                    )}
            </div>
        </Draggable>
    );
};

export default Text;
