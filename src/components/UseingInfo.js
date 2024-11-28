import React, { useState } from "react";
import Modal from "./Layout/Modal";
import "../assets/css/sass/modal.scss";
import { SubBackWrap } from "./Layout/BackWrap";
import { SubTopMenu } from "./Layout/TopMenu";
import SwiperComponent from "./Contents/SwiperComponent";
import RestaurantData from "../pages/Libabout/datas/Cafeteria/RestaurantData";
import StoredData from "../pages/Libabout/datas/Cafeteria/StoreData";

function UseingInfo() {
  const pageData = [
    {
      title: "식당 안내",
      description: "식당에 대한 설명입니다.",
      ContentsData: <RestaurantData />,
    },
    {
      title: "매점 안내",
      description: "매점에 대한 설명입니다.",
      ContentsData: <StoredData />,
    },
  ];
  const tabs = ["식당 안내", "매점 안내"];
  const [modalState, setModalState] = useState(false);

  const modalOpen = () => {
    setModalState(true);
  };
  const modalClose = () => {
    setModalState(false);
  };
  return (
    <SubBackWrap>
      <SubTopMenu />
      <div className="subContentWrap">
        {/* <TabContents></TabContents> */}
        <SwiperComponent
          mainTitle={"대출증·회원증 안내"}
          tabs={tabs}
          data={pageData}
        />
      </div>
    </SubBackWrap>
    // <div className="menusScroll frame background">
    //   <Modal isOpen={modalState} onClose={modalClose} />
    //   <div className="scrollFrame">
    //     <div className="frameInner">
    //       <div className="InnerContent">
    //         <button
    //           onClick={() => {
    //             modalOpen();
    //           }}
    //         >
    //           버튼
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default UseingInfo;
