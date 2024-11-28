import React from "react";
import iphoneImg01 from "../../../../assets/images/iphoneImg01.png";
import iphoneImg02 from "../../../../assets/images/iphoneImg02.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";
function IphoneData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>아이폰</FirestTitle>
                    <div className="cntTextHalfBox">
                        <div>
                            <li>
                                <img src={iphoneImg01} alt="아이폰이미지1" />
                            </li>
                            <li className="textBoxType">
                                <h4>1. 네트워크 추가</h4>
                                <p>① 와이파이 설정화면으로 진입</p>
                                <p>
                                    ② <span>기타...</span> 선택
                                </p>
                            </li>

                        </div>
                        <div>
                            <li>
                                <img src={iphoneImg02} alt="아이폰이미지2" />
                            </li>
                            <li className="textBoxType">
                                <h4>2.프로파일 정보 입력</h4>
                                <p>
                                    네트워크 SSID <span>kangseo</span>
                                </p>
                                <p>
                                    보안 <span>WPA/WPA2 SPK</span>
                                </p>
                                <p>
                                    비밀번호 <span>gangseolib</span>
                                </p>
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default IphoneData;
