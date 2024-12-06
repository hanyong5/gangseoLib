import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import DeliveryLoanData from "../datas/DeliveryLoan/DeliveryLoanData";
import Title from "../../../components/Layout/Title";
import AudioPlayer from "../../../components/AudioPlayer";

function DeliveryLoan() {
  const title = "택배대출 안내";

  return (
    <SubBackWrap>
      <AudioPlayer src="/audio/05audio_output.mp3" />
      <SubTopMenu />
      <div className="conWrap">
        <Title>{title}</Title>
        <MenusScrollFrame children={<DeliveryLoanData />} />
      </div>
    </SubBackWrap>
  );
}

export default DeliveryLoan;
