import React from "react";
import benchImg01 from "../../../../../assets/images/benchImg01.png";
import benchImg02 from "../../../../../assets/images/benchImg02.png";
import benchImg03 from "../../../../../assets/images/benchImg03.png";
function FloorEtcBenchData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 야외
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={benchImg01} alt="등나무 벤치 이미지1" />
                        <img src={benchImg02} alt="등나무 벤치 이미지2" />
                        <img src={benchImg03} alt="등나무 벤치 이미지3" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            야외 등나무벤치는 자연과 함께 휴식을 취할수 있으며,
                            독서를 하거나 대화를 나눌 수 있는 휴식공간입니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default FloorEtcBenchData;
