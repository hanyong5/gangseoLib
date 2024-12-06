import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import PrintingData from "../datas/Printing/PrintingData";
import Title from "../../../components/Layout/Title";
import AudioPlayer from "../../../components/AudioPlayer";

function Printing() {
  return (
    <SubBackWrap>
      <AudioPlayer src="/audio/08audio_output.mp3" />
      <SubTopMenu />
      <div className="conWrap">
        <Title>복사, 인쇄, 출력, 스캔</Title>
        <MenusScrollFrame children={<PrintingData />} />
      </div>
    </SubBackWrap>
  );
}

export default Printing;
