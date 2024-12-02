import React, { useRef, useState } from "react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperComponent({ mainTitle, tabs, data, ContentsData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className="tabContainer">
            <div className="tabHeader">
                <h2 className="mainTitle">{mainTitle}</h2>
                <div className="tabButtons">
                    {tabs.map((tab, index) => (
                        <span
                            key={index}
                            className={`tabButton ${
                                index === activeIndex ? "active" : ""
                            }`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>
            </div>
            <div className="swWrap">
                <div className="contentWrap"></div>
                <Swiper
                    ref={swiperRef}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    grabCursor={true}
                    onSlideChange={handleSlideChange}
                    navigation={true}
                    modules={[Pagination, Navigation, EffectCreative]}
                    className="mySwiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="subCntWrap">
                                {/* 각 슬라이드에 맞는 ContentsData를 렌더링 */}
                                {item.ContentsData}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

export default SwiperComponent;
