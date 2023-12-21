import BackHeader from "@/components/BackHeader";
import Container from "@/components/Container";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Question = () => {
  const { push } = useRouter();

  return (
    <Container>
      <WrapMobile>
        <BackHeader title="문의하기" />
      </WrapMobile>
      {/* PC */}
      <WrapPC>
        <WrapTab>
          <Title>MYPAGE</Title>
          <div
            onClick={() => {
              push("/mypage");
            }}
          >
            회원정보 수정
          </div>
          <div
            onClick={() => {
              push("/mypage/mypost");
            }}
          >
            내가 쓴 게시글
          </div>
          <div
            onClick={() => {
              push("/mypage/bookmark");
            }}
          >
            북마크
          </div>
          <div
            className="clicked"
            onClick={() => {
              push("/mypage/question");
            }}
          >
            문의하기
          </div>
          <div>로그아웃</div>
        </WrapTab>
        <WrapContents>
          <Chapter>문의하기</Chapter>
          <Information></Information>
        </WrapContents>
      </WrapPC>
    </Container>
  );
};

export default Question;

const WrapMobile = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

const WrapPC = styled.div`
  padding-top: 34px;
  display: flex;
  gap: 52px;
  max-width: 1440px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const WrapTab = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  color: #aeaeae;
  font-family: Noto Sans;
  font-size: 14px;
  .clicked {
    color: #000;
    font-weight: bold;
  }
  div {
    cursor: pointer;
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  color: #000;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  border-bottom: 2px solid #000;
`;
const WrapContents = styled.div`
  width: 80%;
`;

const Information = styled.div`
  width: 360px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px auto;
`;
const Chapter = styled.div`
  display: flex;
  /* width: 100%; */
  height: 35px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  border-bottom: 2px solid #000;
`;
const CheckBtn = styled.div`
  min-width: 68px;
  height: 48px;
  background-color: #ffc700;
  border-radius: 5px;
  text-align: center;
  line-height: 48px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;
const Nickname = styled.div`
  display: flex;
  gap: 10px;
`;
