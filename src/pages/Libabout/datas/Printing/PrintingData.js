import React from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import Table1 from "./table/Table1";
import Table2 from "./table/Table2";
import Table3 from "./table/Table3";

function PrintingData() {
  return (
    <>
      {/* <CntWrap> */}
      {/* Start:큰 단락 복사 사용시 */}
      <div className="cntWrapBox">
        <FirestTitle>자료 복사 안내</FirestTitle>
        <div className="cntTextBox">
          <div>
            <li className="textBoxType1">시설 안내</li>
            <Table1 />
          </div>
          <div>
            <li className="textBoxType2">
              저작권법에 의해 도서관 소장자료 일부에 한해서만 복사 가능합니다.
            </li>
            <li className="textBoxType2">
              복사기는 코인기와 연결되어 동전만 이용 가능합니다.
            </li>
          </div>
        </div>
      </div>
      {/* End:큰 단락 복사 사용시 */}

      {/* Start:큰 단락 복사 사용시 */}
      <div className="cntWrapBox">
        <FirestTitle>프린터 이용 안내</FirestTitle>
        <div className="cntTextBox">
          <div>
            <li className="textBoxType1">이용방법</li>
            <li className="textBoxType3">
              디지털자료실 예약PC에서 좌석 예약 후 이용
              <br /> ( 도서관 회원 아이디로 로그인 후 PC예약 ▷ PC에서 인쇄 실행
              ▷ 코인기에 동전/지폐 투입 ▷ 출력 )
            </li>
          </div>
        </div>
        <div className="cntTextBox">
          <div>
            <div>
              <li className="textBoxType1">시설 안내</li>
              <Table2 />
            </div>
            <li className="textBoxType2">출력은 흑백으로만 가능합니다.</li>
            <li className="textBoxType2">
              프린터는 동전 및 천 원짜리 지폐로 이용 가능합니다.
            </li>
          </div>
        </div>
      </div>
      {/* End:큰 단락 복사 사용시 */}

      {/* Start:큰 단락 복사 사용시 */}
      <div className="cntWrapBox">
        <FirestTitle>스캐너 이용 안내</FirestTitle>
        <div className="cntTextBox">
          <div>
            <li className="textBoxType1">이용방법</li>
            <li className="textBoxType3">디지털자료실 데스크 문의 신청</li>
          </div>
        </div>
        <div className="cntTextBox">
          <div>
            <li className="textBoxType1">시설 안내</li>
            <Table3 />
          </div>
        </div>
      </div>
      {/* End:큰 단락 복사 사용시 */}
      {/* </CntWrap> */}
    </>
  );
}

export default PrintingData;
