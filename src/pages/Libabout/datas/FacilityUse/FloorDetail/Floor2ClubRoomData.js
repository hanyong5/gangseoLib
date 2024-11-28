import React from "react";
import clubRoomImg01 from "../../../../../assets/images/clubRoomImg01.png";
function Floor2ClubRoomData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 2층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7031
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img src={clubRoomImg01} alt="동아리실 이미지1" />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 12석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용시간</span>
                        </li>
                        <li className="textBoxType3">
                            평일(월~금) : 09:00~20:00, 주말(토.일) : 09:00~17:00
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            학습동아리 프로그램 및 다양한 학부모, 인문학
                            프로그램 등이 운영되며, 뎃생, 유화·수채화, 한문중급
                            등의 문화강좌 프로그램을 운영하고 있습니니다.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor2ClubRoomData;
