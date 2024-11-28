import React from "react";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import Title from "../../../components/Layout/Title";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import DonationData from "../datas/Donation/DonationData";
function Donation() {
    const title = "자료기증 관련 안내";
    return (
        <SubBackWrap>
            <SubTopMenu />
            <Title>{title}</Title>
            <MenusScrollFrame children={<DonationData />} title={title} />
        </SubBackWrap>
    );
}

export default Donation;
