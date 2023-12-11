import SquareButton from "@/components/Button/SquareButton";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const What = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <div>
          {/* header */}
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            서울특별시 마포구
          </span>{" "}
          에서 오늘 뭐해?
          <ChangeSpot>
            <span
              onClick={() => {
                setOpen(true);
              }}
            >
              위치 변경
            </span>
          </ChangeSpot>
          <ReviewCardList>
            <ReviewCard>
              <ReviewImg>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
              </ReviewImg>
              <ReviewLocation>합정동 근처에서 하루를 보냈어요.</ReviewLocation>
            </ReviewCard>
            <ReviewCard>
              <ReviewImg>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
              </ReviewImg>
              <ReviewLocation>합정동 근처에서 하루를 보냈어요.</ReviewLocation>
            </ReviewCard>
            <ReviewCard>
              <ReviewImg>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
              </ReviewImg>
              <ReviewLocation>합정동 근처에서 하루를 보냈어요.</ReviewLocation>
            </ReviewCard>
            <ReviewCard>
              <ReviewImg>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
              </ReviewImg>
              <ReviewLocation>합정동 근처에서 하루를 보냈어요.</ReviewLocation>
            </ReviewCard>{" "}
            <ReviewCard>
              <ReviewImg>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
                <img
                  src="https://via.placeholder.com/128x128"
                  width="33.3%"
                  height="128px"
                ></img>
              </ReviewImg>
              <ReviewLocation>합정동 근처에서 하루를 보냈어요.</ReviewLocation>
            </ReviewCard>
          </ReviewCardList>
        </div>
        {open && (
          <>
            <DimOverlay
              onClick={() => {
                setOpen(false);
              }}
            />
            <ChangeSpotModal>
              <div className="title">
                <div>모달입니다.</div>
                <CloseBtn
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  닫기
                </CloseBtn>
              </div>
              <select style={{ border: "1px solid #000", width: "30%" }}>
                <option>시</option>
              </select>
              <select style={{ border: "1px solid #000", width: "30%" }}>
                <option>구</option>
              </select>
              <SquareButton text="변경하기" />
            </ChangeSpotModal>
          </>
        )}
      </Container>
    </>
  );
};

export default What;

const ChangeSpot = styled.div`
  text-decoration: underline;
  color: #aeaeae;
  font-size: 11px;

  padding-bottom: 10px;

  text-align: right;
  span {
    width: fit-content;
    text-align: center;
    cursor: pointer;
  }
`;
const ReviewCardList = styled.div``;

const ReviewCard = styled.div`
  margin-bottom: 16px;
  border: 1px solid #000;
  cursor: pointer;
`;

const ReviewImg = styled.div`
  background-color: #aeaeae;
  // height: 100px;
  img {
    border-left: 1px solid #000;
    box-sizing: border-box;
  }
  img:nth-of-type(1) {
    border-left: none;
  }
`;

const ReviewLocation = styled.div`
  text-align: right;
  font-size: 12px;
  padding: 5px;
`;

const ChangeSpotModal = styled.div`
  width: 300px;
  height: 300px;
  padding: 16px;
  border: 1px solid #000;
  background-color: #fff;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Make sure the modal is above other content */
  .title {
    display: flex;
    justify-content: space-between;
  }
`;

const DimOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  min-width: 360px; /* 최소 너비를 360px로 설정 */
  max-width: 420px; /* 최대 너비를 420px로 설정 */
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
  z-index: 998; /* Place it below the modal */
`;

const CloseBtn = styled.div`
  color: #777;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.div`
  width: 70px;
  height: 30px;
  background-color: #000;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
`;
