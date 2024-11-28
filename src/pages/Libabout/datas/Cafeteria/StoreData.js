import React from "react";
import storeImg01 from "../../../../assets/images/storeImg01.png";
import storeImg02 from "../../../../assets/images/storeImg02.png";
import storeImg03 from "../../../../assets/images/storeImg03.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";
function StoredData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>매점 안내</FirestTitle>
                    <div className="cntTextBox">
                        <div>
                            <li className="textBoxType2">
                                <span>무인 매점으로 운영되고 있습니다.</span>
                            </li>
                            <li className="textBoxType2">
                                <span>위치(층) : </span>강서도서관 &#62; 기타
                                (지하1층 식당에 위치)
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">시설 소개</li>
                            <li className="imgBox">
                                <img src={storeImg01} alt="매점 이미지1" />
                                <img src={storeImg02} alt="매점 이미지2" />
                                <img src={storeImg03} alt="매점 이미지3" />
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">이용 안내</li>
                            <li className="textBoxType2">
                                멀티자판기를 통해 셀프라면, 김밥, 소세지, 과자
                                등을 판매하고 있습니다.
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default StoredData;
