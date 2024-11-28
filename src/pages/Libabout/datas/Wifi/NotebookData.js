import React from "react";
import androidImg01 from "../../../../assets/images/notebookImg01.png";
import androidImg02 from "../../../../assets/images/notebookImg02.png";
import androidImg03 from "../../../../assets/images/notebookImg03.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";
function NotebookData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>노트북</FirestTitle>
                    <div className="cntTextHalfBox">
                        <div>
                            <li>
                                <img src={androidImg01} alt="노트북이미지1" />
                            </li>
                            <li className="textBoxType">
                                <h4>1. 무선 네트워크 설정</h4>
                                <p>
                                    ① 데스크탑(바탕화면) 시스템 트레이 항목 중
                                    무선네트워크 아이콘 클릭
                                </p>
                                <p>
                                    ② <span>숨겨진 네트워크</span> 클릭
                                </p>
                                <p>
                                    ③<span> 연결</span> 클릭
                                </p>
                            </li>
                        </div>
                    </div>
                    <div className="cntTextHalfBox">
                        <div>
                            <li>
                                <img src={androidImg02} alt="노트북이미지2" />
                            </li>
                            <li className="textBoxType">
                                <h4>2. 네트워크 이름 입력</h4>
                                <p>
                                    ① 네트워크 이름(SSID)입력
                                    <span>Kangseo</span>
                                </p>
                                <p>
                                    ②<span> 다음</span> 클릭
                                </p>
                            </li>
                        </div>
                    </div>
                    <div className="cntTextHalfBox">
                        <div>
                            <li>
                                <img src={androidImg03} alt="노트북이미지3" />
                            </li>
                            <li className="textBoxType">
                                <h4>3. 네트워크 보안키 입력</h4>
                                <p>
                                    ① 네트워크 보안키 입력 <span>Kangseo</span>
                                </p>
                                <p>
                                    ②<span> 다음</span> 클릭
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

export default NotebookData;
