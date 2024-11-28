import React from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";

function FacilityUseData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>시설 이용 안내</FirestTitle>
                    <div className="cntTextBox">
                        <div>
                            <li className="textBoxType1 mb-3">이용 시간</li>
                            <table className="defaultTable">
                                <thead>
                                    <tr>
                                        <th width="25%">구분</th>
                                        <th>평일</th>
                                        <th>토,일요일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>인문사회자연과학실</td>
                                        <td>09:00 - 20:00</td>
                                        <td>09:00 - 17:00</td>
                                    </tr>
                                    <tr>
                                        <td>어린이자료실</td>
                                        <td>09:00 - 20:00</td>
                                        <td>09:00 - 17:00</td>
                                    </tr>
                                    <tr>
                                        <td>어문학·간행물실</td>
                                        <td>09:00 - 18:00</td>
                                        <td>09:00 - 17:00</td>
                                    </tr>
                                    <tr>
                                        <td>디지털자료실</td>
                                        <td>09:00 - 18:00</td>
                                        <td>09:00 - 17:00</td>
                                    </tr>
                                    <tr>
                                        <td>디지털자료실</td>
                                        <td>
                                            07:00 - 22:00(하절기 3월 ~ 10월)
                                            <br />
                                            08:00 - 22:00(동절기 11월 ~ 2월)
                                        </td>
                                        <td>
                                            07:00 - 22:00(하절기 3월 ~ 10월)
                                            <br />
                                            08:00 - 22:00(동절기 11월 ~ 2월)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <li className="textBoxType1 mb-3">휴관일</li>
                            <table className="defaultTable">
                                <thead>
                                    <tr>
                                        <th width="33%">정기휴관일</th>
                                        <th width="33%">법정 공휴일</th>
                                        <th width="33%">임시휴관일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>매월 첫째, 셋째 금요일</td>
                                        <td>
                                            일요일을 제외한 법정 공휴일
                                            <br />
                                            (일요일과 겹칠 경우 휴관)
                                        </td>
                                        <td>
                                            도서정리, 보수공사, 장서점검 등의
                                            <br />
                                            사유로 휴관이 필요하다고 관장이
                                            <br />
                                            지정하는 날
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default FacilityUseData;
