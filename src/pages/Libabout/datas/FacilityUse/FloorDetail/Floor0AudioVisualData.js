import React from "react";
import audiovisualImg01 from "../../../../../assets/images/audiovisualImg01.png";
function Floor0AudioVisualData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 지하 1층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7024
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={audiovisualImg01} alt="강의실3 이미지1" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 90석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            대형스크린 및 빔프로젝터를 설치하여 매주 토요일
                            음악감상 및 영화상영을 하고 있으며 묵화, 서예,
                            동양화, 통기타등의 문화강좌프로그램 운영 및 강연회
                            등 각종 문화행사운영 공간으로 활용하고 있습니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor0AudioVisualData;
