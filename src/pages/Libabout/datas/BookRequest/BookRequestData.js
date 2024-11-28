import React from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";

function BookRequestData() {
    return (
        <>
            {/* <CntWrap> */}
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntWrapBox">
                <FirestTitle>희망도서 신청 안내</FirestTitle>
                <div className="cntTextBox">
                    <div>
                        <li className="textBoxType2">
                            <span>신청방법 :</span> 희망하시는 도서가 소장된
                            자료인지 확인하시고 없을 경우 홈페이지내 희망도서
                            신청화면에서 도서정보 및 신상정보를 정확히 기재하고
                            신청해주시기 바랍니다.
                        </li>
                        <li className="textBoxType2">
                            <span>처리주기 :</span> 매주 화요일에 도서 주문
                            (신청기간이 지난주 월요일 ~ 이번주 일요일인 도서)
                        </li>
                        <li className="textBoxType2">
                            <span>신청권수 :</span> 1회 1인 1권 가능, 초과
                            신청분은 취소 처리
                        </li>
                        <li className="textBoxType2">
                            <span>신청결과 안내 :</span> 홈페이지
                            '마이라이브러리 - 희망도서신청내역확인및취소' 에서
                            처리결과 확인
                        </li>
                        <li className="textBoxType2">희망도서비치알림</li>
                        <li className="textBoxType2">
                            홈페이지 '자료검색 - 신착도서목록'에 비치목록 게재
                        </li>
                        <li className="textBoxType2">
                            회원정보에서 SMS수신여부동의에 체크한 경우,
                            알림톡(카카오톡메시지) 또는 SMS 전송(알림톡
                            수신거부시)
                        </li>
                        <li className="textBoxType2">
                            도서 비치일로부터 3일간
                            <div>
                                <li>
                                    ※ 희망도서 비치시 예약도서가 3권인 이용자는
                                    예약초과가 되어 희망도서 우선대출 예약이
                                    안될 수 있습니다.
                                </li>
                                <li>
                                    ※ 희망도서 3회 우선 미대출시 1회 신청 불가
                                </li>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}

            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntWrapBox">
                <FirestTitle>희망도서 선정 제외 기준</FirestTitle>
                <div className="cntTextBox">
                    <div>
                        <li className="textBoxType2">
                            기소장도서, 중복신청도서, 구입 및 정리중인 도서,
                            유사자료가 많이 소장되어 있는 자료
                        </li>
                        <li className="textBoxType2">
                            서지사항이 불분명한 도서 (서명, 저자명, 출판사명 등)
                        </li>
                        <li className="textBoxType2">신판이 출판된 구판도서</li>
                        <li className="textBoxType2">
                            당해 연도를 기준으로 출판된 지 5년 이상 경과한 도서
                            등 최신성이 떨어지는 도서(2020년 이후 출간자료만
                            가능)
                            <div>
                                <li>
                                    ※ 컴퓨터, IT, 과학 분야, 여행 등 최신성을
                                    요하는 분야는 출판된 지 2년 이상 경과한
                                    도서(2023년 이후 출간자료만 가능)
                                </li>
                            </div>
                        </li>
                        <li className="textBoxType2">
                            수험서, 참고서, 문제집, 워크북 등 개인 학습용 도서,
                            일회성 도서(스티커북, 컬러링북, 드로잉북, 라이팅북,
                            다이어리북, 필사본, 놀이북 등), POD도서
                        </li>
                        <li className="textBoxType2">
                            무협지, 선정적인 도서, 판타지소설, 인터넷소설,
                            로맨스소설, 만화류의 자료 (웹툰, 그래픽노블,
                            교양·학습만화 등)
                        </li>
                        <li className="textBoxType2">
                            3권을 초과하는 시리즈 및 전집류, 50면 미만의 소책자
                        </li>
                        <li className="textBoxType2">
                            품절, 절판, 출간예정 도서 등 희망도서 선정시점에
                            구입이 불가한 도서 및 계약된 지역서점을 통해
                            유통되지 않는 도서(독립출판, 희귀도서, 특수 전문도서
                            등)
                            <div>
                                <li>
                                    ※ 대형서점 온라인 홈페이지(알라딘,
                                    교보문고)에서 예약판매, 출고예정 등의 상태인
                                    도서
                                </li>
                            </div>
                        </li>
                        <li className="textBoxType2">
                            고가의 도서 (50,000원 초과)
                        </li>
                        <li className="textBoxType2">
                            영리 또는 정치 목적의 신청도서
                        </li>
                        <li className="textBoxType2">출판사 관련자 신청도서</li>
                        <li className="textBoxType2">
                            독자층이 한정된 전문도서, 대학교재, 논문, 원서, 그
                            외 이용도가 낮다고 판단되는 도서 등
                        </li>
                        <li className="textBoxType2">
                            경전(성경, 불경 등), 개인적 성향이 강한 종교 관련
                            도서(신앙생활, 설교, 간증, 영성, 전도, 목회,
                            신학이론 등)
                        </li>
                        <li className="textBoxType2">
                            연감, 백서, 통계, 편람, 사진집, 악보집, 화집,
                            화보집, 도록, 아트북, 대본집, 소형문고판, 포켓북,
                            팝업북, 헝겊책, 사운드북, 스프링제본, e-book(전자책)
                            및 참고도서류
                        </li>
                        <li className="textBoxType2">
                            외국자료, 큰글자도서, 비도서 등 신청에서 입수까지
                            많은 시간을 요하는 도서 및 연속간행물
                        </li>
                        <li className="textBoxType2">
                            서울특별시교육청 산하 타도서관 및 평생학습관에
                            중복으로 신청한 도서
                        </li>
                        <li className="textBoxType2">
                            기타 자료선정위원회에서 적합하지 않다고 판단된 자료
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}

            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntWrapBox">
                <FirestTitle>희망도서 선정 제외 기준</FirestTitle>
                <div className="cntTextBox">
                    <div>
                        <li className="textBoxType2">
                            희망도서 신청내역에서 신청하신 도서의 진행상태를
                            확인하실 수 있으며 각 진행상태는 아래와 같습니다.
                        </li>
                        <li className="textBoxType2">
                            <span>신청중 :</span> 담당자 검토중
                        </li>
                        <li className="textBoxType2">
                            <span>처리중 :</span> 선정되어 주문 중이거나
                            입수되어 정리중
                        </li>
                        <li className="textBoxType2">
                            <span>취소됨 :</span> 선정 제외됨. 취소사유 확인가능
                        </li>
                        <li className="textBoxType2">
                            <span>소장중 :</span> 입수되어 비치됨
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
            {/* </CntWrap> */}
        </>
    );
}

export default BookRequestData;
