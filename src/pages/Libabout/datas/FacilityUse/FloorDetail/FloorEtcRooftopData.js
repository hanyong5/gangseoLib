import React from "react";
import rooftopImg01 from "../../../../../assets/images/rooftopImg01.png";
import rooftopImg02 from "../../../../../assets/images/rooftopImg02.png";
function FloorEtcRooftopData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 옥상
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={rooftopImg01} alt="옥상정원 이미지1" />
                        <img src={rooftopImg02} alt="옥상정원 이미지2" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            옥상 공원은 지역주민과 이용자들의 안락한 휴식을 위해
                            허브정원, 잔디 등 녹지공간과 가든테이블, 의자 등을
                            갖추고 있습니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default FloorEtcRooftopData;
