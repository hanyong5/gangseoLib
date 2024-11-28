import React, { useEffect, useState } from "react";
import "../../../../assets/css/sass/programDate.scss";
import cIcon from "../../../../assets/icons/cIcon.svg";
import eIcon from "../../../../assets/icons/eIcon.svg";
import mIcon from "../../../../assets/icons/mIcon.svg";
import leftoff from "../../../../assets/icons/monLoff.svg";
import lefton from "../../../../assets/icons/monLon.svg";
import rightoff from "../../../../assets/icons/monRoff.svg";
import righton from "../../../../assets/icons/monRon.svg";
import r2Icon from "../../../../assets/icons/r2Icon.svg";
import rIcon from "../../../../assets/icons/rIcon.svg";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";

function Month9Data({ children, months, handleMonth }) {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // 초기값은 9월(0번째 인덱스)

    useEffect(() => {
        handleMonth(currentMonthIndex);
    }, [currentMonthIndex]);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    // 이전 달로 이동하는 함수
    const prevMonth = () => {
        if (currentMonthIndex > 0) {
            setCurrentMonthIndex(currentMonthIndex - 1);
        }
    };

    // 다음 달로 이동하는 함수
    const nextMonth = () => {
        if (currentMonthIndex < months.length - 1) {
            setCurrentMonthIndex(currentMonthIndex + 1);
        }
    };

    return (
        <>
            <div className="cntWrapBox">
                <FirestTitle>도서관 일정</FirestTitle>
                <div className="progranWrap">
                    <div className="handleMonth">
                        <div className="changeMonth">
                            <div onClick={prevMonth}>
                                <img
                                    src={
                                        currentMonthIndex === 0
                                            ? leftoff
                                            : lefton
                                    }
                                    alt=""
                                />
                            </div>
                            <div>
                                {currentYear}년 {months[currentMonthIndex]}
                            </div>
                            <div onClick={nextMonth}>
                                <img
                                    src={
                                        currentMonthIndex === months.length - 1
                                            ? rightoff
                                            : righton
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="eventInfo">
                            <div className="infoInner">
                                <div>
                                    <img src={rIcon} alt="" />
                                </div>
                                <div className="infoText">정기휴관일</div>
                            </div>
                            <div className="infoInner">
                                <div>
                                    <img src={r2Icon} alt="" />
                                </div>
                                <div className="infoText">임시휴관일</div>
                            </div>
                            <div className="infoInner">
                                <div>
                                    <img src={eIcon} alt="" />
                                </div>
                                <div className="infoText">이벤트</div>
                            </div>
                            <div className="infoInner">
                                <div>
                                    <img src={mIcon} alt="" />
                                </div>
                                <div className="infoText">영화상영</div>
                            </div>
                            <div className="infoInner">
                                <div>
                                    <img src={cIcon} alt="" />
                                </div>
                                <div className="infoText">강좌</div>
                            </div>
                        </div>
                    </div>
                    <table className="programTable">
                        <tbody>
                            {children?.map((item, idx) => {
                                return (
                                    <tr key={idx} className="line">
                                        <td className="left">
                                            <div className="leftWrap">
                                                <div className="contentBox date">
                                                    {item.date}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="right">
                                            <div className="rightWrap">
                                                {item.program?.map(
                                                    (item, idx) => {
                                                        return (
                                                            <>
                                                                <div className="contentBox text">
                                                                    <img
                                                                        src={
                                                                            item.icon ===
                                                                            1
                                                                                ? rIcon
                                                                                : item.icon ===
                                                                                  2
                                                                                ? r2Icon
                                                                                : item.icon ===
                                                                                  3
                                                                                ? eIcon
                                                                                : item.icon ===
                                                                                  4
                                                                                ? mIcon
                                                                                : item.icon ===
                                                                                  5
                                                                                ? cIcon
                                                                                : ""
                                                                        }
                                                                        alt=""
                                                                    />
                                                                    <div className="contentInfos">
                                                                        {
                                                                            item.content
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Month9Data;
