import React from "react";
import { useNavigate } from "react-router-dom";

function LibaboutBtn({ item }) {
    const navigate = useNavigate();
    const moveMenu = () => {
        navigate(item.link);
    };
    return (
        <div className="libAboutBtn" onClick={moveMenu}>
            <div className="libAboutTitle">{item.title}</div>
            <div className="libAboutIcon">
                <img src={item.icon} alt="" />
            </div>
        </div>
    );
}

export default LibaboutBtn;
