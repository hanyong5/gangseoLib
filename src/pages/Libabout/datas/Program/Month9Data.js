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

function Month9Data({ children }) {
  return (
    <>
      <div className="cntWrapBox">
        <FirestTitle>도서관 일정</FirestTitle>
        <div className="progranWrap">
          <div className="handleMonth">
            <div className="changeMonth">{children?.month}월 행사일정</div>
            <div className="eventInfo">
              <div className="infoInner">
                <div>
                  <img
                    src={rIcon}
                    alt=""
                  />
                </div>
                <div className="infoText">정기휴관일</div>
              </div>
              <div className="infoInner">
                <div>
                  <img
                    src={r2Icon}
                    alt=""
                  />
                </div>
                <div className="infoText">임시휴관일</div>
              </div>
              <div className="infoInner">
                <div>
                  <img
                    src={eIcon}
                    alt=""
                  />
                </div>
                <div className="infoText">이벤트</div>
              </div>
              <div className="infoInner">
                <div>
                  <img
                    src={mIcon}
                    alt=""
                  />
                </div>
                <div className="infoText">영화상영</div>
              </div>
              <div className="infoInner">
                <div>
                  <img
                    src={cIcon}
                    alt=""
                  />
                </div>
                <div className="infoText">강좌</div>
              </div>
            </div>
          </div>
          <table className="programTable">
            <tbody>
              {children?.event.map((item, idx) => {
                return (
                  <tr
                    key={idx}
                    className="line"
                  >
                    <td className="left">
                      <div className="leftWrap">
                        <div
                          className="contentBox date"
                          style={{ color: item.color }}
                        >
                          {item.date}
                        </div>
                      </div>
                    </td>
                    <td className="right">
                      <div className="rightWrap">
                        {item.program?.map((item, idx) => {
                          return (
                            <>
                              <div className="contentBox text">
                                <img
                                  src={
                                    item.icon === "type-r"
                                      ? rIcon
                                      : item.icon === "type-r2"
                                      ? r2Icon
                                      : item.icon === "type-e"
                                      ? eIcon
                                      : item.icon === "type-m"
                                      ? mIcon
                                      : item.icon === "type-c"
                                      ? cIcon
                                      : ""
                                  }
                                  alt=""
                                />
                                <div className="contentInfos">
                                  {item.content}
                                </div>
                              </div>
                            </>
                          );
                        })}
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
