import React from "react";
import iconBullet01 from "../../assets/images/iconBullet01.svg";
import iconBullet02 from "../../assets/images/iconBullet02.svg";
import iconBullet03 from "../../assets/images/iconBullet03.svg";

const icons = {
    iconBullet01,
    iconBullet02,
    iconBullet03,
};
function Bullet({ iconName, className, ...props }) {
    const iconSrc = icons[iconName];
    if (!iconSrc) {
        console.error(`Icon '${iconName}' not found.`);
        return null;
    }
    return (
        <>
            <img
                src={iconSrc}
                alt={iconName}
                {...props}
                className={`imgIcons ${className}`}
            />
        </>
    );
}

export default Bullet;
