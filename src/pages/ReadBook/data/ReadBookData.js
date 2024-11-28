import React from "react";
import "../../../assets/css/sass/readbook.scss";
import readbookimg1 from "../../../assets/images/readbookimg1.svg";
import soundIcon from "../../../assets/icons/readbookIcon.svg";
import SmoothLink from "../../../components/Layout/SmoothLink";

function ReadBookData({ ebooks }) {
  return (
    <>
      {ebooks.map((item, idx) => {
        return (
          <div key={idx} className="readBookContainer">
            <div className="readBookInner">
              <div className="innerImg">
                <img src={item.image} alt="" />
              </div>
              <div className="innerContent">
                <div className="contentText">
                  <div>제목 : {item.title}</div>
                  <div>저자 : {item.author}</div>
                  <div>발행처 : {item.publisher}</div>
                  <div>발행 연도 : {item.publicationDate}</div>
                  <div>ISNB : {item.ISNB}</div>
                  <div>자료형태 : {item.format}</div>
                </div>
                <div className="contentBtn">
                  <img src={soundIcon} alt="" />
                  <SmoothLink
                    to={`/readbook/ebook/${encodeURIComponent(item.title)}`}
                  >
                    <div className="btnText">도서 읽어주기</div>
                  </SmoothLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ReadBookData;
