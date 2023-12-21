import FloatButton from "@/components/Button/FloatButton";
import ModalBottomButton from "@/components/Button/ModalBottomButton";
import SquareButton from "@/components/Button/SquareButton";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Input from "@/components/Input";
import LoginCheckModal from "@/components/Modal/LoginCheckModal";
import Navigation from "@/components/Navigation";
import {
  Checkbox,
  Duck,
  Search,
  SelectedOff,
  SelectedOn,
  SmallHeart,
  UnCheckbox,
} from "@/components/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Where = () => {
  //필터 모달
  const [openFilter, setOpenFilter] = useState(false);
  //비로그인 상태에서 상세 진입 시 로그인 확인 모달
  const [openNotLogin, setOpenNotLogin] = useState(false);
  //키워드 탭 상태 변경
  const [activeKeyword, setActiveKeyword] = useState("전체");
  //필터 키워드 체크박스 상태값
  const [checkbox, setCheckbox] = useState(false);

  //필터 검색 타입 셀렉트박스 상태값
  const [selectType, setSelectType] = useState(false);

  //필터 날씨 및 분위기 선택
  const [clickConceptBtn, setClickConceptBtn] = useState<number[]>([]);
  const [clickThemeBtn, setClickThemeBtn] = useState<number[]>([]);
  const [clickWeatherBtn, setClickWeatherBtn] = useState<number[]>([]);

  const conceptExample = [
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
    "흐린",
    "맑은",
    "눈내리는",
    "비오는",
    "봄",
    "여름",
    "가을",
    "겨울",
  ];

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
  const { push } = useRouter();

  return (
    <>
      <Container>
        {/* mobile 필터 모달 */}
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
              </Keyword>
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
                setIsOpen={setOpenFilter}
                okLabel="로그인"
                cancelLabel="닫기"
                moveOkPath="/login"
              />
            </FilterModal>
          </>
        )}
        {/* mobile */}
        <SearchBar>
          <Input
            type="text"
            id="id"
            style={{ paddingLeft: "40px", fontSize: "14px" }}
            placeholder="장소명을 입력해주세요."
          ></Input>
          <div
            className="search"
            onClick={() => {
              push("/where/search");
            }}
          >
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
        {/* PC */}
        <WrapCon>
          <SearchFilter>
            <PCTitle>
              <span>나무늘보</span> 님, 어디를 가보고 싶나요?
            </PCTitle>
            <PcFilter>
              <SearchType>
                <div>
                  <div
                    className="self"
                    onClick={() => {
                      setSelectType(!selectType);
                    }}
                  >
                    {selectType ? <SelectedOn /> : <SelectedOff />}
                    <div>직접 입력하여 검색</div>
                  </div>
                  <div
                    className="address"
                    onClick={() => {
                      setSelectType(!selectType);
                    }}
                  >
                    {selectType ? <SelectedOn /> : <SelectedOff />}
                    <div>주소로 검색</div>
                  </div>
                </div>
              </SearchType>
              <PCFilterKeyword>
                <div className="filterTitle">키워드(중복선택 가능)</div>
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
              <PCSearchBar>
                <Input
                  type="text"
                  id="id"
                  style={{ paddingLeft: "40px", fontSize: "14px" }}
                  placeholder="장소명을 입력해주세요."
                ></Input>
                <div className="search">
                  <Search />
                </div>
              </PCSearchBar>
              <PCConceptFilter>
                <div>
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
                                clickThemeBtn.filter(
                                  (cardKey) => cardKey !== key
                                )
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
                </div>
                <div>
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
                                clickWeatherBtn.filter(
                                  (cardKey) => cardKey !== key
                                )
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
                </div>
              </PCConceptFilter>
              <SearchBtn
                onClick={() => {
                  push("/where/search");
                }}
              >
                검색하기
              </SearchBtn>
            </PcFilter>
          </SearchFilter>
          <WrapHotPlace>
            <div className="title">요즘 핫한 장소 TOP 5</div>
            <HotplaceCardList>
              <HotplaceCard>
                <div>
                  <img
                    src="/images/sample1.png"
                    width="68px"
                    height="68px"
                  ></img>
                </div>
                <HotplaceText>
                  <p>카페</p>
                  <h1>1.Type 한강점</h1>
                  <TotalLike>
                    <SmallHeart />
                    <div>269</div>
                  </TotalLike>
                </HotplaceText>
              </HotplaceCard>
              <HotplaceCard>
                <div>
                  <img
                    src="/images/sample1.png"
                    width="68px"
                    height="68px"
                  ></img>
                </div>
                <HotplaceText>
                  <p>카페</p>
                  <h1>1.Type 한강점</h1>
                  <TotalLike>
                    <SmallHeart />
                    <div>269</div>
                  </TotalLike>
                </HotplaceText>
              </HotplaceCard>
              <HotplaceCard>
                <div>
                  <img
                    src="/images/sample1.png"
                    width="68px"
                    height="68px"
                  ></img>
                </div>
                <HotplaceText>
                  <p>카페</p>
                  <h1>1.Type 한강점</h1>
                  <TotalLike>
                    <SmallHeart />
                    <div>269</div>
                  </TotalLike>
                </HotplaceText>
              </HotplaceCard>
              <HotplaceCard>
                <div>
                  <img
                    src="/images/sample1.png"
                    width="68px"
                    height="68px"
                  ></img>
                </div>
                <HotplaceText>
                  <p>카페</p>
                  <h1>1.Type 한강점</h1>
                  <TotalLike>
                    <SmallHeart />
                    <div>269</div>
                  </TotalLike>
                </HotplaceText>
              </HotplaceCard>
              <HotplaceCard>
                <div>
                  <img
                    src="/images/sample1.png"
                    width="68px"
                    height="68px"
                  ></img>
                </div>
                <HotplaceText>
                  <p>카페</p>
                  <h1>1.Type 한강점</h1>
                  <TotalLike>
                    <SmallHeart />
                    <div>269</div>
                  </TotalLike>
                </HotplaceText>
              </HotplaceCard>
            </HotplaceCardList>
          </WrapHotPlace>
          <WrapWhereList>
            <KeywordTab>
              <div
                onClick={() => {
                  setActiveKeyword("전체");
                }}
                style={{
                  fontWeight: activeKeyword === "전체" ? "bold" : "normal",
                  color: activeKeyword === "전체" ? "#000" : "#bcbcbc",
                }}
              >
                전체
              </div>
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
            {/* 전체 */}
            {activeKeyword === "전체" && (
              <CultureCardList>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
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
                    <img
                      src="/images/sample2.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">망원한강공원</div>
                    <div className="address">마포구 망원동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample3.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">뉴스뮤지엄</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
              </CultureCardList>
            )}
            {/* 음식점 */}
            {activeKeyword === "음식점" && (
              <FoodCardList>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">아노브 연남</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">아노브 연남</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">아노브 연남</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">아노브 연남</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">아노브 연남</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample1.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">아노브 연남</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
              </FoodCardList>
            )}
            {/* 카페 */}
            {activeKeyword === "카페" && (
              <CafeCardList>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample2.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 80%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">목화씨라운지</div>
                    <div className="address">마포구 합정동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample2.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 80%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">목화씨라운지</div>
                    <div className="address">마포구 합정동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample2.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 80%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">앤트러사이트</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
              </CafeCardList>
            )}
            {/* 문화/여가 */}
            {activeKeyword === "문화/여가" && (
              <CultureCardList>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample3.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">망원한강공원</div>
                    <div className="address">마포구 망원동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample3.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">망원한강공원</div>
                    <div className="address">마포구 망원동</div>
                  </WhereTitle>
                </WhereCard>
                <WhereCard
                  onClick={() => {
                    setOpenNotLogin(true);
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
                    <img
                      src="/images/sample3.png"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 60%",
                      }}
                    ></img>
                  </div>
                  <WhereTitle>
                    <div className="name">뉴스뮤지엄</div>
                    <div className="address">마포구 연남동</div>
                  </WhereTitle>
                </WhereCard>
              </CultureCardList>
            )}
          </WrapWhereList>
        </WrapCon>
      </Container>
      {openNotLogin && (
        <LoginCheckModal
          setIsOpen={(value: boolean) => setOpenNotLogin(value)} // 모달에서 모달을 닫을 때 사용할 콜백
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
    top: 15px;
    left: 12px;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
const PCSearchBar = styled.div`
  display: flex;
  position: relative;
  margin-top: 16px;
  .search {
    cursor: pointer;
    position: absolute;
    top: 15px;
    left: 12px;
  }
`;
const PCTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const PcFilter = styled.div`
  position: relative;
  border: 1px solid #aeaeae;
  padding: 16px;
  margin: 16px 0;
  border-radius: 5px;

  .filterTitle {
    font-size: 12px;
    color: #858585;
    padding: 13px 0 7px 0;
  }
`;

// const PCSearchBar = styled.div`
//   display: flex;
//   position: relative;
//   .search {
//     cursor: pointer;
//     position: absolute;
//     top: 11px;
//     left: 12px;
//   }
// `;
const SearchFilter = styled.div`
  @media (max-width: 600px) {
    display: none;
    .title {
      font-size: 14px;
      font-weight: normal;
      color: #444;
    }
  }
  margin-top: 26px;
`;
// const Input = styled.input`
//   border: 1px solid #ffc700;
//   width: 100%;
//   height: 38px;
//   border-radius: 5px;
// `;
const CheckBtn = styled.div`
  min-width: 50px;
  height: 48px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  text-align: center;
  line-height: 48px;
  color: #bcbcbc;
  font-size: 14px;
  cursor: pointer;
  margin-left: 6px;
`;

const SearchBtn = styled.div`
  margin: 16px auto 0 auto;
  width: 159px;
  height: 38px;
  border-radius: 5px;
  color: #fff;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  background-color: #000;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #e0ae00;
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PCFilterKeyword = styled.div`
  font-size: 13px;
  > div {
    display: flex;
    gap: 20px;

    .food {
      cursor: pointer;
      gap: 10px;
      display: flex;
      line-height: 20px;
    }
    .cafe {
      cursor: pointer;
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
  display: flex;
  gap: 20px;
`;
const WrapCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const WrapHotPlace = styled.div``;
const WrapWhereList = styled.div``;

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
  gap: 10px;
  width: 183px;
  min-width: 183px;
  max-height: 68px;
  padding: 16px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
`;

const HotplaceText = styled.div`
  max-height: 68px;
  p {
    font-size: 12px;
    color: #888;
  }
  h1 {
    font-weight: bold;
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
  // padding-top: 18px;
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

const FoodCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  gap: 16px; /* 각 카드 사이의 간격 */
  // max-width: 1200px; /* 최대 너비 설정 */
`;
const CafeCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  gap: 16px; /* 각 카드 사이의 간격 */
  // max-width: 1200px; /* 최대 너비 설정 */
`;
const CultureCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  gap: 16px; /* 각 카드 사이의 간격 */
  // max-width: 1200px; /* 최대 너비 설정 */
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

const WhereTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  // background-color: rgba(203, 203, 203, 0.4);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.6)
  );
  // background-color: #000;
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
  // min-width: 360px; /* 최소 너비를 360px로 설정 */
  // max-width: 420px; /* 최대 너비를 420px로 설정 */
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
  padding-bottom: 20px;

  > div {
    display: flex;
    gap: 20px;

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

const KeywordCheckbox = styled.div`
  display: flex;
  gap: 20px;
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
`;

const Concept = styled.div`
  @media (max-width: 600px) {
    padding: 0 16px 16px 16px;
  }

  p {
    padding-bottom: 10px;
  }
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
const WrapFloatBtn = styled.div`
  position: absolute;
  bottom: 80px;
  right: 135px;
`;

const SearchType = styled.div`
  font-size: 13px;

  > div {
    display: flex;
    gap: 20px;
    .self {
      cursor: pointer;
      gap: 10px;
      display: flex;
      line-height: 17px;
    }
    .address {
      cursor: pointer;
      gap: 10px;
      display: flex;
      line-height: 17px;
    }
  }
`;
const WrapKeyword = styled.div``;
