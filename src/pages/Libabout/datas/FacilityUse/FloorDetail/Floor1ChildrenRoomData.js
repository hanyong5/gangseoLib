import React from "react";
import childrenRoomImg01 from "../../../../../assets/images/childrenRoomImg01.png";
import childrenRoomImg02 from "../../../../../assets/images/childrenRoomImg02.png";
import childrenRoomImg03 from "../../../../../assets/images/childrenRoomImg03.png";
function Floor1ChildrenRoomData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 1층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7051
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img
                            src={childrenRoomImg01}
                            alt="어린이 자료실 이미지1"
                        />
                        <img
                            src={childrenRoomImg02}
                            alt="어린이 자료실 이미지2"
                        />
                        <img
                            src={childrenRoomImg03}
                            alt="어린이 자료실 이미지3"
                        />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>소장자료 </span>
                        </li>
                        <li className="textBoxType3">
                            유아 및 초등학생을 위한 자료실로 유아 그림책과
                            어린이 도서, 사전 등이 비치되어 있으며, 어린이
                            잡지와 신문 등도 이용할 수 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 70석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용시간</span>
                        </li>
                        <li className="textBoxType3">
                            평일(월~금) : 09:00~18:00, 주말(토.일) : 09:00~17:00
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            자료실 내에 신간도서코너가 비치되어있으며,
                            유아실(이야기방)에서 책읽어주는 프로그램을 운영하고
                            있습니다.
                        </li>
                        <li className="textBoxType3">
                            소장자료검색을 위하여 검색PC(2대)가
                            비치되어있습니다.
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
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor1ChildrenRoomData;
