import React from "react";
import MainIcons from "../components/Icons/MainIcons";
import { MainBackWrap } from "../components/Layout/BackWrap";
import SmoothLink from "../components/Layout/SmoothLink";

function MainPage() {
    return (
        <>
            <MainBackWrap>
                <h1>Main Page</h1>
                <div className="mainMenuWrap">
                    <div className="mainMenubox">
                        <SmoothLink to="/chatbot">
                            <div className="innerPoint">
                                <div>
                                    <MainIcons iconName="mainMike" />
                                    <p>
                                        챗봇 에이미와
                                        <br />
                                        대화해보세요!
                                    </p>
                                </div>
                                <MainIcons iconName="iconAime" />
                            </div>
                        </SmoothLink>
                        <div className="menuShadow"></div>
                        <div className="menuLight"></div>
                    </div>
                    <div className="mainMenuRow">
                        <div className="mainMenubox">
                            <SmoothLink to="/libabout">
                                <div className="innerType2">
                                    <MainIcons iconName="mainIconLib" />
                                    <p>
                                        도서관
                                        <br /> 안내
                                    </p>
                                </div>
                            </SmoothLink>
                            <div className="menuShadow"></div>
                            <div className="menuLight"></div>
                        </div>
                        <div className="mainMenubox">
                            <SmoothLink to="/libsetabout">
                                <div className="innerType2">
                                    <MainIcons iconName="mainIconSeat" />
                                    <p>
                                        도서관
                                        <br /> 좌석안내
                                    </p>
                                </div>
                            </SmoothLink>
                            <div className="menuShadow"></div>
                            <div className="menuLight"></div>
                        </div>
                    </div>
                    <div className="mainMenuRow">
                        <div className="mainMenubox">
                            <SmoothLink to="/eventpage">
                                <div className="innerType2">
                                    <MainIcons iconName="mainIconEvent" />
                                    <p>
                                        이벤트
                                        <br /> 안내
                                    </p>
                                </div>
                            </SmoothLink>
                            <div className="menuShadow"></div>
                            <div className="menuLight"></div>
                        </div>
                        <div className="mainMenubox">
                            <SmoothLink to="/waiting">
                                <div className="innerType2">
                                    <MainIcons iconName="mainIconRead" />
                                    <p>
                                        도서관
                                        <br /> 읽어주기
                                    </p>
                                </div>
                            </SmoothLink>
                            <div className="menuShadow"></div>
                            <div className="menuLight"></div>
                        </div>
                    </div>
                    {/* 한개짜리 */}
                    {/* <div className="mainMenubox">
                        <SmoothLink to="/readbook">
                            <div className="inner">
                                <MainIcons iconName="mainIconRead" />
                                <p>
                                    도서
                                    <br />
                                    읽어주기
                                </p>
                            </div>
                        </SmoothLink>
                        <div className="menuShadow"></div>
                        <div className="menuLight"></div>
                    </div> */}
                    {/* 한개짜리 */}
                </div>
            </MainBackWrap>
        </>
    );
}

export default MainPage;
