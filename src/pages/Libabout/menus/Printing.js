import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import PrintingData from "../datas/Printing/PrintingData";
import Title from "../../../components/Layout/Title";

function Printing() {
  return (
    <SubBackWrap>
      <SubTopMenu />
      <Title>복사, 인쇄, 출력, 스캔</Title>
      <MenusScrollFrame children={<PrintingData />} />
    </SubBackWrap>
  );
}

export default Printing;
