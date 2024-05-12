import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css"
import styles from "../style";

const MemeCard = (props) => {
    const navigate = useNavigate();


    return (
        <div className="card flex flex-col items-center">
            <div className="card-top">
                <img src={props.img} alt="" />
            </div>
            <div className="card-bottom mt-4">
                <h2 className={`${styles.paragraph}`}>{props.title}</h2>
                <button className="mt-4 bg-blue-600 text-white hover:bg-blue-800" onClick={(e) => navigate(`/edit?url=${props.img}`)}>Edit</button>
            </div>
        </div>
    )
}

export default MemeCard;