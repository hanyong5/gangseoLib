import React from "react";
import learningImg01 from "../../../../../assets/images/learningImg01.png";
function Floor4LearningRoomData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 4층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7071
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={learningImg01} alt="늘배움실 이미지" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내 </span>
                        </li>
                        <li className="textBoxType3">
                            한글을 배울 수 있는 기회를 놓친 어르신 · 다문화인을
                            위해 초등 학력인정(초등 5~6학년 수준) <br />
                            프로그램인 늘배움 학교 운영
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 32석
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor4LearningRoomData;
