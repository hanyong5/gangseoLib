import React from "react";
import bulletLib from "../../../../assets/images/bulletLib.png";
import iconLibropia from "../../../../assets/images/iconLibropia.png";
import imgLibropia from "../../../../assets/images/imgLibropia.png";
import imgLibropiaQR from "../../../../assets/images/imgLibropiaQR.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";

function MembershipData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <div className="infoTextBox">
                        <div>
                            회원증은 휴대용 디바이스(모바일/테블릿PC)에서
                            [리브로피아] 앱을 설치 후 회원가입 후 이용 가능하며
                            정회원만 확인 가능합니다!
                        </div>
                    </div>
                    <FirestTitle>회원증 안내</FirestTitle>
                    <div className="cntTextBox">
                        <div className="textHalfBox">
                            <div>
                                <li className="textBoxType1">
                                    리브로피아(모바일 앱) 설치
                                </li>
                                <li className="textBoxType2">
                                    <span>앱설치 :</span> 앱스토어 또는
                                    플레이구글에서 ‘리브로피아’ 앱 설치
                                </li>
                                <li className="textBoxType2">
                                    <span>리브로피아 회원가입 :</span> 이메일,
                                    리브로피아 비밀번호, 닉네임 입력
                                </li>
                                <li className="textBoxType2">
                                    <span>로그인 :</span> 이메일, 리브로피아
                                    비밀번호 입력
                                </li>
                            </div>
                            <div>
                                <img src={iconLibropia} />
                            </div>
                            <div>
                                <img src={imgLibropiaQR} />
                            </div>
                        </div>
                        <div className="textHalfBox">
                            <div>
                                <li className="textBoxType1">
                                    도서관 회원 인증
                                </li>
                                <li className="textBoxType2">
                                    <img src={bulletLib} />
                                     버튼을 누르면 나의 도서관 확인 및 추가가
                                    가능합니다.
                                </li>
                                <li className="textBoxType2">
                                    <span>도서관 추가 :</span> +버튼 &rarr;
                                    도서관 검색 및 추가.
                                </li>
                                <li className="textBoxType2 mb-6">
                                    <span>도서관 회원인증 : </span> 도서관 선택
                                    → ‘도서관회원증’선택 <br />
                                    &rarr; 해당도서관ID &rarr; 비밀번호 인증
                                </li>
                                <li className="textBoxType1">
                                    리브로피아 주요기능
                                </li>
                                <li className="textBoxType2">
                                    모바일 회원증 및 QR코드 인증
                                </li>
                                <li className="textBoxType2">
                                    소장자료 검색 및 예약
                                </li>
                                <li className="textBoxType2">
                                    대출현황 조회 및 반납 연기
                                </li>
                                <li className="textBoxType2">
                                    희망도서 신청 등
                                </li>
                            </div>
                            <div>
                                <img src={imgLibropia} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default MembershipData;
