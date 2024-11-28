import React from "react";
import "../../../../assets/css/sass/DeliveryLoanData.scss";
import iconInfo from "../../../../assets/icons/iconInfo.svg";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";

function DeliveryLoanData() {
    return (
        <>
            {/* <CntWrap> */}
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntWrapBox">
                <div className="iconInfoWrap">
                    <div className="iconInfoContainer">
                        <img src={iconInfo} alt="" />
                        <div>
                            도서관 직접 방문에 따른 시간적·공간적 제약을
                            해소하고자 택배대출 서비스를 실시합니다.
                            <br />
                            자세한 이용사항은 홈 &#62; 자료신청.예약 &#62;
                            택배대출 &#62; 서비스안내를 참고하시기 바랍니다.
                        </div>
                    </div>
                </div>
                <FirestTitle>
                    장애인 무료택배대출 서비스 「책나래」 (무료)
                </FirestTitle>
                <div className="cntTextBox">
                    <div>
                        <li className="textBoxType2">
                            도서관에 직접 방문하기 어려운 장애인을 위하여 무료
                            택배대출 서비스를 운영하고 있습니다
                        </li>
                        <li className="textBoxType2">
                            <span>신청자격 :</span> 보건복지부 등록 장애인,
                            국가보훈처 등록 국가유공 상이자, 국민건강보험공단
                            인정 장기요양 대상자인 대출회원
                        </li>
                        <li className="textBoxType2">
                            <span>이용방법 :</span> 도서관 회원가입 – 책나래
                            홈페이지 회원가입 – 소속도서관 승인 - 이용
                        </li>
                        <li className="textBoxType2">
                            <span>대출(반납) :</span>
                             책나래홈페이지(https://cn.nld.go.kr/)에서 신청
                        </li>
                        <li className="textBoxType2">
                            <span>대출권수 :</span> 1인 도서 10권, 비도서 5점
                        </li>
                        <li className="textBoxType2">
                            <span>대출기간 :</span> 30일
                        </li>
                        <li className="textBoxType2">
                            <span>배송기간 :</span> 서비스 신청 후 2~3일 소요
                        </li>
                        <li className="textBoxType2">
                            <span>택배비용 :</span> 무료
                        </li>
                        <li className="textBoxType2">
                            <span>장애인택배문의처 :</span> 인문사회자연과학실
                            ☎3219-7033
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}

            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntWrapBox">
                <FirestTitle>일반인 택배대출 (유료)</FirestTitle>
                <div className="cntTextBox">
                    <div>
                        <li className="textBoxType2">
                            <span>신청자격 :</span> 관외대출회원
                        </li>
                        <li className="textBoxType2">
                            <span>대출자료수 :</span> 1인 도서 10권, 비도서 5점
                        </li>
                        <li className="textBoxType2">
                            <span>대출기간 :</span> 14일(1회 7일 연장 가능)
                        </li>
                        <li className="textBoxType2">
                            <span>신청방법 :</span> 도서관 홈페이지 로그인
                            → 강서도서관 소장자료 검색 → "대출 가능여부" 확인 →
                            서명 클릭 → "택배대출 신청" 버튼 클릭 → 택배비용
                            안내문 "확인" 버튼 클릭 → 배송지 확인 후 "신청" 버튼
                            클릭
                        </li>
                        <li className="textBoxType2">
                            <span>대출비용 :</span> 이용자 부담 (1인 대출권수
                            범위 내 착불 4,500원). 단 육로 이외 지역 추가 운임
                            발생
                        </li>
                        <li className="textBoxType2">
                            <span>반납방법 :</span> 자료실 방문 또는 택배 반납
                            <div>
                                <li className="textBoxType3">
                                    택배로 반납할 경우 택배비 선불 지급 (※선택한
                                    택배업체별로 요금이 다를 수 있습니다.)
                                </li>
                                <li className="textBoxType3">
                                    택배 도착일로 반납처리 되므로 택배접수-배송
                                    소요기간을 고려하여 '반납예정일'보다 먼저
                                    '반납신청'을 해야 함.
                                </li>
                            </div>
                        </li>
                        <li className="textBoxType2">
                            <span>반납주소 :</span> 우)07669 서울시 강서구
                            등촌로 51나길 29 인문사회자연과학실
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}

            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntWrapBox">
                <FirestTitle>도서관 상호대차(책바다) (유료)</FirestTitle>
                <div className="cntTextBox">
                    <div>
                        <li className="textBoxType2">
                            <span>대상지역 :</span> 전국
                        </li>
                        <li className="textBoxType2">
                            <span>대출기간 :</span> 14일(1회 7일 연장 가능)
                        </li>
                        <li className="textBoxType2">
                            <span>대출권수 :</span> 3권
                        </li>
                        <li className="textBoxType2">
                            <span>대출도서 :</span> 일반도서(단, 귀중자료,
                            참고자료(서지류, 사전류, 도감류 등), 기타 대출제한이
                            필요하다고 인정되는 자료,도서검색 시 소장된 자료실이
                            '순회문고'로 구분된 자료 등은 제외)
                        </li>
                        <li className="textBoxType2">왕복 택배비 결제하기</li>
                        <li className="textBoxType2">
                            <span>공공도서관 및 대학도서관 자료 :</span> 5,540원
                            중 1,700원 결제(서울시 지원금 3,840원)
                        </li>
                        <li className="textBoxType2">
                            <span>신청소요기간 :</span> 3~5일 (변동가능)
                        </li>
                        <li className="textBoxType2">
                            <span>이용방법 :</span> 강서도서관 회원으로
                            국가표준상호대차서비스 홈페이지에 회원가입 신청 후
                            이용
                        </li>
                        <li className="textBoxType2">
                            <span>책바다 상호대차서비스 이용안내</span>
                            <br />
                             https://books.nl.go.kr(국립중앙도서관
                            상호대차서비스) : 회원승인요청 &rarr; 상호대차신청
                            &rarr; 요금결제 &rarr; 대출·반납
                        </li>
                        <li className="textBoxType2">
                            <span>※ 상호대차(책바다) 문의처 :</span> ※
                            상호대차(책바다) 문의처 : 어문학·간행물실
                            ☎3219-7040~2
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
            {/* </CntWrap> */}
        </>
    );
}

export default DeliveryLoanData;
