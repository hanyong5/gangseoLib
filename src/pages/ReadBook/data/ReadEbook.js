import React from "react";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import Title from "../../../components/Layout/Title";
import { useParams } from "react-router-dom";
import EbookFrame from "../../../components/Ebook/EbookFrame";
import EbookSolution from "./EbookSolution";

function ReadEbook() {
  const { title } = useParams();

  return (
    <SubBackWrap>
      <SubTopMenu />
      <Title>{title}</Title>
      <EbookFrame children={<EbookSolution />} />
    </SubBackWrap>
  );
}

export default ReadEbook;
