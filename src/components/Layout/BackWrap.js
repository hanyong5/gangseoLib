import React from "react";

function MainBackWrap({ children }) {
    return (
        <div className="mainBgWrap">
            <div className="mainWrap">{children}</div>
        </div>
    );
}
function SubBackWrap({ children }) {
    return (
        <div className="subBgWrap">
            <div className="subWrap">{children}</div>
        </div>
    );
}

export { MainBackWrap, SubBackWrap };
