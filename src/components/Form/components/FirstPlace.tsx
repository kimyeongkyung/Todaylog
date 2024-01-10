import Input from "@/components/Input";
import {
  Camera,
  DeletePhoto,
  NextChapter,
  PrevChapter,
} from "@/components/icons";
import UploadImage from "@/components/image/UploadImage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import styled from "styled-components";

interface SelectPlaceType {
  title: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}
const FirstPlace = ({
  handleNextStep,
  handlePrevStep,
  setFormData,
}: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  setFormData: (data: any) => void;
}) => {
  const [clickKeyword, setClickKeyword] = useState<string[]>([]);
  const [clickThemeBtn, setClickThemeBtn] = useState<number[]>([]);
  const [clickWeatherBtn, setClickWeatherBtn] = useState<number[]>([]);
  // const [images, setImages] = useState<File[]>(
  //   JSON.parse(localStorage.getItem("selectedFirstImages")) || []
  // ); // 이미지 상태 추가
  const [images, setImages] = useState<string[]>([]);

  const [selectedKeyword, setSelectedKeyword] = useState<string>(
    localStorage.getItem("selectedFirstKeyword") || ""
  );

  const [placeName, setPlaceName] = useState("");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태
  const [selectedPlace, setSelectedPlace] = useState({
    placeName: "",
    address: "",
    roadAddress: "",
    mapx: "",
    mapy: "",
  });
  const [comment, setComment] = useState({});
  const [selectedHashTags, setSelectedHashTags] = useState<string[]>(
    JSON.parse(localStorage.getItem("selectedFirstHashTags")) || []
  );
  const { setValue, getValues, register } = useFormContext();

  // 키워드가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("selectedFirstKeyword", selectedKeyword);
  }, [selectedKeyword]);

  // 이미지가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("selectedFirstImages", JSON.stringify(images));
  }, [images]);
  console.log(images);
  // 해시태그가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(
      "selectedFirstHashTags",
      JSON.stringify(selectedHashTags)
    );
  }, [selectedHashTags]);

  // 장소 검색 - 네이버 오픈 api
  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:4000/searchPlace", {
        placeName: query,
      });
      console.log(response.data.places);
      setSearchResults(response.data.places);
    } catch (error) {
      console.error("Error searching for place:", error);
    }
  };

  const handlePlaceSelection = (result: SelectPlaceType) => {
    console.log(result);
    const { title, address, roadAddress, mapx, mapy } = result;
    const placeName = title.replace(/<[^>]*>/g, "");
    // 사용자가 장소를 선택했을 때 실행되는 함수
    setSelectedPlace({
      placeName,
      address,
      roadAddress,
      mapx, // 변경된 부분
      mapy,
    });
    setQuery(placeName); // 선택한 장소의 title을 인풋에 설정

    // 선택한 장소를 콘솔에 출력
    console.log("Selected place:", {
      placeName,
      address,
      roadAddress,
      mapx,
      mapy,
    });
    // 검색결과 리스트를 숨김
    setSearchResults([]);
  };

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

  const handleKeywordClick = (keyword: string) => {
    // 선택한 키워드의 개수가 1개 미만인 경우에만 선택 추가 또는 해제
    setSelectedKeyword(keyword === selectedKeyword ? "" : keyword);
  };

  const handleHashTagClick = (tag: string) => {
    // 선택한 해시태그의 개수가 3개 미만인 경우에만 선택 추가
    // 이미 선택된 경우 선택 해제
    if (selectedHashTags.includes(tag)) {
      setSelectedHashTags((prevTags) =>
        prevTags.filter((prevTag) => prevTag !== tag)
      );
    } else {
      // 선택된 태그의 개수가 3개 미만인 경우에만 선택 추가
      if (selectedHashTags.length < 3) {
        // 선택되지 않은 경우 선택 추가
        setSelectedHashTags((prevTags) => [...prevTags, tag]);
      }
    }
  };
  const handleImageDelete = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleImageChange = (uploadedImages: string[]) => {
    setImages([...images, ...uploadedImages]);
  };
  // 이미지 미리보기를 위한 useEffect
  // useEffect(() => {
  //   if (images.length > 0) {
  //     // 이미지가 업로드되면 첫 번째 이미지의 URL을 설정
  //     setImages(images[0]);
  //   }
  // }, [images]);

  const handleNext = () => {
    // 여기서 필요한 데이터 수집
    const newPlaceData = {
      // placeData의 기존 정보 + 새로운 정보들...
      //키워드
      keyword: selectedKeyword,
      images,
      comment,
      // 장소명, 주소값 전달 -> 백엔드에서 주소값을 좌표로 변환 -> 상세페이지에서 지도로 표시
      placeName: selectedPlace.placeName,
      address: selectedPlace.address,
      roadAddress: selectedPlace.roadAddress,
      //위도
      lat: selectedPlace.mapx,
      //경도
      lng: selectedPlace.mapy,
      tags: selectedHashTags,
      // location: {
      //   lat: selectedPlace.y,
      //   lng: selectedPlace.x,
      // },
    };
    console.log(newPlaceData);
    setValue("firstPlaceName", query);
    setFormData((prevData) => {
      console.log("끌고온 값:", prevData);
      return {
        ...prevData,
        placeInfo: { ...prevData.placeInfo, firstPlace: { ...newPlaceData } },
      };
    });
    localStorage.removeItem("selectedFirstKeyword");
    localStorage.removeItem("selectedFirstImages");
    localStorage.removeItem("selectedFirstHashTags");
  };

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
              const isSelected = selectedKeyword.includes(item);
              return (
                <Keyword
                  key={key}
                  onClick={() => handleKeywordClick(item)}
                  style={{
                    backgroundColor: isSelected ? "#fcc700" : "#fff",
                    color: isSelected ? "#fff" : "#fcc700",
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
              id="firstPlaceName"
              value={query}
              {...register("firstPlaceName")}
              style={{ fontSize: "14px" }}
              placeholder="장소명을 입력해주세요."
              // onChange={(e) => setPlaceName(e.target.value)}
              onChange={(e) => setQuery(e.target.value)}
            ></Input>
            <CheckBtn onClick={handleSearch}>검색</CheckBtn>{" "}
            {/* 검색 결과 표시 */}
            <WrapSearchResult showResults={searchResults.length > 0}>
              {searchResults?.length > 0 && (
                <>
                  {searchResults.map((result) => (
                    <div
                      onClick={() => handlePlaceSelection(result)}
                      key={result.id}
                      className="content"
                    >
                      <SearchResultTitle>
                        {result.title.replace(/<[^>]*>/g, "")}
                      </SearchResultTitle>
                      <SearchResultAddress>
                        {result.address}
                      </SearchResultAddress>
                    </div>
                  ))}
                </>
              )}
            </WrapSearchResult>
          </Search>

          {/* {searchResults?.length > 0 && (
            <SearchResults>
              {searchResults.map((result) => (
                <SearchResultItem
                  key={result.id}
                  onClick={() => handleNext(result)}
                >
                  {result.name} - {result.category}
                </SearchResultItem>
              ))}
            </SearchResults>
          )} */}
        </div>
        <div>
          <div className="label">사진 선택(최대 3장)</div>
          <WrapUpload>
            <UploadImage setImageList={handleImageChange} />
            <Upload>
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="photo"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  >
                    <div
                      className="delete-icon"
                      onClick={() => handleImageDelete(index)}
                    >
                      <DeletePhoto />
                    </div>
                  </div>
                );
              })}
            </Upload>
          </WrapUpload>
        </div>
        <div>
          <div className="label">리뷰</div>
          <ReviewTextarea
            placeholder="이 장소에 대해 간단하게 소개해주세요."
            maxLength={200}
            id="firstReview"
            // value={comment}
            {...register("firstReview")}
            onChange={(e) => setComment(e.target.value)}
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
                const isSelected = selectedHashTags.includes(item);
                return (
                  <ConceptCard
                    key={key}
                    onClick={() => handleHashTagClick(item)}
                    // onClick={() => {
                    //   // 카드 클릭 시 클릭된 카드의 상태를 업데이트
                    //   if (isCardClicked) {
                    //     // 이미 클릭된 경우 클릭 상태에서 제거
                    //     setClickThemeBtn(
                    //       clickThemeBtn.filter((cardKey) => cardKey !== key)
                    //     );
                    //   } else {
                    //     // 클릭되지 않은 경우 클릭 상태에 추가
                    //     setClickThemeBtn([...clickThemeBtn, key]);
                    //   }
                    // }}
                    style={{
                      backgroundColor: isSelected ? "#fcc700" : "#fff",
                      color: isSelected ? "#fff" : "#000",
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
                // const isCardClicked = clickWeatherBtn.includes(key); // 해당 카드가 클릭되었는지 확인
                const isCardClicked = clickWeatherBtn.includes(key);
                const isSelected = selectedHashTags.includes(item);
                return (
                  <ConceptCard
                    key={key}
                    // onClick={() => {
                    //   // 카드 클릭 시 클릭된 카드의 상태를 업데이트
                    //   if (isCardClicked) {
                    //     // 이미 클릭된 경우 클릭 상태에서 제거
                    //     setClickWeatherBtn(
                    //       clickWeatherBtn.filter((cardKey) => cardKey !== key)
                    //     );
                    //   } else {
                    //     // 클릭되지 않은 경우 클릭 상태에 추가
                    //     setClickWeatherBtn([...clickWeatherBtn, key]);
                    //   }
                    // }}
                    onClick={() => handleHashTagClick(item)}
                    style={{
                      backgroundColor: isSelected ? "#fcc700" : "#fff",
                      color: isSelected ? "#fff" : "#000",
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

      <WrapBtn>
        <button
          onClick={() => {
            handlePrevStep();
          }}
          style={{ backgroundColor: "#fff" }}
        >
          <PrevChapter />
        </button>
        <WrapLastBtn>
          <AddPlaceBtn
            onClick={() => {
              handleNext();
              // 다음 단계로 이동하는 로직
              handleNextStep();
            }}
            form="write-todaylog"
          >
            장소 추가
          </AddPlaceBtn>
          {/* 다음 단계로 넘어가지 않고 바로 저장 */}
          <SaveBtn
            onClick={() => {
              handleNext();
            }}
            form="write-todaylog"
          >
            발행
          </SaveBtn>
        </WrapLastBtn>
      </WrapBtn>
    </>
  );
};

export default FirstPlace;

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
  margin-bottom: 25px;
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
  gap: 10px;
  position: relative;
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
`;
const WrapSearchResult = styled.div`
  display: ${(props) => (props.showResults ? "flex" : "none")};
  flex-direction: column;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 200px; // 원하는 높이로 조정
  overflow-y: auto;
  border-bottom: 2px solid #ddd;
  border-right: 2px solid #ddd;
  border-left: 2px solid #ddd;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .content {
    cursor: pointer;
    padding: 10px 0 10px 16px;
    border-bottom: 1px solid #ddd;
    &:hover {
      background-color: rgba(204, 162, 48, 0.5); // 불투명한 블랙 색상으로 변경
      color: #fff; // 텍스트 색상 변경
    }
  }
`;
const SearchResultTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const SearchResultAddress = styled.div`
  font-size: 13px;
`;

const WrapUpload = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    gap: 10px;
  }
  box-sizing: border-box;
`;
const UploadBtn = styled.div`
  label {
    position: relative;
    display: inline-block;

    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 3px;
    background-color: #000;
    @media (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
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
  @media (max-width: 600px) {
    gap: 10px;
  }

  .photo {
    width: 100px;
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    background-size: cover; // 이미지를 비율 유지하며 가득 채우도록 설정
    background-position: center; // 이미지를 가운데 정렬
    @media (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
    position: relative;
    .delete-icon {
      position: absolute;
      top: 0;
      right: 5px;
      cursor: pointer;
    }
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
const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
  }
`;
const WrapLastBtn = styled.div`
  display: flex;
  gap: 10px;
`;
const PreviewBtn = styled.button`
  font-size: 14px;
  padding: 8px 0px;
  width: 76px;
  border: 1px solid #ffc700;
  color: #ffc700;
  border-radius: 5px;
  background-color: #fff;
`;
const SaveBtn = styled.button`
  font-size: 14px;
  padding: 8px 0px;
  width: 76px;
  border: 1px solid #ffc700;
  color: #ffc700;
  border-radius: 5px;
  background-color: #fff;
`;
const AddPlaceBtn = styled.button`
  font-size: 14px;
  padding: 8px 0px;
  width: 76px;
  color: #fff;
  border-radius: 5px;
  background-color: #ffc700;
`;
const SearchResults = styled.div`
  margin-top: 10px;
`;

const SearchResultItem = styled.div`
  cursor: pointer;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  margin-top: 5px;
  &:hover {
    background-color: #f5f5f5;
  }
`;
