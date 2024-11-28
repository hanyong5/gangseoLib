import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import DeliveryLoanData from "../datas/DeliveryLoan/DeliveryLoanData";
import Title from "../../../components/Layout/Title";

function DeliveryLoan() {
  const title = "택배대출 안내";

  return (
    <SubBackWrap>
      <SubTopMenu />
      <Title>{title}</Title>
      <MenusScrollFrame children={<DeliveryLoanData />} />
    </SubBackWrap>
  );
}

export default DeliveryLoan;
