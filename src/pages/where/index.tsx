import FloatButton from "@/components/Button/FloatButton";
import ModalBottomButton from "@/components/Button/ModalBottomButton";
import SquareButton from "@/components/Button/SquareButton";
import Container from "@/components/Container";
import Header from "@/components/Header";
import LoginCheckModal from "@/components/Modal/LoginCheckModal";
import Navigation from "@/components/Navigation";
import {
  Checkbox,
  Duck,
  Search,
  SmallHeart,
  UnCheckbox,
} from "@/components/icons";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Where = () => {
  //필터 모달
  const [openFilter, setOpenFilter] = useState(false);
  //비로그인 상태에서 상세 진입 시 로그인 확인 모달
  const [openNotLogin, setOpenNotLogin] = useState(false);
  //키워드 탭 상태 변경
  const [activeKeyword, setActiveKeyword] = useState("카페");
  //필터 키워드 체크박스 상태값
  const [checkbox, setCheckbox] = useState(false);
  //필터 날씨 및 분위기 선택
  const [clickConceptBtn, setClickConceptBtn] = useState<number[]>([]);
  const conceptExample = [
    "모던한",
    "키치한",
    "빈티지한",
    "깔끔한",
    "격식있는",
    "가성비",
    "연인과",
    "친구와",
    "가족과",
    "기념일",
    "연말",
    "명절",
    "흐린",
    "맑은",
    "눈내리는",
    "비오는",
    "봄",
    "여름",
    "가을",
    "겨울",
  ];

  return (
    <>
      <Container>
        <SearchBar>
          <Input type="text" id="id"></Input>
          <div className="search">
            <Search />
          </div>
          <CheckBtn
            onClick={() => {
              setOpenFilter(true);
            }}
          >
            필터
          </CheckBtn>
        </SearchBar>
        <div className="title">요즘 핫한 장소 TOP 5</div>
        <HotplaceCardList>
          <HotplaceCard>
            <div>
              <img
                src="https://via.placeholder.com/68x68"
                width="68px"
                height="68px"
              ></img>
            </div>
            <div className="text">
              <p>카페</p>
              <h1>1.Type 한강점</h1>
              <TotalLike>
                <SmallHeart />
                <div>269</div>
              </TotalLike>
            </div>
          </HotplaceCard>
          <HotplaceCard>
            <div>
              <img
                src="https://via.placeholder.com/68x68"
                width="68px"
                height="68px"
              ></img>
            </div>
            <div className="text">
              <p>카페</p>
              <h1>2.Type 한강점</h1>
              <TotalLike>
                <SmallHeart />
                <div>269</div>
              </TotalLike>
            </div>
          </HotplaceCard>
          <HotplaceCard>
            <div>
              <img
                src="https://via.placeholder.com/68x68"
                width="68px"
                height="68px"
              ></img>
            </div>
            <div className="text">
              <p>카페</p>
              <h1>3.Type 한강점</h1>
              <TotalLike>
                <SmallHeart />
                <div>269</div>
              </TotalLike>
            </div>
          </HotplaceCard>
        </HotplaceCardList>
        <KeywordTab>
          <div
            onClick={() => {
              setActiveKeyword("음식점");
            }}
            style={{
              fontWeight: activeKeyword === "음식점" ? "bold" : "normal",
              color: activeKeyword === "음식점" ? "#000" : "#bcbcbc",
            }}
          >
            음식점
          </div>
          <div
            onClick={() => {
              setActiveKeyword("카페");
            }}
            style={{
              fontWeight: activeKeyword === "카페" ? "bold" : "normal",
              color: activeKeyword === "카페" ? "#000" : "#bcbcbc",
            }}
          >
            카페
          </div>
          <div
            onClick={() => {
              setActiveKeyword("문화/여가");
            }}
            style={{
              fontWeight: activeKeyword === "문화/여가" ? "bold" : "normal",
              color: activeKeyword === "문화/여가" ? "#000" : "#bcbcbc",
            }}
          >
            문화/여가
          </div>
        </KeywordTab>
        <Line></Line>
        {/* 음식점 */}
        {activeKeyword === "음식점" && (
          <FoodCardList>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">아노브 연남</div>
                <div className="address">마포구 연남동</div>
              </WhatTitle>
            </WhatCard>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">아노브 연남</div>
                <div className="address">마포구 연남동</div>
              </WhatTitle>
            </WhatCard>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">아노브 연남</div>
                <div className="address">마포구 연남동</div>
              </WhatTitle>
            </WhatCard>
          </FoodCardList>
        )}
        {/* 카페 */}
        {activeKeyword === "카페" && (
          <CafeCardList>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">목화씨라운지</div>
                <div className="address">마포구 합정동</div>
              </WhatTitle>
            </WhatCard>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">목화씨라운지</div>
                <div className="address">마포구 합정동</div>
              </WhatTitle>
            </WhatCard>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">앤트러사이트</div>
                <div className="address">마포구 연남동</div>
              </WhatTitle>
            </WhatCard>
          </CafeCardList>
        )}
        {/* 문화/여가 */}
        {activeKeyword === "문화/여가" && (
          <CultureCardList>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">망원한강공원</div>
                <div className="address">마포구 망원동</div>
              </WhatTitle>
            </WhatCard>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">망원한강공원</div>
                <div className="address">마포구 망원동</div>
              </WhatTitle>
            </WhatCard>
            <WhatCard
              onClick={() => {
                setOpenNotLogin(true);
              }}
            >
              <div>
                <img
                  src="https://via.placeholder.com/328x130"
                  width="100%"
                  height="130px"
                ></img>
              </div>
              <WhatTitle>
                <div className="name">뉴스뮤지엄</div>
                <div className="address">마포구 연남동</div>
              </WhatTitle>
            </WhatCard>
          </CultureCardList>
        )}
        {/* 필터 모달 */}
        {openFilter && (
          <>
            <DimOverlay
              onClick={() => {
                setOpenFilter(false);
              }}
            />
            <FilterModal>
              <Title>필터</Title>
              <Region>
                <p>지역</p>
                <select style={{ width: "30%" }}>
                  <option>시</option>
                </select>
                <select style={{ width: "30%" }}>
                  <option>구</option>
                </select>
                <select style={{ width: "30%" }}>
                  <option>동</option>
                </select>
              </Region>
              <Keyword>
                <p>키워드(중복선택 가능)</p>
                <div>
                  <div
                    className="food"
                    onClick={() => {
                      setCheckbox(!checkbox);
                    }}
                  >
                    {checkbox ? <Checkbox /> : <UnCheckbox />}
                    <div>음식점</div>
                  </div>
                  <div
                    className="cafe"
                    onClick={() => {
                      setCheckbox(!checkbox);
                    }}
                  >
                    {checkbox ? <Checkbox /> : <UnCheckbox />}
                    <div>카페</div>
                  </div>
                  <div
                    className="culture"
                    onClick={() => {
                      setCheckbox(!checkbox);
                    }}
                  >
                    {checkbox ? <Checkbox /> : <UnCheckbox />}
                    <div>문화/여가</div>
                  </div>
                </div>
              </Keyword>{" "}
              <Concept>
                <p>날씨 및 분위기(중복선택 가능)</p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    maxWidth: "420px",
                  }}
                >
                  {conceptExample.map((item, key) => {
                    const isCardClicked = clickConceptBtn.includes(key); // 해당 카드가 클릭되었는지 확인

                    return (
                      <ConceptCard
                        key={key}
                        onClick={() => {
                          // 카드 클릭 시 클릭된 카드의 상태를 업데이트
                          if (isCardClicked) {
                            // 이미 클릭된 경우 클릭 상태에서 제거
                            setClickConceptBtn(
                              clickConceptBtn.filter(
                                (cardKey) => cardKey !== key
                              )
                            );
                          } else {
                            // 클릭되지 않은 경우 클릭 상태에 추가
                            setClickConceptBtn([...clickConceptBtn, key]);
                          }
                        }}
                        style={{
                          backgroundColor: isCardClicked ? "#fcc700" : "#fff",
                          color: isCardClicked ? "#fff" : "#000",
                        }}
                      >
                        {item}
                      </ConceptCard>
                    );
                  })}
                </div>
              </Concept>
              <ModalBottomButton
                setOpen={setOpenFilter}
                okLabel="로그인"
                cancelLabel="닫기"
                movePath="/login"
              />
            </FilterModal>
          </>
        )}
      </Container>
      {openNotLogin && (
        <LoginCheckModal
          setOpen={(value: boolean) => setOpenNotLogin(value)} // 모달에서 모달을 닫을 때 사용할 콜백
        />
      )}
      <Navigation />
    </>
  );
};

