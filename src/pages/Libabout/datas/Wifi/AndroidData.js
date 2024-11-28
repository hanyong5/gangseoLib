import React from "react";
import androidImg01 from "../../../../assets/images/androidImg01.png";
import androidImg02 from "../../../../assets/images/androidImg02.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";
function AndroidData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>안드로이드</FirestTitle>
                    <div className="cntTextHalfBox">
                        <div>
                            <li>
                                <img
                                    src={androidImg01}
                                    alt="안드로이드이미지1"
                                />
                            </li>
                            <li className="textBoxType">
                                <h4>1. 네트워크 추가</h4>
                                <p>① 와이파이 설정화면으로 진입</p>
                                <p>
                                    ② <span>wifi 네트워크 추가</span> 선택
                                </p>
                            </li>
                        </div>
                        <div>
                            <li>
                                <img
                                    src={androidImg02}
                                    alt="안드로이드이미지2"
                                />
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
                    <div className="cntTextBox">
                        <div>
                            <li className="textBoxType3">
                                기종 및 OS version별 설정의 차이가 있을 수 있음.
                                ‘wifi’ 체크 항목이 있는 단말기는 항목 체크 필요.
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default AndroidData;
