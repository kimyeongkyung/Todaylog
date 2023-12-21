import Input from "@/components/Input";
import { Camera } from "@/components/icons";
import React, { useState } from "react";
import styled from "styled-components";

const LastPlace = () => {
  const [clickKeyword, setClickKeyword] = useState<number[]>([]);
  const [clickThemeBtn, setClickThemeBtn] = useState<number[]>([]);
  const [clickWeatherBtn, setClickWeatherBtn] = useState<number[]>([]);

  const keywordList = ["음식점", "카페", "문화/여가"];

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
    <>
      <WrapKeyword>
        <div>
          <div className="label">키워드</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              maxWidth: "420px",
            }}
          >
            {keywordList.map((item, key) => {
              const isCardClicked = clickKeyword.includes(key); // 해당 카드가 클릭되었는지 확인
              return (
                <Keyword
                  key={key}
                  onClick={() => {
                    // 카드 클릭 시 클릭된 카드의 상태를 업데이트
                    if (isCardClicked) {
                      // 이미 클릭된 경우 클릭 상태에서 제거
                      setClickKeyword(
                        clickKeyword.filter((cardKey) => cardKey !== key)
                      );
                    } else {
                      // 클릭되지 않은 경우 클릭 상태에 추가
                      setClickKeyword([...clickKeyword, key]);
                    }
                  }}
                  style={{
                    backgroundColor: isCardClicked ? "#fcc700" : "#fff",
                    color: isCardClicked ? "#fff" : "#fcc700",
                  }}
                >
                  {item}
                </Keyword>
              );
            })}
          </div>
        </div>
        <div>
          <div className="label">주소</div>
          <Search>
            <Input
              type="text"
              id="id"
              style={{ fontSize: "14px" }}
              placeholder="장소명을 입력해주세요."
            ></Input>
            <CheckBtn onClick={() => {}}>필터</CheckBtn>
          </Search>
        </div>
        <div>
          <div className="label">사진 선택(최대 3장)</div>
          <WrapUpload>
            <UploadBtn>
              <label htmlFor="image">
                <div className="icon">
                  <Camera />
                </div>
              </label>
              <input type="file" id="image" />
            </UploadBtn>
            <Upload>
              <div className="photo1"></div>
              <div className="photo2"></div>
              <div className="photo3"></div>
            </Upload>
          </WrapUpload>
        </div>
        <div>
          <div className="label">리뷰</div>
          <ReviewTextarea
            placeholder="이 장소에 대해 간단하게 소개해주세요."
            maxLength={200}
          ></ReviewTextarea>
        </div>
        <div>
          <div className="label">해시태그(최대 3개)</div>
          <HashTag>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
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
          </HashTag>
        </div>
      </WrapKeyword>
    </>
  );
};

export default LastPlace;

const WrapKeyword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .label {
      font-size: 14px;
    }
  }
`;

const Keyword = styled.div`
  cursor: pointer;
  min-width: fit-content;
  padding: 5px 8px;
  border: 1px solid #ffc700;
  border-radius: 5px;
  color: #ffc700;
  font-size: 12px;
`;

const Search = styled.div`
  display: flex;
`;

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

const WrapUpload = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  /* justify-content: baseline; */
`;
const UploadBtn = styled.div`
  height: 100px;

  label {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 3px;
    background-color: #000;
    .icon {
      display: inline-block;
      align-items: center;
      position: absolute; /* 상위 컨테이너에 대해 절대적으로 설정 */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const Upload = styled.div`
  display: flex;
  gap: 20px;

  div {
    width: 100px;
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
  }
`;

const ReviewTextarea = styled.textarea`
  border: 1px solid #d9d9d9;
  width: 100%;
  border-radius: 3px;
  height: 100px;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
`;
const WrapTag = styled.div``;

const HashTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
