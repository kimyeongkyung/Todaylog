import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Duck, ShowEyes } from "@/components/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  //비밀번호 보이기
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <h1>회원가입 페이지입니다</h1>
        <label style={{ fontSize: "12px" }}>닉네임</label>
        <div className="checkInput">
          <Input type="text" id="nickname"></Input>
          <CheckBtn>중복확인</CheckBtn>
        </div>
        <div>
          <label style={{ fontSize: "12px" }}>아이디(이메일)</label>
          <Input type="email" id="id"></Input>
        </div>
        <div>
          <label style={{ fontSize: "12px" }}>비밀번호</label>
          <Input type="passsword" id="pw"></Input>
        </div>
        <div>
          <label style={{ fontSize: "12px" }}>비밀번호 확인</label>
          <Input
            type={visiblePassword ? "text" : "password"}
            id="pwCheck"
          ></Input>
          <div
            className="show"
            onClick={() => {
              setVisiblePassword(!visiblePassword);
            }}
          >
            <ShowEyes />
          </div>
        </div>
      </Container>
      <Navigation />
    </>
  );
};

export default Signup;

const Container = styled.div`
  //   display: flex;
  min-height: 100vh;
  //   flex-direction: column;
  //   justify-content: space-between;
  padding: 16px;
  // 네비게이션 영역 확보
  margin-bottom: 50px;
  > div {
    padding-bottom: 22px;
  }
  div:nth-of-type(4) {
    position: relative;
    .show {
      cursor: pointer;
      position: absolute;
      top: 30px;
      right: 10px;
    }
  }
  h1 {
    font-weight: bold;
    padding: 8px 0 38px 0;
  }
  .checkInput {
    display: flex;
  }
`;

const Input = styled.input`
  border: 1px solid #ffc700;
  width: 100%;
  height: 38px;
  border-radius: 5px;
  margin-top: 5px;
`;
const CheckBtn = styled.div`
  min-width: 68px;
  height: 38px;
  background-color: #ffc700;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin: 5px 0 0 10px;
`;

const LostPassword = styled.div`
  font-size: 12px;
  color: #bcbcbc;
  padding: 16px 0 32px 0;
  span {
    padding-left: 4px;
    text-decoration: underline;
  }
`;

const WrapSocial = styled.div`
  width: 100%;
  div {
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    margin-bottom: 12px;
    cursor: pointer;
  }
  p:nth-of-type(2) {
    font-size: 12px;
    color: #bcbcbc;
    padding: 16px 0 8px 0;
  }
  .kakao {
    background-color: #ffd600;
    color: #fff;
  }
  .naver {
    background-color: #5acc00;
    color: #fff;
  }
  .google {
    border: 1px solid #094e9f;
    color: #094e9f;
  }
  .signup {
    border: 1px solid #bcbcbc;
    color: #bcbcbc;
  }
`;

const Line = styled.p`
  border-top: 1px solid #bcbcbc;
`;
