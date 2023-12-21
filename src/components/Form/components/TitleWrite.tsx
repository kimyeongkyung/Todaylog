import Input from "@/components/Input";
import { NextChapter, PrevChapter } from "@/components/icons";
import Guide from "@/components/icons/Guide";
import React, { useState } from "react";
import styled from "styled-components";

const TitleWrite = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <WrapCon>
      <WrapWrite>
        <div className="write">
          <div>하루 일기를 대표할 제목을 설정해 주세요.</div>
          <Input
            type="text"
            placeholder="ex.000피자 | 00카페 | 00한강공원"
          ></Input>
        </div>
      </WrapWrite>

      {/* <div> */}
      {/* {data.map((item) => (
  <div key={item.id}>
    {item.name} - {item.region} - {item.age}
  </div>
))} */}
      {/* </div> */}
      {/* <ButtonCustom onClick={handleSendRequest}>Send POST Request</ButtonCustom> */}
    </WrapCon>
  );
};

export default TitleWrite;
const WrapCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 76px;
  padding-top: 34px;
`;
const WrapPercent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  div {
    width: 25%;
    height: 8px;
    border-radius: 3px;
    border: 1px solid #ffc700;
  }
  .full {
    background: #ffc700;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const WrapWrite = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .write {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const CheckBtn = styled.div`
  min-width: 68px;
  height: 38px;
  background-color: #ffc700;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin: 5px 0 0 10px;
`;
const WrapSearch = styled.div`
  display: flex;
`;
const ButtonCustom = styled.button`
  width: 100px;
  cursor: pointer;
  border: 1px solid #000;
  margin: 10px;
`;

const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;
const WrapGuide = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 3px;
  color: #a4a4a4;
  cursor: pointer;
  text-decoration: underline;
`;
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div`
  visibility: visible;
  width: 400px;
  border: 1px solid #a4a4a4;
  color: #a4a4a4;
  border-radius: 6px;
  padding: 10px;
  line-height: 20px;
  position: absolute;
  z-index: 1;
  /* bottom: 0; */
  left: 50%;
  margin: 10px 0 0 -70px;
  opacity: 1;
  transition: opacity 0.3s;
`;
