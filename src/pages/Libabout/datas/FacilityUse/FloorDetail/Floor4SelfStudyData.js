import React from "react";
import selfRoomImg01 from "../../../../../assets/images/selfRoomImg01.png";
import selfRoomImg02 from "../../../../../assets/images/selfRoomImg02.png";
import selfRoomImg03 from "../../../../../assets/images/selfRoomImg03.png";
function Floor4SelfStudyData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 4층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7015
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={selfRoomImg01} alt="자율학습실 이미지1" />
                        <img src={selfRoomImg02} alt="자율학습실 이미지2" />
                        <img src={selfRoomImg03} alt="자율학습실 이미지3" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            남·여 합실로 운영하고 있으며, 이용자들의 편의를
                            위하여 좌석발급시스템을 운영하여
                            <br />
                            좌석표를 발급하고 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 216석
                        </li>
                        <li className="textBoxType3">
                            가져오신 개인노트북 및 태블릿PC는 4층
                            노트북전용실에서 사용가능합니다.
                            <br /> (단 스마트폰은 제외)
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>운영시간</span>
                        </li>
                        <li className="textBoxType3">
                            3월~10월(하절기) : 평일 (07:00~22:00) 토/일요일
                            (07:00~22:00)
                        </li>
                        <li className="textBoxType3">
                            11월~2월(동절기) : 평일 (08:00~22:00) 토/일요일
                            (08:00~22:00)
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용규정</span>
                        </li>
                        <li className="textBoxType3">
                            열람좌석 1인 1좌석제를 생활화합시다.
                        </li>
                        <li className="textBoxType3">
                            도서관내에서는 금연구역입니다.
                        </li>
                        <li className="textBoxType3">
                            핸드폰은 진동으로 하시고 음식물 반입이 불가 합니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor4SelfStudyData;
