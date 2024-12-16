import React, { useState } from "react";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import Title from "../../../components/Layout/Title";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import Month9Data from "../datas/Program/Month9Data";
import AudioPlayer from "../../../components/AudioPlayer";
import dayEvent from "../../../assets/data/eventDay.json";

function Program() {
  return (
    <SubBackWrap>
      <AudioPlayer src="/audio/10audio_output.mp3" />
      <SubTopMenu />
      <div className="conWrap">
        <Title>프로그램 안내</Title>
        <MenusScrollFrame children={<Month9Data children={dayEvent} />} />
      </div>
    </SubBackWrap>
  );
}

export default Program;
