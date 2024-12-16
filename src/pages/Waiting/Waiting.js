import React from "react";
import { SubBackWrap } from "../../components/Layout/BackWrap";
import { SubTopMenu } from "../../components/Layout/TopMenu";

function Waiting() {
  return (
    <SubBackWrap>
      <SubTopMenu />
      <div className="imgCenter">
        <div className="viewBox ">
          <div className="text">서비스준비중입니다.</div>
          <h1>Main Page</h1>
        </div>
      </div>
    </SubBackWrap>
  );
}

export default Waiting;
