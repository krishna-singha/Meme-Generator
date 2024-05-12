import React, { useState, useEffect } from "react";
import MemeCard from "../Card";
import { memes } from "../../api/memes";
import styles from '../../style'

const Homepage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        memes().then(data => {
            setData(data.data.memes);
        })
    }, []);

    return (
        <>
            <h2 className={`${styles.heading2} mb-4`}>Choose Template</h2>
            <div className="flex flex-wrap justify-center gap-4">
            {
                data.map((meme, index) => {
                    return <MemeCard key={index} img={meme.url} title={meme.name} />
                })
            }
        </div>
        </>
    )
}

export default Homepage;