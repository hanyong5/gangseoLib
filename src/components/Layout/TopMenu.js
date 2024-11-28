import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopMenuIcon from "../Icons/TopMenuIcon";
import SmoothLink from "./SmoothLink";

function DepthTopMenu() {
  return (
    <div className="TopMenuWrap">
      <SmoothLink to={"/"}>
        <div className="TopMenuHome">
          <TopMenuIcon iconName="iconHome" />
        </div>
      </SmoothLink>
    </div>
  );
}
function SubTopMenu() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  const handleClose = () => {
    window.close(); // 현재 창 닫기
    alert("test");
  };
  return (
    <div className="TopMenuWrap">
      <SmoothLink to={"/"}>
        <div className="TopMenuHome">
          <TopMenuIcon iconName="iconHome" />
        </div>
      </SmoothLink>
      {/* <Link to="/libabout"> */}
      <div
        className="TopMenu"
        onClick={handleGoBack}
      >
        <TopMenuIcon iconName="iconMenu" />
      </div>
      <div
        className="TopMenu"
        onClick={handleClose}
      >
        <TopMenuIcon iconName="iconMenu" />
      </div>
      {/* </Link> */}
    </div>
  );
}

export { DepthTopMenu, SubTopMenu };
