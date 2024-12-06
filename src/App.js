import React from "react";
//import { Route, Routes } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "../src/assets/css/index.css";
import "../src/assets/styles/style.scss";
import MainPage from "./layout/MainPage";
import Chatbot from "./pages/Chatbot/Chatbot";
import Libabout from "./pages/Libabout/Libabout";
import BookRequest from "./pages/Libabout/menus/BookRequest";
import Cafeteria from "./pages/Libabout/menus/Cafeteria";
import DeliveryLoan from "./pages/Libabout/menus/DeliveryLoan";
import Donation from "./pages/Libabout/menus/Donation";
import FacilityUse from "./pages/Libabout/menus/FacilityUse";
import Locker from "./pages/Libabout/menus/Locker";
import MembershipCard from "./pages/Libabout/menus/MembershipCard";
import Parking from "./pages/Libabout/menus/Parking";
import Printing from "./pages/Libabout/menus/Printing";
import Program from "./pages/Libabout/menus/Program";
import Wifi from "./pages/Libabout/menus/Wifi";
import Libsetabout from "./pages/LibSetAbout/LibSetAbout";
import SubTest from "./pages/LibSetAbout/SubTest";

import SerchBook from "./pages/SerchBook/SerchBook";
import Waiting from "./pages/Waiting/Waiting";

function App() {
  return (
    <div className="globalContainer">
      <Routes>
        {/* 메인 페이지 route */}
        {/* <Route
          path="/"
          element={<MainPage />}
        ></Route>
        <Route
          path="/chatbot"
          element={<Chatbot />}
        ></Route> */}
        <Route
          path="/"
          element={<Libabout />}
        ></Route>
        <Route
          path="/libsetabout"
          element={<Libsetabout />}
        ></Route>

        {/* 서브 페이지 테스트 route */}
        <Route
          path="/subTest"
          element={<SubTest />}
        ></Route>

        <Route
          path="/Donation"
          element={<Donation />}
        ></Route>

        <Route
          path="/Wifi"
          element={<Wifi />}
        ></Route>

        {/* 도서관 안내 페이지 route */}
        <Route
          path="/bookrequest"
          element={<BookRequest />}
        ></Route>

        <Route
          path="/DeliveryLoan"
          element={<DeliveryLoan />}
        ></Route>

        <Route
          path="/Locker"
          element={<Locker />}
        ></Route>

        <Route
          path="/MembershipCard"
          element={<MembershipCard />}
        ></Route>

        <Route
          path="/Printing"
          element={<Printing />}
        ></Route>

        <Route
          path="/Cafeteria"
          element={<Cafeteria />}
        ></Route>

        <Route
          path="/Program"
          element={<Program />}
        ></Route>

        <Route
          path="/Parking"
          element={<Parking />}
        ></Route>

        <Route
          path="/FacilityUse"
          element={<FacilityUse />}
        ></Route>

        {/* 이벤트 route */}
        {/* <Route path="/eventpage" element={<EventPage />}></Route> */}
        <Route
          path="/eventpage"
          element={<Waiting />}
        ></Route>
        {/* 도서 검색 route */}
        <Route
          path="/serchbook"
          element={<SerchBook />}
        ></Route>
        {/* 준비중 페이지 route */}
        <Route
          path="/waiting"
          element={<Waiting />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
