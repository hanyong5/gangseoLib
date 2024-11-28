import React from "react";
import imgWaiting from "../../assets/images/imgWaiting.png";
import { SubBackWrap } from "../../components/Layout/BackWrap";
import { SubTopMenu } from "../../components/Layout/TopMenu";

function Waiting() {
    return (
        <SubBackWrap>
            <SubTopMenu />
            <div className="imgCenter">
                <img src={imgWaiting} />
            </div>
        </SubBackWrap>
    );
}

export default Waiting;
