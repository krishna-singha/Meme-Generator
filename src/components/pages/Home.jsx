import React, { useState, useEffect } from "react";
import MemeCard from "../Card";
import { memes } from "../../api/memes";

const Homepage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        memes().then(data => {
            setData(data.data.memes);
        })
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {
                data.map((meme, index) => {
                    return <MemeCard key={index} img={meme.url} title={meme.name} />
                })
            }
        </div>
    )
}

export default Homepage;