export default Where;
const SearchBar = styled.div`
  display: flex;
  position: relative;
  .search {
    cursor: pointer;
    position: absolute;
    top: 11px;
    right: 63px;
  }
`;
const Input = styled.input`
  border: 1px solid #ffc700;
  width: 100%;
  height: 38px;
  border-radius: 5px;
`;
const CheckBtn = styled.div`
  min-width: 44px;
  height: 38px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
  color: #bcbcbc;
  font-size: 14px;
  cursor: pointer;
  margin-left: 6px;
`;
const HotplaceCardList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨김 */

  &::-webkit-scrollbar {
    width: 0; /* Chrome, Safari, Opera에서 스크롤바 숨김 */
  }
`;

const HotplaceCard = styled.div`
  display: flex;
  width: 183px;
  min-width: 183px;
  max-height: 68px;
  padding: 16px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  .text {
    max-height: 68px;
    padding-left: 11px;
    p {
      font-size: 12px;
      color: #888;
    }
    h1 {
      font-weight: bold;
    }
  }
`;

const TotalLike = styled.div`
  display: flex;
  padding-top: 24px;
  div {
    font-size: 11px;
    padding-left: 3px;
  }
`;

const KeywordTab = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  color: #bcbcbc;
  font-size: 16px;
  cursor: pointer;
  div {
    width: 30%;
    padding: 13px 0;
    text-align: center;
  }
`;

