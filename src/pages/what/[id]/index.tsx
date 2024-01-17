import Container from "@/components/Container";
import NaverMap from "@/components/Map/NaverMap";
import {
  Cafe,
  CopyAddress,
  Food,
  HashTag,
  Hobby,
  Location,
  ReveiwPencil,
} from "@/components/icons";
import useGetWhatDetailPost from "@/hooks/what/detail/useGetWhatDetailPost";
import Image from "next/image";
import { useRouter } from "next/router";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const WhatDetail = () => {
  const { query } = useRouter();
  console.log({ query });
  const postId = query?.id !== undefined ? String(query.id) : undefined;

  const data = useGetWhatDetailPost(postId);

  const { title, restaurant, cafe, leisure } = data || {};
  //소수점 삽입 위한 로직
  // const convertrestaurantLat = parseFloat(
  //   restaurant?.restaurantLat / 10000000
  // ).toFixed(7);
  // const convertrestaurantLng = parseFloat(
  //   restaurant?.restaurantLng / 10000000
  // ).toFixed(7);

  //지도에 다중마커 표시
  const multiMarkers = [
    {
      lat: restaurant?.restaurantLat,
      lng: restaurant?.restaurantLng,
      name: restaurant?.restaurantName,
      category: "restaurant",
    },
    {
      lat: cafe?.cafeLat,
      lng: cafe?.cafeLng,
      name: cafe?.cafeName,
      category: "cafe",
    },
    {
      lat: leisure?.leisureLat,
      lng: leisure?.leisureLng,
      name: leisure?.leisureName,
      category: "leisure",
    },
  ]
    .filter((marker) => marker.lat !== undefined && marker.lng !== undefined)
    .map((marker) => ({
      lat: marker.lat!,
      lng: marker.lng!,
      name: marker.name!,
      category: marker.category!,
    }));

  // const markersName = [
  //   { name: restaurant?.restaurantName },
  //   { name: cafe?.cafeName },
  //   { name: leisure?.leisureName },
  // ];
  // console.log(markersName);
  //지번주소 복사
  const restaurantAddressToCopy = restaurant?.restaurantAddress || "";
  const cafeAddressToCopy = cafe?.cafeAddress || "";
  const leisureAddressToCopy = leisure?.leisureAddress || "";
  //도로명주소 복사
  const restaurantRoadAddressToCopy = restaurant?.restaurantRoadAddress || "";
  const cafeRoadAddressToCopy = cafe?.cafeRoadAddress || "";
  const leisureRoadAddressToCopy = leisure?.leisureRoadAddress || "";

  const handleCopy = () => {
    alert("복사 완료");
  };
  if (!data) {
    return <div>로딩중...</div>;
  }
  return (
    <Container>
      {data && (
        <WrapCon>
          <MainTitle>{title}</MainTitle>
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
              나무늘보 | 2023.10.25
            </Writer>

            <EditBtn>
              <div>수정</div>|<div>삭제</div>
            </EditBtn>
          </WrapWriteInfo>
          {/* map */}
          <Map>
            {/* 우선 음식점 위치 보여주기 */}
            <NaverMap markers={multiMarkers} />
            {/* <NaverMapComponent /> */}
            {/* <NavermapsProvider
              ncpClientId="d806azldce"
              // or finClientId, govClientId
            ></NavermapsProvider> */}

            {/* <img src="/images/sample8.png" alt="상세 위치 정보 지도"></img> */}
          </Map>

          <WrapReviewCard>
            {restaurant && (
              <WherePCCard>
                <Infomation>
                  <Title>
                    <Food />
                    <div>{restaurant.restaurantName}</div>
                  </Title>
                  <Content>
                    <WrapLocation>
                      <Road>
                        <div>
                          <Location />
                        </div>
                        <div>{restaurantRoadAddressToCopy}</div>
                        <Copy>
                          <CopyToClipboard
                            text={restaurantRoadAddressToCopy}
                            onCopy={handleCopy}
                          >
                            <div className="copyIcon">
                              <CopyAddress />
                            </div>
                          </CopyToClipboard>
                          <CopyToClipboard
                            text={restaurantRoadAddressToCopy}
                            onCopy={handleCopy}
                          >
                            <div>주소복사</div>
                          </CopyToClipboard>
                        </Copy>
                      </Road>
                      <Address>
                        <span>지번</span>
                        <div className="info">
                          <div>{restaurant.restaurantAddress}</div>
                          <Copy>
                            <CopyToClipboard
                              text={restaurantAddressToCopy}
                              onCopy={handleCopy}
                            >
                              <div className="copyIcon">
                                <CopyAddress />
                              </div>
                            </CopyToClipboard>
                            <CopyToClipboard
                              text={restaurantAddressToCopy}
                              onCopy={handleCopy}
                            >
                              <div>주소복사</div>
                            </CopyToClipboard>
                          </Copy>
                        </div>
                      </Address>
                    </WrapLocation>
                    <WrapHashTag>
                      <div className="icon">
                        <HashTag />
                      </div>
                      {restaurant?.restaurantTags?.map((item) => {
                        return (
                          <Tag key={item.length}>
                            <div>{item}</div>
                          </Tag>
                        );
                      })}
                    </WrapHashTag>
                    <WhatDetailImg>
                      <div>
                        <Image
                          src={restaurant?.restaurantImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                      <div>
                        <Image
                          src={restaurant?.restaurantImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                      <div>
                        <Image
                          src={restaurant?.restaurantImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                    </WhatDetailImg>
                    <Comment>
                      <ReveiwPencil />
                      <div>{restaurant.restaurantComment}</div>
                    </Comment>
                  </Content>
                </Infomation>
              </WherePCCard>
            )}
            {cafe && (
              <WherePCCard>
                <Infomation>
                  <Title>
                    <Cafe />
                    <div>{cafe?.cafeName}</div>
                  </Title>
                  <Content>
                    <WrapLocation>
                      <Road>
                        <div>
                          <Location />
                        </div>
                        <div>{cafeRoadAddressToCopy}</div>
                        <Copy>
                          <CopyToClipboard
                            text={cafeRoadAddressToCopy}
                            onCopy={handleCopy}
                          >
                            <div className="copyIcon">
                              <CopyAddress />
                            </div>
                          </CopyToClipboard>
                          <CopyToClipboard
                            text={cafeRoadAddressToCopy}
                            onCopy={handleCopy}
                          >
                            <div>주소복사</div>
                          </CopyToClipboard>
                        </Copy>
                      </Road>
                      <Address>
                        <span>지번</span>
                        <div className="info">
                          <div>{cafe.cafeAddress}</div>
                          <Copy>
                            <CopyToClipboard
                              text={cafeAddressToCopy}
                              onCopy={handleCopy}
                            >
                              <div className="copyIcon">
                                <CopyAddress />
                              </div>
                            </CopyToClipboard>
                            <CopyToClipboard
                              text={cafeAddressToCopy}
                              onCopy={handleCopy}
                            >
                              <div>주소복사</div>
                            </CopyToClipboard>
                          </Copy>
                        </div>
                      </Address>
                    </WrapLocation>
                    <WrapHashTag>
                      <div className="icon">
                        <HashTag />
                      </div>
                      {cafe?.cafeTags?.map((item) => {
                        return (
                          <Tag key={item.length}>
                            <div>{item}</div>
                          </Tag>
                        );
                      })}
                    </WrapHashTag>
                    <WhatDetailImg>
                      <div>
                        <Image
                          src={cafe?.cafeImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                      <div>
                        <Image
                          src={cafe?.cafeImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                      <div>
                        <Image
                          src={cafe?.cafeImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                    </WhatDetailImg>
                    <Comment>
                      <ReveiwPencil />
                      <div>{cafe.cafeComment}</div>
                    </Comment>
                  </Content>
                </Infomation>
              </WherePCCard>
            )}
            {leisure && (
              <WherePCCard>
                <Infomation>
                  <Title>
                    <Hobby />
                    <div>{leisure?.leisureName}</div>
                  </Title>
                  <Content className="lastCon">
                    <WrapLocation>
                      <Road>
                        <div>
                          <Location />
                        </div>
                        <div>{leisureRoadAddressToCopy}</div>
                        <Copy>
                          <CopyToClipboard
                            text={leisureRoadAddressToCopy}
                            onCopy={handleCopy}
                          >
                            <div className="copyIcon">
                              <CopyAddress />
                            </div>
                          </CopyToClipboard>
                          <CopyToClipboard
                            text={leisureRoadAddressToCopy}
                            onCopy={handleCopy}
                          >
                            <div>주소복사</div>
                          </CopyToClipboard>
                        </Copy>
                      </Road>
                      <Address>
                        <span>지번</span>
                        <div className="info">
                          <div>{leisure.leisureAddress}</div>
                          <Copy>
                            <CopyToClipboard
                              text={leisureAddressToCopy}
                              onCopy={handleCopy}
                            >
                              <div className="copyIcon">
                                <CopyAddress />
                              </div>
                            </CopyToClipboard>
                            <CopyToClipboard
                              text={leisureAddressToCopy}
                              onCopy={handleCopy}
                            >
                              <div>주소복사</div>
                            </CopyToClipboard>
                          </Copy>
                        </div>
                      </Address>
                    </WrapLocation>
                    <WrapHashTag>
                      <div className="icon">
                        <HashTag />
                      </div>
                      {leisure?.leisureTags?.map((item) => {
                        return (
                          <Tag key={item.length}>
                            <div>{item}</div>
                          </Tag>
                        );
                      })}
                    </WrapHashTag>
                    <WhatDetailImg>
                      <div>
                        <Image
                          src={leisure?.leisureImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                      <div>
                        <Image
                          src={leisure?.leisureImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                      <div>
                        <Image
                          src={leisure?.leisureImages}
                          width={264}
                          height={264}
                          alt="이미지1"
                          className="img"
                        ></Image>
                      </div>
                    </WhatDetailImg>
                    <Comment>
                      <ReveiwPencil />
                      <div>{leisure.leisureComment}</div>
                    </Comment>
                  </Content>
                </Infomation>
              </WherePCCard>
            )}
          </WrapReviewCard>
        </WrapCon>
      )}
    </Container>
  );
};
export default WhatDetail;

const WrapCon = styled.div`
  padding: 34px 0;
`;

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Title = styled.div`
  display: flex;
  gap: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
  font-weight: bold;
`;
const WrapWriteInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #b6b6b6;
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #000;
`;

const Writer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
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
const EditBtn = styled.div`
  div {
    cursor: pointer;
  }
  display: flex;
  gap: 5px;
`;
const WrapReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  padding: 20px 0;
`;
const WherePCCard = styled.div`
  min-width: 457px;
  display: flex;

  /* gap: 21px; */
  img {
    min-width: 140px;
    min-height: 140px;
  }
  .lastCon {
    padding-bottom: 0;
  }
`;

const WrapIcon = styled.div`
  width: 40px;
  background-color: beige;
`;
const Infomation = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 16px; */
  width: 100%;
`;
const Content = styled.div`
  margin-left: 18px;
  padding: 16px 0 30px 34px;
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  /* background-color: cadetblue; */
  border-left: 4px dashed #ffc700;
  box-sizing: border-box;
`;
const Road = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 5px;
`;
const Address = styled.div`
  display: flex;
  padding-left: 23px;
  .info {
    display: flex;
    gap: 8px;
  }
`;
const WrapLocation = styled.div`
  span {
    padding-right: 10px;
    color: #8eb2f8;
  }
`;

const Copy = styled.div`
  display: flex;
  gap: 3px;
  color: #949494;
  font-size: 12px;
  cursor: pointer;
  .copyIcon {
    display: flex;
    align-items: center;
    flex-direction: column;
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
const WrapHashTag = styled.div`
  display: flex;
  gap: 8px;
  .icon {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;
const WhatDetailImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  div {
    flex: 1;
    max-width: calc(
      33.33% - 10px
    ); /* 각 이미지에 대해 33.33% 너비 지정 및 간격은 10px */
  }
  .img {
    width: 100%;
    max-width: 100%; /* 부모 컨테이너의 너비에 맞게 조정 */
    height: auto; /* 가로세로 비율을 유지하면서 조정 */
    border-radius: 8px; /* 더 나은 외관을 위해 border-radius 추가 */
  }
  div:nth-of-type(1) {
    border-left: none;
  }
  @media (max-width: 600px) {
    img {
      width: 100%;
      object-fit: cover;
    }
    img:nth-of-type(2) {
      display: none;
    }
    img:nth-of-type(3) {
      display: none;
    }
  }
`;

const Comment = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #000;
`;
const Map = styled.div`
  margin-top: 16px;
  img {
    width: 100%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
