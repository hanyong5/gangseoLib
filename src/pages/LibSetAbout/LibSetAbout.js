import React from "react";
import SwiperComponent from "../../components/Contents/SwiperComponent";
import { SubBackWrap } from "../../components/Layout/BackWrap";
import { DepthTopMenu } from "../../components/Layout/TopMenu";
import Nomal from "./datas/Nomal";
import Notebook from "./datas/Notebook";

function libsetabout() {
    const pageData = [
        {
            title: "노트북 좌석 안내",
            description: "노트북 좌석에 대한 설명입니다.",
            ContentsData: <Notebook />,
        },
        {
            title: "일반 좌석 안내",
            description: "일반 좌석에 대한 설명입니다.",
            ContentsData: <Nomal />,
        },
    ];
    const tabs = ["노트북 좌석", "일반 좌석"];
    return (
        <SubBackWrap>
            <DepthTopMenu />
            <div className="subContentWrap">
                {/* <TabContents></TabContents> */}
                <SwiperComponent
                    mainTitle={"도서관 좌석 안내"}
                    tabs={tabs}
                    data={pageData}
                />
            </div>
        </SubBackWrap>
    );
}

export default libsetabout;
