import React from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";
import ParkingTable from "./table/ParkingTable";

function ParkingDiscountData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>주차요금 할인 안내</FirestTitle>
                    <div className="cntTextBox">
                        <div>
                            <li className="textBoxType1 mb-2">
                                주차요금 감면 대상 및 할인율
                            </li>
                            <li>
                                <ParkingTable />
                            </li>
                            <li className="textBoxType2">
                                <span>
                                    2가지 이상의 감면사유 시 그 중 할인율이 높은
                                    하나만 적용
                                </span>
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default ParkingDiscountData;
