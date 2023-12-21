import BackHeader from "@/components/BackHeader";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Input from "@/components/Input";
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
      <Container>
        <WrapCon>
          <div>
            <BackHeader title="회원가입" />
          </div>
          <div>
            <label style={{ fontSize: "12px" }}>닉네임</label>
            <Nickname>
              <Input type="text" id="nickname"></Input>
              <CheckBtn>중복확인</CheckBtn>
            </Nickname>
          </div>
          <div>
            <label style={{ fontSize: "12px" }}>아이디(이메일)</label>
            <Input type="email" id="id"></Input>
          </div>
          <WrapPassword>
            <label style={{ fontSize: "12px" }}>비밀번호</label>
            <Input type="passsword" id="pw"></Input>
            <div
              className="show"
              onClick={() => {
                setVisiblePassword(!visiblePassword);
              }}
            >
              <ShowEyes />
            </div>
          </WrapPassword>
          <div>
            <label style={{ fontSize: "12px" }}>비밀번호 확인</label>
            <Input
              type={visiblePassword ? "text" : "password"}
              id="pwCheck"
            ></Input>
          </div>
        </WrapCon>
      </Container>
    </>
  );
};

export default Signup;

const WrapCon = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Nickname = styled.div`
  display: flex;
  gap: 10px;
`;
const WrapPassword = styled.div`
  position: relative;
  .show {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 10px;
  }
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
