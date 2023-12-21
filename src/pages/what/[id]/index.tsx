import Container from "@/components/Container";
import {
  Cafe,
  CopyAddress,
  Food,
  HashTag,
  Hobby,
  Location,
  ReveiwPencil,
} from "@/components/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const WhatDetail = () => {
  const textToCopy = "서울 마포구 동교로 248-1 2층";
  const handleCopy = () => {
    alert("복사 완료");
  };

  return (
    <Container>
      <WrapCon>
        <MainTitle>아노브 연남 | 목화씨라운지 | 망원한강공원 데이트</MainTitle>
        <WrapWriteInfo>
          <Writer>
            <div className="profileImg">
              <img src="/images/sample5.png" alt="profile"></img>
            </div>
            나무늘보 | 2023.10.25
          </Writer>
          <EditBtn>
            <div>수정</div>|<div>삭제</div>
          </EditBtn>
        </WrapWriteInfo>
        <WrapReviewCard>
          <WherePCCard>
            <Infomation>
              <Title>
                <Food />
                <div>어노브 연남</div>
              </Title>
              <Content>
                <WrapLocation>
                  <Road>
                    <div>
                      <Location />
                    </div>
                    <div>{textToCopy}</div>
                    <Copy>
                      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                        <div className="copyIcon">
                          <CopyAddress />
                        </div>
                      </CopyToClipboard>
                      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                        <div>주소복사</div>
                      </CopyToClipboard>
                    </Copy>
                  </Road>
                  <div className="street">
                    <span>지번</span>연남동 228-48
                  </div>
                </WrapLocation>
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
                <WhatDetailImg>
                  <img src="/images/sample1.png"></img>
                  <img src="/images/sample1.png"></img>
                  <img src="/images/sample1.png"></img>
                </WhatDetailImg>
                <Comment>
                  <ReveiwPencil />
                  <div>트러플피자 존맛탱임 꼭 드셈</div>
                </Comment>
              </Content>
            </Infomation>
          </WherePCCard>
          <WherePCCard>
            <Infomation>
              <Title>
                <Cafe />
                <div>목화씨라운지</div>
              </Title>
              <Content>
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

                <WrapHashTag>
                  <div className="icon">
                    <HashTag />
                  </div>
                  <Tag>
                    <div>조용한</div>
                    <div>혼자서</div>
                  </Tag>
                </WrapHashTag>
                <WhatDetailImg>
                  <img src="/images/sample2.png"></img>
                  <img src="/images/sample2.png"></img>
                  <img src="/images/sample2.png"></img>
                </WhatDetailImg>
                <Comment>
                  <ReveiwPencil />
                  <div>푸딩 존맛탱이구 평화로워서 책읽기도 너무 좋음</div>
                </Comment>
              </Content>
            </Infomation>
          </WherePCCard>
          <WherePCCard>
            <Infomation>
              <Title>
                <Hobby />
                <div>OGOC 공방</div>
              </Title>
              <Content className="lastCon">
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
                <WrapHashTag>
                  <div className="icon">
                    <HashTag />
                  </div>
                  <Tag>
                    <div>키치한</div>
                    <div>기념일</div>
                    <div>연인과</div>
                    <div>친구와</div>
                  </Tag>
                </WrapHashTag>
                <WhatDetailImg>
                  <img src="/images/sample3.png"></img>
                  <img src="/images/sample3.png"></img>
                  <img src="/images/sample3.png"></img>
                </WhatDetailImg>
                <Comment>
                  <ReveiwPencil />
                  <div>연인이나 친구와 잊지못할 추억 남기기 딱 좋음~</div>
                </Comment>
              </Content>
            </Infomation>
          </WherePCCard>
        </WrapReviewCard>
      </WrapCon>
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

const Comment = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  font-size: 14px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #000;
`;
