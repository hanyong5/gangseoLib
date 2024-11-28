import React from "react";
import lockerImg1 from "../../../../assets/images/locker1.svg";
import lockerImg2 from "../../../../assets/images/locker2.svg";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";

function LockerData() {
    return (
        <>
            {/* <CntWrap> */}
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntWrapBox">
                <FirestTitle>유료 사물함</FirestTitle>
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
                            <img src={lockerImg1} alt="사물함이미지1" />
                            <img src={lockerImg2} alt="사물함이미지2" />
                        </li>
                    </div>
                    <div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>안내 :</span> 일반열람실 장기이용자들의
                                편의를 위해 유료사물함을 설치 운영하므로 많은
                                이용바랍니다.
                            </li>
                        </div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>설치위치</span>
                            </li>
                            <li className="textBoxType3">
                                2-3층 사이(계단)-60칸(141~200번)
                            </li>
                            <li className="textBoxType3">
                                3-4층 사이(계단)-60칸(81~140번)
                            </li>
                            <li className="textBoxType3">
                                4-5층 사이(계단)-80칸(1~80번)
                            </li>
                        </div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>사물함 설치칸수 :</span> 총 200칸
                            </li>
                        </div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>사용대상자 :</span> 도서관이용자
                            </li>
                        </div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>사용기간 :</span> 사용기간 : 1개월(매월
                                1일~30(31)일)
                            </li>
                        </div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>사용요금 :</span> 월 9,000원(※처음 사용시
                                보증금 10,000원 납부)
                            </li>
                        </div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>이용방법 :</span>
                            </li>
                            <li className="textBoxType3">
                                관리자(010-6306-3885)에게 전화 또는 문자
                            </li>
                        </div>
                        <div className="inner">
                            <li className="textBoxType2">
                                <span>보관금지 물품 :</span>
                            </li>
                            <li className="textBoxType3">인화성 물질</li>
                            <li className="textBoxType3">
                                부패하기 쉽고 악취 나는 물품
                            </li>
                            <li className="textBoxType3">
                                현금, 귀금속 등 중요 물품{" "}
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
            {/* </CntWrap> */}
        </>
    );
}

export default LockerData;
