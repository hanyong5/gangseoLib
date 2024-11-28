import React from "react";
function Table2() {
    return (
        <table className="defaultTable">
            <thead>
                <tr>
                    <th width="33.3%">설치위치</th>
                    <th width="33.3%">설치 기기</th>
                    <th width="33.3%">이용 요금</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan="2">복사기 1대</td>
                    <td>프린터 1대</td>
                    <td rowSpan="2">A4용지 : 50원/매</td>
                </tr>
                <tr>
                    <td className="lastTd">원문DB 프린터 1대</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table2;
