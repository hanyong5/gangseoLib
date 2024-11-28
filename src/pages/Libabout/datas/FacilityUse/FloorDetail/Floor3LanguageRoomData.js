import React from "react";
import languageImg01 from "../../../../../assets/images/languageImg01.png";
import languageImg02 from "../../../../../assets/images/languageImg02.png";
import languageImg03 from "../../../../../assets/images/languageImg03.png";
function Floor3LanguageRoomData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 3층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7041
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img
                            src={languageImg01}
                            alt="어문학 간행물실 이미지1"
                        />
                        <img
                            src={languageImg02}
                            alt="어문학 간행물실 이미지2"
                        />
                        <img
                            src={languageImg03}
                            alt="어문학 간행물실 이미지3"
                        />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>소장자료 </span>
                        </li>
                        <li className="textBoxType3">
                            어학·문학류의 도서와 국내외 잡지 및 각종신문(중앙,
                            지방, 대학, 지역신문 등), 관보, 사보, 팸플릿 등의
                            간행물이 비치되어있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 43석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용시간</span>
                        </li>
                        <li className="textBoxType3">
                            평일(월~금) : 09:00~18:00, 주말(토.일) : 09:00~17:00
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            자료실 내에 신간도서코너가 비치되어있으며, 과월호
                            잡지(2개월 이전)를 대출해주고 있습니다.
                        </li>
                        <li className="textBoxType3">
                            소장자료검색을 위하여 검색PC(2대)가 비치되어있으며,
                            필요한 자료는 복사할 수 있습니다.
                        </li>
                        <li className="textBoxType3">
                            핸드폰은 진동으로 하시고 음식물 반입이 불가 합니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>대출안내</span>
                        </li>
                        <li className="textBoxType3">
                            관외대출회원 가입즉시 1인 10권이내(2주간)도서를
                            대출할 수 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>자료복사</span>
                        </li>
                        <li className="textBoxType3">
                            복사요금은 A4 1매당 30원 / B4 1매당 50원 이며,
                            흑백복사만 가능합니다.
                        </li>
                        <li className="textBoxType3">
                            복사기는 코인기와 연결되어 동전만 사용가능합니다.
                        </li>
                        <li className="textBoxType3">
                            복사는 도서관소장자료에 한하여 가능하며, 저작권에
                            의하여 부분복사만 가능합니다.
                        </li>
                        <li className="textBoxType3">개인자료 복사 불허</li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor3LanguageRoomData;
