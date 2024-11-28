import React, { useEffect, useState } from "react";
import imgFloor1 from "../../../../assets/images/imgFloor1.png";
import imgFloor2 from "../../../../assets/images/imgFloor2.png";
import imgFloor3 from "../../../../assets/images/imgFloor3.png";
import imgFloor4 from "../../../../assets/images/imgFloor4.png";
import imgFloor5 from "../../../../assets/images/imgFloor5.png";
import imgFloor6 from "../../../../assets/images/imgFloor6.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";
import Floor0AudioVisualData from "./FloorDetail/Floor0AudioVisualData";
import Floor0ClassRoom3Data from "./FloorDetail/Floor0ClassRoom3Data";
import Floor0SeniorRoomData from "./FloorDetail/Floor0SeniorRoomData";
import Floor1ChildrenRoomData from "./FloorDetail/Floor1ChildrenRoomData";
import Floor1ClassRoom1Data from "./FloorDetail/Floor1ClassRoom1Data";
import Floor2ClassRoom2Data from "./FloorDetail/Floor2ClassRoom2Data";
import Floor2ClubRoomData from "./FloorDetail/Floor2ClubRoomData";
import Floor2ScienceRoomData from "./FloorDetail/Floor2ScienceRoomData";
import Floor3DigitalRoomData from "./FloorDetail/Floor3DigitalRoomData";
import Floor3FoyerData from "./FloorDetail/Floor3FoyerData";
import Floor3LanguageRoomData from "./FloorDetail/Floor3LanguageRoomData";
import Floor4LearningRoomData from "./FloorDetail/Floor4LearningRoomData";
import Floor4NotebookRoomData from "./FloorDetail/Floor4NotebookRoomData";
import Floor4SelfStudyData from "./FloorDetail/Floor4SelfStudyData";
import FloorEtcBenchData from "./FloorDetail/FloorEtcBenchData";
import FloorEtcGroupLibData from "./FloorDetail/FloorEtcGroupLibData";
import FloorEtcRooftopData from "./FloorDetail/FloorEtcRooftopData";
const floorData = {
    1: {
        name: "4층",
        imageUrl: imgFloor1,
        areas: [
            {
                id: 1,
                name: "자율학습실",
                coords: "70,56,308,57,308,301,584,299,586,346,616,347,586,381,615,415,585,413,584,689,68,690",
                shape: "poly",
                detail: () => <Floor4SelfStudyData />,
            },
            {
                id: 2,
                name: "노트북전용실",
                coords: "945,57,1217,58,1215,691,1017,691,1015,433,909,434,908,412,876,410,905,378,879,342,909,342,910,59,919,58,915,37,946,58",
                shape: "poly",
                detail: () => <Floor4NotebookRoomData />,
            },
            {
                id: 3,
                name: "늘배움실",
                coords: "800,434,827,435,827,462,854,433,1018,434,1018,690,800,690",
                shape: "poly",
                detail: () => <Floor4LearningRoomData />,
            },
        ],
    },
    2: {
        name: "3층",
        imageUrl: imgFloor2,
        areas: [
            {
                id: 1,
                name: "디지털자료실",
                coords: "908,58,918,58,918,41,948,61,1216,56,1215,690,909,691,908,410,876,410,906,375,878,341,910,341",
                shape: "poly",
                detail: () => <Floor3DigitalRoomData />,
            },
            {
                id: 2,
                name: "어문학·간행물실",
                coords: "69,58,246,58,246,301,465,301,512,264,510,299,584,301,585,344,618,347,587,381,616,416,586,413,586,689,69,690",
                shape: "poly",
                detail: () => <Floor3LanguageRoomData />,
            },
            {
                id: 3,
                name: "휴게실",
                coords: "761,434,787,435,787,459,817,435,839,436,838,688,761,689",
                shape: "poly",
                detail: () => <Floor3FoyerData />,
            },
        ],
    },
    3: {
        name: "2층",
        imageUrl: imgFloor3,
        areas: [
            {
                id: 1,
                name: "인문사회자연과학실",
                coords: "68,58,248,57,249,301,470,300,513,264,513,299,597,304,598,344,628,344,598,379,628,414,599,414,598,692,71,689",
                shape: "poly",
                detail: () => <Floor2ScienceRoomData />,
            },
            {
                id: 2,
                name: "강의실2",
                coords: "926,438,924,415,890,414,920,378,890,346,924,345,925,187,1215,188,1216,436",
                shape: "poly",
                detail: () => <Floor2ClassRoom2Data />,
            },
            {
                id: 3,
                name: "동아리방",
                coords: "923,55,948,55,947,40,979,60,1216,59,1215,186,925,187",
                shape: "poly",
                detail: () => <Floor2ClubRoomData />,
            },
            {
                id: 4,
                name: "늘배움실",
                coords: "648,57,778,56,780,301,733,300,732,263,691,303,648,298",
                shape: "poly",
                detail: () => <Floor4LearningRoomData />,
            },
        ],
    },
    4: {
        name: "1층",
        imageUrl: imgFloor4,
        areas: [
            {
                id: 1,
                name: "어린이자료실",
                coords: "70,59,416,59,417,141,578,143,580,327,471,329,470,348,432,351,470,388,431,431,469,430,471,676,71,675",
                shape: "poly",
                detail: () => <Floor1ChildrenRoomData />,
            },
            {
                id: 2,
                name: "강의실1",
                coords: "961,59,1215,60,1213,329,1047,332,1046,300,1019,331,989,299,990,329,961,333",
                shape: "poly",
                detail: () => <Floor1ClassRoom1Data />,
            },
        ],
    },
    5: {
        name: "지하1층",
        imageUrl: imgFloor5,
        areas: [
            {
                id: 1,
                name: "시청각실",
                coords: "816,59,1215,58,1215,503,817,504,817,417,845,415,820,388,845,358,816,356,816,117,844,83,818,83",
                shape: "poly",
                detail: () => <Floor0AudioVisualData />,
            },
            {
                id: 2,
                name: "경로실",
                coords: "816,505,1216,505,1217,676,818,677,817,627,848,629,816,599,847,565,817,565",
                shape: "poly",
                detail: () => <Floor0SeniorRoomData />,
            },
            {
                id: 3,
                name: "강의실3",
                coords: "418,59,708,60,709,83,681,81,707,109,682,138,710,137,708,201,506,202,504,221,484,202,464,220,463,201,414,203",
                shape: "poly",
                detail: () => <Floor0ClassRoom3Data />,
            },
        ],
    },
    6: {
        name: "기타",
        imageUrl: imgFloor6,
        areas: [
            {
                id: 1,
                name: "단체문고(책마을)",
                coords: "36,51,405,539",
                shape: "rect",
                detail: () => <FloorEtcGroupLibData />,
            },
            {
                id: 2,
                name: "등나무벤치(정원)",
                coords: "452,50,821,538",
                shape: "rect",
                detail: () => <FloorEtcBenchData />,
            },
            {
                id: 2,
                name: "옥상공원(휴게실)",
                coords: "872,49,1241,537",
                shape: "rect",
                detail: () => <FloorEtcRooftopData />,
            },
        ],
    },
};
const FloorMap = ({ floorInfo, onAreaClick }) => (
    <div className="floorMap">
        <img src={floorInfo.imageUrl} useMap="#floorMap" alt={floorInfo.name} />
        <map name="floorMap">
            {floorInfo.areas.map((area) => (
                <area
                    key={area.id}
                    shape={area.shape}
                    coords={area.coords}
                    alt={area.name}
                    title={area.name}
                    onClick={() => onAreaClick(area)}
                    style={{ cursor: "pointer" }}
                />
            ))}
        </map>
    </div>
);
function FloorData({ onMapClick }) {
    const [activeFloor, setActiveFloor] = useState("1");
    const [floorInfo, setFloorInfo] = useState(null);
    const [activeAreaComponent, setActiveAreaComponent] = useState(null);

    useEffect(() => {
        setFloorInfo(floorData[activeFloor]);
    }, [activeFloor]);

    const handleMapClick = (area) => {
        if (onMapClick) {
            onMapClick(area);
        }
    };

    return (
        <CntWrap>
            <div className="cntWrapBox">
                <FirestTitle>층별 안내</FirestTitle>
                <div className="cntTextBox">
                    <div>
                        <li className="textBoxType2">
                            각 실을 클릭하시면 상세 정보를 보실 수 있습니다.
                        </li>
                        <div className="floorMapTabs">
                            <div className="tabs">
                                {Object.keys(floorData).map((floor) => (
                                    <button
                                        key={floor}
                                        className={`tab ${
                                            activeFloor === floor
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => setActiveFloor(floor)}
                                    >
                                        {floorData[floor].name}
                                    </button>
                                ))}
                            </div>
                            <div className="tabContent">
                                {floorInfo && (
                                    <FloorMap
                                        floorInfo={floorInfo}
                                        onAreaClick={handleMapClick}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CntWrap>
    );
}

export default FloorData;
