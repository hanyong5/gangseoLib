import React from "react";

import iconHome from "../../assets/images/iconHome.svg";
import iconMenu from "../../assets/images/iconMenu.svg";

const icons = {
    iconHome,
    iconMenu,
};
function TopMenuIcon({ iconName, className, ...props }) {
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

export default TopMenuIcon;
