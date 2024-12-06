import React, { useEffect } from "react";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import Title from "../../../components/Layout/Title";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import DonationData from "../datas/Donation/DonationData";
function Donation() {
  const title = "자료기증 관련 안내";

  useEffect(() => {
    const audio = new Audio("/audio/02audio_output.mp3"); // MP3 파일 경로 지정
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });

    return () => {
      audio.pause(); // 오디오 정지
      audio.currentTime = 0; // 재생 위치 초기화
    };
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행
  return (
    <SubBackWrap>
      <SubTopMenu />
      <div className="conWrap">
        <Title>{title}</Title>
        <MenusScrollFrame
          children={<DonationData />}
          title={title}
        />
      </div>
    </SubBackWrap>
  );
}

export default Donation;
