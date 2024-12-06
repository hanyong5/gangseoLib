import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import LockerData from "../datas/Locker/LockerData";
import Title from "../../../components/Layout/Title";
import AudioPlayer from "../../../components/AudioPlayer";

function Locker() {
  const title = "사물함 안내";

  return (
    <SubBackWrap>
      <AudioPlayer src="/audio/06audio_output.mp3" />
      <SubTopMenu />
      <div className="conWrap">
        <Title>{title}</Title>
        <MenusScrollFrame children={<LockerData />} />
      </div>
    </SubBackWrap>
  );
}

export default Locker;