const Line = styled.p`
  border-top: 1px solid #bcbcbc;
`;

const FoodCardList = styled.div``;
const CafeCardList = styled.div``;
const CultureCardList = styled.div``;
const WhatCard = styled.div`
  position: relative;
  padding-top: 14px;
  cursor: pointer;
`;

const WhatTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(23, 23, 203, 0.2);
  // background-color: #000;
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: space-between;
  div {
    font-size: 12px;
    line-height: 28px;
    color: #fff;
  }
  .name {
    width: fit-content;
    padding-left: 8px;
  }
  .address {
    padding-right: 8px;
  }
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

const FilterModal = styled.div`
  min-width: 360px;
  max-width: 388px;
  width: 100%;
  // height: 170px;
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Make sure the modal is above other content */
  p {
    font-size: 14px;
    padding-bottom: 4px;
  }
  // padding: 16px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  // text-align: center;
  line-height: 21px;
  padding: 16px;
`;

const Region = styled.div`
  justify-content: space-between;
  select {
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #bcbcbc;
    font-size: 14px;
    padding: 4px;
  }
  padding: 0 16px;
`;
const Keyword = styled.div`
  padding: 20px 16px;
  > div {
    // background-color: pink;
    display: flex;
    justify-content: space-between;

    .food {
      cursor: pointer;
      gap: 10px;
      display: flex;
    }
    .cafe {
      cursor: pointer;
      gap: 10px;
      display: flex;
    }
    .culture {
      cursor: pointer;
      gap: 10px;
      display: flex;
    }
  }
`;
const Concept = styled.div`
  padding: 0 16px 16px 16px;
  p {
    padding-bottom: 10px;
  }
`;
const ConceptCard = styled.div`
  cursor: pointer;
  min-width: fit-content;
  height: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
const WrapFloatBtn = styled.div`
  position: absolute;
  bottom: 80px;
  right: 135px;
`;
