import React from "react";
import restaurantImg01 from "../../../../assets/images/restaurantImg01.png";
import restaurantImg02 from "../../../../assets/images/restaurantImg02.png";
import restaurantImg03 from "../../../../assets/images/restaurantImg03.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";

function RestaurantData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>식당 안내</FirestTitle>
                    <div className="cntTextBox">
                        <div>
                            <li className="textBoxType2">
                                <span>위치(층) :</span> 강서도서관 &#62; 기타
                            </li>
                            <li className="textBoxType2">
                                <span>전화번호 :</span> 02-3219-7012
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">시설 소개</li>
                            <li className="imgBox">
                                <img src={restaurantImg01} alt="식당이미지1" />
                                <img src={restaurantImg02} alt="식당이미지2" />
                                <img src={restaurantImg03} alt="식당이미지3" />
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">이용 안내</li>
                            <li className="textBoxType2">
                                식당은 따로 운영되지 않으며 개인 도시락 취식 및
                                멀티자판기 사용가능합니다.
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default RestaurantData;
