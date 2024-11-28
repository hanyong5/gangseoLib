import React from "react";

function Table1() {
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
                    <td>인문사회자연과학실 (2층)</td>
                    <td rowSpan="2">복사기 1대</td>
                    <td rowSpan="2">
                        A4용지 : 30원/매(흑백)
                        <br />
                        B4용지 : 50원/매(흑백)
                    </td>
                </tr>
                <tr>
                    <td className="lastTd">어문학 간행물실 (3층)</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table1;
