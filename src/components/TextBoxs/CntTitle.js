import React from "react";
import iconPoint from "../../assets/images/iconPoint.svg";
function FirestTitle({ children }) {
    return (
        <div className="firestTitle">
            <img src={iconPoint} />
            {children}
        </div>
    );
}

export default FirestTitle;
