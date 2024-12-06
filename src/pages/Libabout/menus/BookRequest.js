import React from "react";
import "../../../assets/css/sass/bookRequest.scss";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import Title from "../../../components/Layout/Title";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import BookRequestData from "../datas/BookRequest/BookRequestData";
import AudioPlayer from "../../../components/AudioPlayer";
function BookRequest() {
  const title = "희망도서 신청 안내";

  return (
    <SubBackWrap>
      <AudioPlayer src="/audio/04audio_output.mp3" />
      <SubTopMenu />
      <div className="conWrap">
        <Title>{title}</Title>
        <MenusScrollFrame children={<BookRequestData />} />
      </div>
    </SubBackWrap>
  );
}

export default BookRequest;
