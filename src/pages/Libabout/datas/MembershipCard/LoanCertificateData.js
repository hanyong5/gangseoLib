import React from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";

function LoanCertificateData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <div className="infoTextBox">
                        <div>
                            우리도서관에서 발급한 대출회원증으로
                            서울특별시립도서관 및 평생학습관에서도 사용이
                            가능하며
                            <br /> 대출회원은 서울특별시 교육청 직속 평생학습관
                            및 도서관에서의 회원 개인정보 및 통합 대출 <br />
                            회원증을 공동으로 사용함에 동의함으로 서울특별시
                            교육청 통합 대출회원 규정의 적용을 받게 <br />
                            됩니다.
                        </div>
                    </div>
                    <FirestTitle>대출증 안내</FirestTitle>
                    <div className="cntTextBox">
                        <div>
                            <li className="textBoxType1">가입자격</li>
                            <li className="textBoxType2">
                                서울시 주민등록 등재자
                            </li>
                            <li className="textBoxType2">
                                타지역 주민으로 서울시 소재 직장인 및 학생
                            </li>
                            <li className="textBoxType2">
                                재외동포 국내거소 신고자 및 외국인
                                등록자(서울특별시에 거주하거나 서울소재의 직장·
                                학교에 다니고 있는 자)
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">준비물</li>
                            <li className="textBoxType2">
                                <span>어린이 :</span> 주민등록등본 (대리 신청시
                                법정대리인의 주민등록증 같이 제시)
                            </li>
                            <li className="textBoxType2">
                                <span>중·고등학생 / 일반인 :</span> 현주소가
                                기재된 신분증 (주민등록증, 운전면허증,
                                주민등록등본 제시)
                            </li>
                            <li className="textBoxType2">
                                <span>
                                    서울시에 있는 직장을 다니는 타시도 거주자 :
                                </span>
                                 현주소가 기재된 신분증, 재직증명서
                            </li>
                            <li className="textBoxType2">
                                <span>
                                    서울시에 있는 대학을 다니는 타시도 거주자 :
                                </span>
                                 현주소가 기재된 신분증, 재학증명서
                            </li>
                            <li className="textBoxType2">
                                <span>재외동포·외국인등록자:</span>
                                 체류지가 서울로 등재된 외국국적동포
                                국내거소신고증·외국인등록증
                                <br />
                                (타 시도 거주 대상자는 재학·재직증명서 추가
                                지참)
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">가입 절차</li>
                            <li className="textBoxType2">
                                회원가입 전용 PC(자료실 비치) or
                                홈페이지(온라인대출회원신청)에서 본인의 개인정보
                                입력 후(준회원) &rarr; <br />
                                자료실 직원에게 준비물(회원가입시 필요한
                                서류)제시 &rarr; 대출회원증이 발급(정회원)되며
                                서류)제시 &rarr; 대출회원증이 발급(정회원)되며
                                대출가능 <br />※ 홈페이지 회원 가입 후 방문이
                                어려운 경우 비대면자격확인인증을 통해
                                대출회원(정회원) 전환 가능
                            </li>
                            <li className="textBoxType2">
                                <span>대출회원증 재발급(분실 및 훼손) :</span>
                                 신분증 확인 후 재발급(회원증 재발급 수수료(RF형
                                카드) : 성인 2,000원 / <br />
                                중고생 1,500원 / 초등학생 이하1,000원)
                            </li>
                            <li className="textBoxType2">
                                대출회원증을 분실 또는 훼손하여 재발급을
                                신청하는 경우 "서울특별시립도서관 및 평생학습관
                                사용료징수 조례"에서 규정하는 재발급 수수료를
                                이용자가 부담
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">발급장소</li>
                            <li className="textBoxType2">
                                <span>일반성인, 중·고등학생 : </span>
                                인문사회자연과학실(2층), 어문학·간행물실(3층)
                            </li>
                            <li className="textBoxType2">
                                <span>어린이 : </span>어린이자료실(1층)
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">문의</li>
                            <li className="textBoxType2">
                                <span>인문사회자연과학실</span> ☎️3219-7031
                            </li>
                            <li className="textBoxType2">
                                <span>어문학·간행물</span> ☎️3219-7041
                            </li>
                            <li className="textBoxType2">
                                <span>어린이자료실</span> ☎️3219-7051
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">회원 종류</li>
                            <li className="textBoxType2">
                                준회원자료실에 비치된 회원가입 전용 PC or
                                홈페이지상 온라인대출회원신청 이용자이용서비스 :
                                홈페이지, 디지털자료실 좌석예약시스템,
                                자율학습실, 노트북전용실 이용 및 각종 참여 신청
                                등 가능
                            </li>
                            <li className="textBoxType2">
                                정회원관외대출회원이용서비스 : 준회원이용서비스
                                뿐만 아니라 도서대출, 상호대차신청, 도서예약,
                                희망도서신청, 전자책, 웹 콘텐츠 등 멀티미디어
                                자료 이용가능
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">회원 유의사항</li>
                            <li className="textBoxType2">
                                회원증은 타인에게 대여하거나 양도할 수 없으며
                                대출한 자료는 본인이 책임을 집니다.
                            </li>
                            <li className="textBoxType2">
                                회원은 연락처의 변경, 이사 등으로 개인정보
                                변동이 있을 경우에는 반드시 도서관에 연락하여 그
                                내용을
                                <br /> 수정 요구해야 반납독촉, 희망도서,
                                예약도서 도착알림 등의 문자 및 이메일 서비스를
                                정상적으로 받으실 수<br /> 있습니다.
                            </li>
                            <li className="textBoxType2">
                                <span>대출증 분실 :</span> 도서관 방문이나
                                전화로 분실신고를 하셔야 합니다.
                                <br />
                                (신고하지 않은 대출증 분실에 따른 모든 책임은
                                회원 본인에게 있습니다.)
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default LoanCertificateData;
