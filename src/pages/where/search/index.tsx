import Container from "@/components/Container";
import Input from "@/components/Input";
import {
  BookmarkOn,
  Checkbox,
  Location,
  RemoveTag,
  Reset,
  Search,
  Sorting,
  UnCheckbox,
} from "@/components/icons";
import BookmarkOff from "@/components/icons/BookmarkOff";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const WhereSearch = () => {
  const { push } = useRouter();
  const [clickBookMark, setClickBookMark] = useState(false); //필터 키워드 체크박스 상태값
  const [checkbox, setCheckbox] = useState(false);

  const [clickThemeBtn, setClickThemeBtn] = useState<number[]>([]);
  const [clickWeatherBtn, setClickWeatherBtn] = useState<number[]>([]);
  const conceptExample = ["모던한", "연인과", "연말", "눈내리는", "겨울"];
  const themeExample = [
    "모던한",
    "감성적인",
    "빈티지한",
    "깔끔한",
    "격식있는",
    "가성비",
    "연인과",
    "친구와",
    "가족과",
    "혼자서",
    "기념일",
    "연말",
  ];
  const weatherExample = [
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
    <Container>
      <SearchBar>
        <Input
          type="text"
          id="id"
          style={{ paddingLeft: "40px", fontSize: "15px" }}
        ></Input>
        {/* <div className="search">
          <Search />
        </div> */}
        <CheckBtn>검색</CheckBtn>
      </SearchBar>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          maxWidth: "420px",
          margin: "12px 0 17px 0",
        }}
      >
        <ResetBtn>
          <div className="icon">
            <Reset />
          </div>
          초기화
        </ResetBtn>
        {conceptExample.map((item, key) => {
          return (
            <SelectConceptCard key={key} onClick={() => {}} style={{}}>
              <div className="icon">
                <RemoveTag />
              </div>
              {item}
            </SelectConceptCard>
          );
        })}
      </div>

      <WrapContents>
        <FilterTab>
          <Map>
            <MapImage>
              <Image
                src="/images/sample4.png"
                alt="지도 이미지"
                className="img"
                style={{
                  width: "100%",
                  height: "300px",
                }}
              ></Image>
            </MapImage>
            <OpenMap>지도</OpenMap>
          </Map>
          <Filter>필터</Filter>
          <PCFilterKeyword>
            <div className="filterTitle">키워드</div>
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
          </PCFilterKeyword>
          <PCConceptFilter>
            <PCWeather>
              <div className="filterTitle">날씨</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  // maxWidth: "420px",
                }}
              >
                {weatherExample.map((item, key) => {
                  const isCardClicked = clickWeatherBtn.includes(key); // 해당 카드가 클릭되었는지 확인

                  return (
                    <ConceptCard
                      key={key}
                      onClick={() => {
                        // 카드 클릭 시 클릭된 카드의 상태를 업데이트
                        if (isCardClicked) {
                          // 이미 클릭된 경우 클릭 상태에서 제거
                          setClickWeatherBtn(
                            clickWeatherBtn.filter((cardKey) => cardKey !== key)
                          );
                        } else {
                          // 클릭되지 않은 경우 클릭 상태에 추가
                          setClickWeatherBtn([...clickWeatherBtn, key]);
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
            </PCWeather>
            <PCTheme>
              <div className="filterTitle">테마</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  // maxWidth: "420px",
                }}
              >
                {themeExample.map((item, key) => {
                  const isCardClicked = clickThemeBtn.includes(key); // 해당 카드가 클릭되었는지 확인

                  return (
                    <ConceptCard
                      key={key}
                      onClick={() => {
                        // 카드 클릭 시 클릭된 카드의 상태를 업데이트
                        if (isCardClicked) {
                          // 이미 클릭된 경우 클릭 상태에서 제거
                          setClickThemeBtn(
                            clickThemeBtn.filter((cardKey) => cardKey !== key)
                          );
                        } else {
                          // 클릭되지 않은 경우 클릭 상태에 추가
                          setClickThemeBtn([...clickThemeBtn, key]);
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
            </PCTheme>
          </PCConceptFilter>
        </FilterTab>

        <RightCon>
          <TopTitle>
            <div className="result">총 8건의 검색 결과</div>
            <SortFilter>
              <div className="icon">
                <Sorting />
              </div>
              <div className="sortCon">최신순</div>
            </SortFilter>
          </TopTitle>
          <MobileCard>
            <CultureCardList>
              <WhereCard
                onClick={() => {
                  // setOpenNotLogin(true);
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/sample1.png"
                    alt="어디가지 검색결과 이미지"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 60%",
                    }}
                    className="img"
                  ></Image>
                </div>
                <WhereTitle>
                  <div className="name">망원한강공원</div>
                  <div className="address">마포구 망원동</div>
                </WhereTitle>
              </WhereCard>
              <WhereCard
                onClick={() => {
                  push("/where/1");
                  // setOpenNotLogin(true);
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/sample2.png"
                    alt="어디가지 검색결과 이미지"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 60%",
                    }}
                    className="img"
                  ></Image>
                </div>
                <WhereTitle>
                  <div className="name">망원한강공원</div>
                  <div className="address">마포구 망원동</div>
                </WhereTitle>
              </WhereCard>
              <WhereCard
                onClick={() => {
                  // setOpenNotLogin(true);
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/sample3.png"
                    alt="어디가지 검색결과 이미지"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 60%",
                    }}
                    className="img"
                  ></Image>
                </div>
                <WhereTitle>
                  <div className="name">뉴스뮤지엄</div>
                  <div className="address">마포구 연남동</div>
                </WhereTitle>
              </WhereCard>
            </CultureCardList>
          </MobileCard>

          <PCCard>
            <WhereCardContainer>
              <WherePCCard
                onClick={() => {
                  push("/where/1");
                }}
              >
                <Image
                  src="/images/sample1.png"
                  alt="where-card"
                  width={140}
                  height={140}
                ></Image>
                <Infomation>
                  <Title>
                    <div>어노브 연남</div>
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
                  <WrapLocation>
                    <Road>
                      <div>
                        <Location />
                      </div>
                      <div>서울 마포구 동교로 248-1 2층</div>
                    </Road>
                    <div className="street">
                      <span>지번</span>연남동 228-48
                    </div>
                  </WrapLocation>
                  <WrapTag>
                    <div>#모던한</div>
                    <div>#연인과</div>
                    <div>#깔끔한</div>
                  </WrapTag>
                </Infomation>
              </WherePCCard>
              <WherePCCard
                onClick={() => {
                  push("/where/1");
                }}
              >
                <Image
                  src="/images/sample1.png"
                  alt="where-card"
                  width={140}
                  height={140}
                ></Image>
                <Infomation>
                  <Title>
                    <div>어노브 연남</div>
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
                  <WrapLocation>
                    <Road>
                      <div>
                        <Location />
                      </div>
                      <div>서울 마포구 동교로 248-1 2층</div>
                    </Road>
                    <div className="street">
                      <span>지번</span>연남동 228-48
                    </div>
                  </WrapLocation>
                  <WrapTag>
                    <div>#모던한</div>
                    <div>#연인과</div>
                    <div>#깔끔한</div>
                  </WrapTag>
                </Infomation>
              </WherePCCard>
              <WherePCCard
                onClick={() => {
                  push("/where/1");
                }}
              >
                <Image
                  src="/images/sample1.png"
                  alt="where-card"
                  width={140}
                  height={140}
                ></Image>
                <Infomation>
                  <Title>
                    <div>어노브 연남</div>
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
                  <WrapLocation>
                    <Road>
                      <div>
                        <Location />
                      </div>
                      <div>서울 마포구 동교로 248-1 2층</div>
                    </Road>
                    <div className="street">
                      <span>지번</span>연남동 228-48
                    </div>
                  </WrapLocation>
                  <WrapTag>
                    <div>#모던한</div>
                    <div>#연인과</div>
                    <div>#깔끔한</div>
                  </WrapTag>
                </Infomation>
              </WherePCCard>
              <WherePCCard
                onClick={() => {
                  push("/where/1");
                }}
              >
                <Image
                  src="/images/sample1.png"
                  alt="where-card"
                  width={140}
                  height={140}
                ></Image>
                <Infomation>
                  <Title>
                    <div>어노브 연남</div>
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
                  <WrapLocation>
                    <Road>
                      <div>
                        <Location />
                      </div>
                      <div>서울 마포구 동교로 248-1 2층</div>
                    </Road>
                    <div className="street">
                      <span>지번</span>연남동 228-48
                    </div>
                  </WrapLocation>
                  <WrapTag>
                    <div>#모던한</div>
                    <div>#연인과</div>
                    <div>#깔끔한</div>
                  </WrapTag>
                </Infomation>
              </WherePCCard>
              {/* 여러 WhereCard 컴포넌트 추가 */}
            </WhereCardContainer>
          </PCCard>
        </RightCon>
      </WrapContents>
    </Container>
  );
};
export default WhereSearch;

const SearchBar = styled.div`
  display: flex;
  position: relative;

  .search {
    cursor: pointer;
    position: absolute;
    top: 15px;
    left: 12px;
  }
  @media (min-width: 1000px) {
    margin-top: 51px;
  }
`;

const ResetBtn = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  min-width: fit-content;
  background-color: #e2e2e2;
  border-radius: 5px;
  align-items: center;
  padding: 6px 8px;
  .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 4px;
  }
`;
const SelectConceptCard = styled.div`
  display: flex;
  font-size: 14px;
  cursor: pointer;
  min-width: fit-content;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-items: center;
  padding: 6px;

  .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 4px;
  }
`;
const CheckBtn = styled.div`
  min-width: 50px;
  height: 48px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  text-align: center;
  line-height: 48px;
  color: #bcbcbc;
  font-size: 15px;
  cursor: pointer;
  margin-left: 6px;
`;
const WrapContents = styled.div`
  // width: 100%;
  gap: 39px;
  display: flex;
  justify-content: space-between;
  .filterTitle {
    font-weight: bold;
    padding-bottom: 16px;
  }
`;
const FilterTab = styled.div`
  width: fit-content;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const PCFilterKeyword = styled.div`
  padding-top: 20px;
  > div {
    .food {
      cursor: pointer;
      gap: 10px;
      display: flex;
      line-height: 20px;
    }
    .cafe {
      cursor: pointer;
      padding: 20px 0;
      gap: 10px;
      display: flex;
      line-height: 20px;
    }
    .culture {
      cursor: pointer;
      gap: 10px;
      display: flex;
      line-height: 20px;
    }
  }
`;

const PCConceptFilter = styled.div`
  max-width: 291px;
`;
const ConceptCard = styled.div`
  cursor: pointer;
  min-width: fit-content;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 6px;
  font-size: 13px;
  text-align: center;
`;
const PCWeather = styled.div`
  padding: 46px 0;
`;
const PCTheme = styled.div``;
const RightCon = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
  }
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Map = styled.div`
  position: relative;
  margin-top: 90px;
`;
const OpenMap = styled.div`
  width: 150px;
  height: 43px;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  position: absolute;
  top: 65px;
  left: 75px;
  font-size: 12px;
`;
const MapImage = styled.div``;
const Filter = styled.div`
  padding: 53px 0 10px 0;
  border-bottom: 1px solid #000;
`;
const MobileCard = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;
const CultureCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px; /* 각 카드 사이의 간격 */
  // max-width: 1200px; /* 최대 너비 설정 */
`;
const WhereTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.6)
  );
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;

  div {
    font-size: 15px;
    line-height: 28px;
    color: #000;
  }
  .name {
    width: fit-content;
    padding-left: 8px;
  }
  .address {
    padding-right: 8px;
  }
`;
const PCCard = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
const TopTitle = styled.div`
  // background-color: #ddd;
  max-height: 33px;
  display: flex;

  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #000;
  .result {
    font-size: 16px;
    line-height: 33px;
  }
  @media (min-width: 1000px) {
    margin-top: 50px;
  }
`;
const WhereCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .icon {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
const Infomation = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  width: 100%;
`;
const WherePCCard = styled.div`
  min-width: 457px;
  cursor: pointer;
  display: flex;
  border-radius: 5px;
  background: #fff;
  padding: 21px;
  gap: 21px;
  box-shadow: 1px 1px 8px 1px rgba(89, 89, 89, 0.25);
  img {
    min-width: 140px;
    min-height: 140px;
  }
`;
const WhereCard = styled.div`
  width: 100%;
  position: relative;
  padding-top: 14px;
  cursor: pointer;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 50%;
    border-radius: 5px; /* 이미지의 모서리도 둥글게 설정 */
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 36px; /* 그라데이션의 높이 조절 */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), #cacaca);
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
const Road = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 5px;
`;
const WrapTag = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
  div {
    min-width: fit-content;
    border-radius: 30px;
    border: 1px solid #000;
    padding: 6px 12px;
    background: #fff;
    font-size: 14px;
  }
`;
const SortFilter = styled.div`
  padding: 7px 13px 7px 38px;
  border-radius: 20px;
  border: 1px solid #adadad;
  position: relative;
  color: #000;
  font-size: 16px;
  text-align: right;
  .sortCon {
  }
  .icon {
    position: absolute;
    top: 6px;
    left: 13px;
  }
`;
