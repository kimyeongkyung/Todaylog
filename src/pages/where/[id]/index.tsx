import Container from "@/components/Container";
import {
  BookmarkOn,
  HashTag,
  Location,
  MorePhoto,
  Phone,
  ReveiwPencil,
} from "@/components/icons";
import BookmarkOff from "@/components/icons/BookmarkOff";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const WhereDetail = () => {
  const { push } = useRouter();
  const [clickBookMark, setClickBookMark] = useState(false); //필터 키워드 체크박스 상태값
  return (
    <Container>
      <WrapCon>
        <WhatDetailImg>
          <img src="/images/sample3.png"></img>
          <img src="/images/sample6.png"></img>
          <img src="/images/sample7.png"></img>
        </WhatDetailImg>
        <Title>
          <div>OGOC 공방</div>
          <div
            className="icon"
            onClick={(e) => {
              e.stopPropagation();
              setClickBookMark(!clickBookMark);
            }}
          >
            {clickBookMark ? <BookmarkOn /> : <BookmarkOff />}
          </div>
        </Title>
        <MobileWhatDetailImg>
          <img src="/images/sample3.png"></img>
        </MobileWhatDetailImg>
        <WrapInfo>
          <Map>
            <img src="/images/sample8.png" alt="상세 위치 정보 지도"></img>
          </Map>

          <WrapLocation>
            <Road>
              <div className="icon">
                <Location />
              </div>
              <div>서울 마포구 동교로 248-1 2층</div>
            </Road>
            <div className="street">
              <span>지번</span>연남동 228-48
            </div>
          </WrapLocation>
          <PhoneNum>
            <div className="icon">
              <Phone />
            </div>
            <div>0507-1331-7431</div>
          </PhoneNum>
          <WrapHashTag>
            <div className="icon">
              <HashTag />
            </div>
            <Tag>
              <div>모던한</div>
              <div>연인과</div>
              <div>깔끔한</div>
            </Tag>
          </WrapHashTag>
          <WrapReview>
            <div className="icon">
              <ReveiwPencil />
            </div>
            <div>리뷰</div>
          </WrapReview>
          <PCCardList>
            <WhatPCCard
              onClick={() => {
                push("/what/1");
              }}
            >
              <img
                src="/images/sample1.png"
                alt="where-card"
                width="140px"
                height="140px"
              ></img>
              <div className="icon">
                <MorePhoto />
              </div>
              <Infomation>
                <WrapNearby>
                  <div>
                    <span>합정동 근처</span>에서 하루를 보냈어요
                  </div>
                </WrapNearby>
                <PCTitle>
                  [하루일기] 어노브 연남 | 목화씨라운지 | OGOC공방
                </PCTitle>
                <Content>
                  아오늘잘놀았네!ㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㄹㄴㅇㄹㄴㄹㄴㅇ
                </Content>
                <WrapWriteInfo>
                  <Writer>
                    <div className="profileImg">
                      <img src="/images/sample5.png" alt="profile"></img>
                    </div>
                    나무늘보
                  </Writer>
                  <CreatedAt>2023.10.10</CreatedAt>
                </WrapWriteInfo>
              </Infomation>
            </WhatPCCard>
            {/* 여러 WhereCard 컴포넌트 추가 */}
            <WhatPCCard
              onClick={() => {
                push("/what/1");
              }}
            >
              <img
                src="/images/sample1.png"
                alt="where-card"
                width="140px"
                height="140px"
              ></img>
              <div className="icon">
                <MorePhoto />
              </div>
              <Infomation>
                <WrapNearby>
                  <div>
                    <span>합정동 근처</span>에서 하루를 보냈어요
                  </div>
                </WrapNearby>
                <PCTitle>
                  [하루일기] 어노브 연남 | 목화씨라운지 | OGOC공방
                </PCTitle>
                <Content>
                  아오늘잘놀았네!ㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㄹㄴㅇㄹㄴㄹㄴㅇ
                </Content>
                <WrapWriteInfo>
                  <Writer>
                    <div className="profileImg">
                      <img src="/images/sample5.png" alt="profile"></img>
                    </div>
                    나무늘보
                  </Writer>
                  <CreatedAt>2023.10.10</CreatedAt>
                </WrapWriteInfo>
              </Infomation>
            </WhatPCCard>{" "}
            <WhatPCCard
              onClick={() => {
                push("/what/1");
              }}
            >
              <img
                src="/images/sample1.png"
                alt="where-card"
                width="140px"
                height="140px"
              ></img>
              <div className="icon">
                <MorePhoto />
              </div>
              <Infomation>
                <WrapNearby>
                  <div>
                    <span>합정동 근처</span>에서 하루를 보냈어요
                  </div>
                </WrapNearby>
                <PCTitle>
                  [하루일기] 어노브 연남 | 목화씨라운지 | OGOC공방
                </PCTitle>
                <Content>
                  아오늘잘놀았네!ㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹㄴㄹㄴㅇㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㅇㄴㄹㄴㅇㄹㅁㄴㄹㅇㄴㄹㅁㄴㅇㄹㄴㄹㄴㅁㄹㅁㄹㅁㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㄹㄴㄹㄴㅁㄹㄴㅁㄹㄴㅇㄹㄴㄹㄴㅇ
                </Content>
                <WrapWriteInfo>
                  <Writer>
                    <div className="profileImg">
                      <img src="/images/sample5.png" alt="profile"></img>
                    </div>
                    나무늘보
                  </Writer>
                  <CreatedAt>2023.10.10</CreatedAt>
                </WrapWriteInfo>
              </Infomation>
            </WhatPCCard>
          </PCCardList>
          <MobileCardList>
            <ReviewCard>
              <MobileTitle>
                [하루일기] 어노브 연남 | 목화씨 라운지 | 망원한강공원
              </MobileTitle>
              <ReviewImg>
                <img src="/images/sample1.png"></img>
                <img src="/images/sample2.png"></img>
                <img src="/images/sample3.png"></img>
              </ReviewImg>
            </ReviewCard>
            <ReviewCard>
              <MobileTitle>
                [하루일기] 어노브 연남 | 목화씨 라운지 | 망원한강공원
              </MobileTitle>
              <ReviewImg>
                <img src="/images/sample1.png"></img>
                <img src="/images/sample2.png"></img>
                <img src="/images/sample3.png"></img>
              </ReviewImg>
            </ReviewCard>
            <ReviewCard>
              <MobileTitle>
                [하루일기] 어노브 연남 | 목화씨 라운지 | 망원한강공원
              </MobileTitle>
              <ReviewImg>
                <img src="/images/sample1.png"></img>
                <img src="/images/sample2.png"></img>
                <img src="/images/sample3.png"></img>
              </ReviewImg>
            </ReviewCard>
          </MobileCardList>
        </WrapInfo>
      </WrapCon>
    </Container>
  );
};
export default WhereDetail;
const WrapCon = styled.div`
  padding-top: 34px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 34px;
  @media (max-width: 600px) {
    gap: 15px;
  }
`;
const WhatDetailImg = styled.div`
  background-color: #aeaeae;
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    width: calc(33.33%);
    box-sizing: border-box;
    aspect-ratio: 1.3 / 1;
    object-fit: cover;
  }
  img:nth-of-type(1) {
    border-left: none;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileWhatDetailImg = styled.div`
  background-color: #aeaeae;
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    width: 100%;
    border-left: 1px solid #000;
    box-sizing: border-box;
    aspect-ratio: 1.3 / 1;
    object-fit: cover;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  gap: 10px;

  .icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
`;

const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Map = styled.div`
  img {
    width: 100%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const WrapLocation = styled.div`
  .street {
    padding-left: 23px;
    span {
      padding-right: 10px;
      color: #8eb2f8;
    }
  }
`;
const WrapNearby = styled.div`
  span {
    font-weight: bold;
  }
`;
const Road = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 5px;
  .icon {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;
const PhoneNum = styled.div`
  display: flex;
  gap: 8px;
  .icon {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;
const WrapHashTag = styled.div`
  display: flex;
  gap: 8px;
  .icon {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

const Tag = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  div {
    min-width: fit-content;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 1px rgba(218, 218, 218, 0.6);
    padding: 6px 12px;
    background: #fff;
    font-size: 14px;
  }
`;
const WrapReview = styled.div`
  display: flex;
  gap: 8px;
  .icon {
    display: flex;
    align-items: start;
    flex-direction: row;
  }
`;
const PCCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  padding: 13px;
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
const Infomation = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
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
const MobileTitle = styled.div`
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
