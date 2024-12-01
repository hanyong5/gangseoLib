import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import LockerData from "../datas/Locker/LockerData";
import Title from "../../../components/Layout/Title";

function Locker() {
  const title = "사물함 안내";

  return (
      <SubBackWrap>
          <SubTopMenu/>
          <div className="conWrap">
              <Title>{title}</Title>
              <MenusScrollFrame children={<LockerData/>}/>
          </div>
      </SubBackWrap>
);
}

export default Locker;
