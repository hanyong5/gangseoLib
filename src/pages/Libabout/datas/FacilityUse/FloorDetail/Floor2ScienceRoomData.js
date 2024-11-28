import React from "react";
import scienceRoomImg01 from "../../../../../assets/images/scienceRoomImg01.png";
import scienceRoomImg02 from "../../../../../assets/images/scienceRoomImg02.png";
import scienceRoomImg03 from "../../../../../assets/images/scienceRoomImg03.png";
function Floor2ScienceRoomData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 2층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7031
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img
                            src={scienceRoomImg01}
                            alt="인문사회자연과학실 이미지1"
                        />
                        <img
                            src={scienceRoomImg02}
                            alt="인문사회자연과학실 이미지2"
                        />
                        <img
                            src={scienceRoomImg03}
                            alt="인문사회자연과학실 이미지3"
                        />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>소장자료</span>
                        </li>
                        <li className="textBoxType3">
                            어학·문학류를 제외한 총류, 철학, 종교, 사회과학,
                            순수과학, 기술과학, 예술, 역사분야에 관한 일반도서
                            및 참고도서(사전, 연감, 법령집 등)가
                            비치되어있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 36석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용시간</span>
                        </li>
                        <li className="textBoxType3">
                            평일(월~금) : 09:00~20:00, 주말(토.일) : 09:00~17:00
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            자료실 내에 신간도서코너가 비치되어있으며, 노인 및
                            저시력자를 위하여 자동독서 확대기가
                            비치되어있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>대출안내</span>
                        </li>
                        <li className="textBoxType3">
                            관외대출회원 가입즉시 1인 10권이내(2주간)도서를
                            대출할 수 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>자료복사</span>
                        </li>
                        <li className="textBoxType3">
                            복사요금은 A4 1매당 30원 / B4 1매당 50원 이며,
                            흑백복사만 가능합니다.
                        </li>
                        <li className="textBoxType3">
                            복사는 도서관소장자료에 한하여 가능하며, 저작권에
                            의하여 부분복사만 가능합니다.
                        </li>
                        <li className="textBoxType3">복개인자료 복사 불허</li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor2ScienceRoomData;
