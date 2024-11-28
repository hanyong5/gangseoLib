import React from "react";
import classRoom0Img01 from "../../../../../assets/images/classRoom0Img01.png";
function Floor0ClassRoom3Data() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 지하 1층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7073
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={classRoom0Img01} alt="강의실3 이미지1" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 24석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            지역주민들의 여가선용 및 취미활동에 도움이 되는
                            한문초급, 어린이 미술, 동화구연, 어린이 요리,
                            초등NIE, 영어회화 초급 등의 문화강좌 프로그램을
                            운영하고 있습니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor0ClassRoom3Data;
