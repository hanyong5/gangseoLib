import React, { useEffect } from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";

function DonationData() {
  return (
    <>
      {/* <CntWrap> */}
      {/* Start:큰 단락 복사 사용시 */}
      <div className="cntWrapBox">
        <FirestTitle>도서 및 비도서 기증 안내</FirestTitle>
        <div className="cntTextBox">
          <div>
            <li>
              강서도서관에서는 장서구성에 활용할 목적으로 도서 및 비도서를
              기증받고 있습니다.
              <br />
              기증하시기 전, 사전에 전화(☎02-3219-7025)로 협의 바랍니다.
              <br />
              자료의 효용성 및 이용가치를 고려하여 다음의 자료는 원칙적으로
              기증받지 않고 있으니 양해 바랍니다.
            </li>
          </div>
          <div>
            <li className="textBoxType1">기증받지 않는 자료</li>
            <div className="inner">
              <li className="textBoxType2">
                출판된 지 5년 이내의 자료 (희귀본 또는 이용률이 높은 자료 등은
                예외로 함)
              </li>
              <li className="textBoxType2">
                ※ 일반 교양도서, 아동도서의 경우 출판된 지 5년이 경과한 자료는
                기증받기 어려운 점 양해 바랍니다※
              </li>
              <li className="textBoxType2">도서관 소장자료</li>
              <li className="textBoxType2">
                50페이지 미만의 소책자, 팸플릿 등
              </li>
              <li className="textBoxType2">
                학술적 성격의 보고서, 논문집 일체
              </li>
              <li className="textBoxType2">
                기업, 학교 등 기관이나 단체 등의 연사(年史), 사사(社史)류
              </li>
              <li className="textBoxType2">
                서울을 벗어난 지역의 지방지나 통계연보 등
              </li>
              <li className="textBoxType2">족보자료</li>
              <li className="textBoxType2">훼손 및 파손의 정도가 심한 자료</li>
              <li className="textBoxType2">
                판의 변화, 제도 및 법규의 개정, 기술 개발, 새로운 사실의 발견,
                기타 환경 변화로 이용가치를 상실한 자료
              </li>
              <li className="textBoxType2">
                공공도서관 성격에 맞지 않거나, 이용이 거의 되지 않는 자료
              </li>
              <li className="textBoxType2">
                기타 자료선정위원회에서 적합하지 않다고 판단되는 자료
              </li>
            </div>
            <div>
              <li>
                기증받은 자료는 연 1~4회 자료선정위원회 심의를 거쳐 선정,
                등록되며 등록에서 제외된 자료는 필요한 곳에 재기증하거나 책라움
                행사(1층 공유서가) 등에 활용됩니다.
                <br />
                불가피하게 폐기될 수도 있으며 이러한 처리 절차에 동의해주신 분에
                한해서 자료를 기증받고 있습니다.
                <br />
                보다 자세한 문의는 ☎02-3219-7025로 전화주시면 친절하게
                답변드리도록 하겠습니다.
                <br />
                도서관 운영에 관심가져주셔서 감사합니다.
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* End:큰 단락 복사 사용시 */}
      {/* </CntWrap> */}
    </>
  );
}

export default DonationData;
