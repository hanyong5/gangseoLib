import React from "react";
import seniorRoomImg01 from "../../../../../assets/images/seniorRoomImg01.png";
function Floor0SeniorRoomData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 지하 1층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7012
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={seniorRoomImg01} alt="강의실3 이미지1" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 31석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            인근 지역 어르신들의 여가활동을 위하여 서예, 바둑,
                            장기도구를 비치하여 상시 이용할 수 있게 하고 있으며
                            TV, PC (1대)등을 비치하여 다양한정보를 검색할 수
                            있도록 하여 어르신들의 평생학습활동에 기여하고
                            있습니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor0SeniorRoomData;
