import React, { useEffect, useState } from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";

function Modal({ isOpen, onClose, title, content }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (isOpen) {
            setIsVisible(true);
            setIsAnimating(true);
            document.body.style.overflow = "hidden";
            setTimeout(() => setIsAnimating(false), 300);
        } else {
            setIsAnimating(true);
            setTimeout(() => {
                setIsVisible(false);
                setIsAnimating(false);
            }, 300);
            // document.body.style.overflow = "unset";
        }

        return () => {
            clearTimeout(timeoutId);
            // document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isVisible) return null;
    return (
        <div className={`modal ${isOpen ? "open" : "close"}`}>
            <div className="modalContent">
                <FirestTitle>{title}</FirestTitle>
                <div className="mapPlaceholder">{content}</div>
                <button className="closeButton" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
}

export default Modal;
