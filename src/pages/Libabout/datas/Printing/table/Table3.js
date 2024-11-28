import React from "react";
function Table3() {
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
                    <td>디지털자료실 (3층)</td>
                    <td>스캐너 1대</td>
                    <td className="right">무료</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table3;
