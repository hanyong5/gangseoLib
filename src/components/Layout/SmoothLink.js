import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function SmoothLink({ to, children, ...props }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate(to);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);
    };

    return (
        <Link to={to} {...props} onClick={handleClick}>
            {children}
        </Link>
    );
}

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}
export default SmoothLink;
