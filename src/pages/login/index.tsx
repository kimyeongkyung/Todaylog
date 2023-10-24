import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Duck } from "@/components/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Login = () => {
  const { push } = useRouter();

  return (
    <>
      <Header />
      <Container>
        <h1>로그인</h1>
        <div>
          <label style={{ fontSize: "12px" }}>아이디(이메일)</label>
          <Input type="text" id="id"></Input>
        </div>
        <div>
          <label style={{ fontSize: "12px" }}>비밀번호</label>
          <Input type="text" id="id"></Input>
        </div>
        <LostPassword>
          비밀번호를 잊어버리셨나요?<span>비밀번호 찾기</span>
        </LostPassword>
        <WrapSocial>
          <div className="kakao">카카오로 계속하기</div>
          <div className="naver">네이버로 계속하기</div>
          <div className="google">구글로 계속하기</div>
          <Line></Line>
          <p>소셜 계정이 없으신가요?</p>
          <div
            className="signup"
            onClick={() => {
              push("/signup");
            }}
          >
            회원가입
          </div>
        </WrapSocial>
      </Container>
      <Navigation />
    </>
  );
};

export default Login;

const Container = styled.div`
  //   display: flex;
  min-height: 100vh;
  //   flex-direction: column;
  //   justify-content: space-between;
  padding: 16px;
  // 네비게이션 영역 확보
  margin-bottom: 50px;
  h1 {
    font-weight: bold;
    padding: 8px 0 38px 0;
  }
`;

const Input = styled.input`
  border: 1px solid #ffc700;
  width: 100%;
  height: 38px;
  border-radius: 5px;
  margin-top: 8px;
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
