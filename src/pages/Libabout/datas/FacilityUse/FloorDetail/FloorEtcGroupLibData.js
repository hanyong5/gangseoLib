import React from "react";
import groupLibImg01 from "../../../../../assets/images/groupLibImg01.png";
import groupLibImg02 from "../../../../../assets/images/groupLibImg02.png";
function FloorEtcGroupLibData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 기타
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7033
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={groupLibImg01} alt="단체문고 이미지1" />
                        <img src={groupLibImg02} alt="단체문고 이미지2" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            도서관을 방문하기 어려운 지역주민들의 편리한
                            독서생활에 기여하고자 장애인 시설, 국군부대, 기타
                            사회복지시설 등에 정기적으로 도서를 대출해주는
                            단체문고를 운영하고 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>운영기간 : </span> 연중상시운영
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>운영대상 : </span> 강서인근지역의 장애인 시설,
                            국군부대, 사회복지시설 등.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>대출기간 : </span> 1회 1~2개월
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>대출권수 : </span> 200권 이내
                        </li>
                    </div>
                    <div className="textPoint">
                        대출희망기관 및 단체는 인문사회자연과학실(☎3219-7031)로
                        문의하시기 바랍니다.
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default FloorEtcGroupLibData;
