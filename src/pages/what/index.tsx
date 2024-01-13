import SquareButton from "@/components/Button/SquareButton";
import Container from "@/components/Container";
import Header from "@/components/Header";
import {
  DoubleNextPage,
  DoublePrevPage,
  MorePhoto,
  NextPage,
  PrevPage,
} from "@/components/icons";
import useGetWhatPosts from "@/hooks/what/posts/useGetWhatPosts";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const What = () => {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();
  // 오늘뭐하지 데이터 조회
  const data = useGetWhatPosts();

  return (
    <>
      <Container>
        <SelectLocationTitle>
          <span>서울특별시 마포구</span>
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
        </SelectLocationTitle>
        {/* <div> */}
        <WrapPCCon>
          <PCCardList>
            {data?.map((item) => {
              const addressParts = item?.address.split(/[\s,]+/);

              // 필요한 부분만 선택
              const shortenedAddress = addressParts?.slice(1, 3).join(" ");
              return (
                <WhatPCCard
                  key={item.postId}
                  onClick={() => {
                    push(`/what/${item.postId}`);
                  }}
                >
                  <Image
                    src={item?.images}
                    alt="where-card"
                    width={140}
                    height={140}
                    className="img"
                  ></Image>
                  <div className="icon">
                    <MorePhoto />
                  </div>
                  <Infomation>
                    <WrapLocation>
                      <div>
                        <span>{shortenedAddress} 근처</span>에서 하루를 보냈어요
                      </div>
                    </WrapLocation>
                    <PCTitle>{item.title}</PCTitle>
                    <Content>{item.comment}</Content>
                    <WrapWriteInfo>
                      <Writer>
                        <div className="profileImg">
                          <Image
                            src="/images/sample5.png"
                            alt="profile"
                            width={20}
                            height={20}
                          ></Image>
                        </div>
                        나무늘보
                      </Writer>
                      <CreatedAt>2023.10.10</CreatedAt>
                    </WrapWriteInfo>
                  </Infomation>
                </WhatPCCard>
              );
            })}
            <Pagination>
              <div>
                <DoublePrevPage />
              </div>
              <div>
                <PrevPage />
              </div>
              <div className="clicked">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>
                <NextPage />
              </div>
              <div>
                <DoubleNextPage />
              </div>
            </Pagination>
          </PCCardList>
          <RightCon>information</RightCon>
        </WrapPCCon>

        <MobileCardList>
          {data?.map((item: any) => {
            const addressParts = item?.address?.split(/[\s,]+/);

            // 필요한 부분만 선택
            const shortenedAddress = addressParts?.slice(1, 3).join(" ");
            return (
              <ReviewCard
                key={item.postId}
                onClick={() => {
                  push("/what/1");
                }}
              >
                <Title>[하루일기] {item.title}</Title>
                <ReviewImg>
                  <Image
                    src="/images/sample1.png"
                    alt="이미지1"
                    style={{
                      width: "calc(33.33%)",
                      borderLeft: "1px solid #000",
                      boxSizing: "border-box",
                      aspectRatio: "1",
                      objectFit: "cover",
                    }}
                  ></Image>
                  <Image
                    src="/images/sample2.png"
                    alt="이미지2"
                    style={{
                      width: "calc(33.33%)",
                      borderLeft: "1px solid #000",
                      boxSizing: "border-box",
                      aspectRatio: "1",
                      objectFit: "cover",
                    }}
                  ></Image>
                  <Image
                    src="/images/sample3.png"
                    alt="이미지3"
                    style={{
                      width: "calc(33.33%)",
                      borderLeft: "1px solid #000",
                      boxSizing: "border-box",
                      aspectRatio: "1",
                      objectFit: "cover",
                    }}
                  ></Image>
                </ReviewImg>
                <ReviewLocation>
                  <span>{shortenedAddress} 근처</span>에서 하루를 보냈어요.
                </ReviewLocation>
              </ReviewCard>
            );
          })}
        </MobileCardList>
        {/* </div> */}
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

const SelectLocationTitle = styled.div`
  font-size: 20px;
  span {
    font-weight: bold;
    text-decoration: underline;
  }
  @media (min-width: 600px) {
    padding-top: 16px;
  }
`;
const ChangeSpot = styled.div`
  text-decoration: underline;
  color: #aeaeae;
  font-size: 13px;

  padding: 10px 0;
  text-align: left;
  span {
    width: fit-content;
    text-align: center;
    cursor: pointer;
  }
`;
const MobileCardList = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

const ReviewCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 16px;
  /* border: 1px solid #000; */
  border-radius: 3px;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: relative;
`;
const Title = styled.div`
  /* width: fit-content; */
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
`;
const ReviewImg = styled.div`
  background-color: #aeaeae;
  display: flex;
  justify-content: space-between;

  img {
    width: calc(33.33%);
    border-left: 1px solid #000;
    box-sizing: border-box;
    aspect-ratio: 1;
    object-fit: cover;
  }
  img:nth-of-type(1) {
    border-left: none;
  }
`;

const ReviewLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  span {
    font-weight: bold;
  }
`;
const WrapPCCon = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  /* justify-content: space-between; */
`;
const PCCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  @media (max-width: 600px) {
    display: none;
  }
`;
const WhatPCCard = styled.div`
  min-width: 457px;

  cursor: pointer;
  display: flex;
  border-radius: 5px;
  background: #fff;
  padding: 16px;
  gap: 21px;
  box-shadow: 1px 1px 8px 1px rgba(89, 89, 89, 0.25);
  position: relative;
  img {
    min-width: 140px;
    min-height: 140px;
  }
  .icon {
    position: absolute;
    bottom: 26px;
    left: 135px;
  }
`;
const RightCon = styled.div`
  width: 20%;
  height: 400px;
  background-color: beige;
`;
const Infomation = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
`;
const WrapWriteInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Writer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .profileImg {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 원본 비율 유지를 위해 cover 사용 */
  }
`;
const CreatedAt = styled.div`
  color: #b6b6b6;
`;
const WrapLocation = styled.div`
  span {
    font-weight: bold;
  }
`;

const PCTitle = styled.div`
  font-size: 20px;
  display: flex;
  font-weight: bold;
`;
const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* 필요에 따라 생략 부분에 ... 표시 가능 */
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
  /* min-width: 360px; 
  max-width: 420px;  */
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

const Pagination = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  margin: 30px auto;

  div {
    cursor: pointer;
    font-size: 12px;
    width: 36px;
    height: 36px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
  }
  .clicked {
    background-color: #ffc700;
  }
`;
