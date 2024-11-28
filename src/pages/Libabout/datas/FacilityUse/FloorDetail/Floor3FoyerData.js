import React from "react";
import foyerImg01 from "../../../../../assets/images/foyerImg01.png";
import foyerImg02 from "../../../../../assets/images/foyerImg02.png";
function Floor3FoyerData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 3층
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={foyerImg01} alt="휴게실 이미지" />
                        <img src={foyerImg02} alt="휴게실 이미지" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내 </span>
                        </li>
                        <li className="textBoxType3">
                            3층에는 편안하게 휴대전화를 하고 휴식을 취할수 있는
                            휴식공간이 마련되어 있습니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor3FoyerData;
