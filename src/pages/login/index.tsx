import BackHeader from "@/components/BackHeader";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { Duck } from "@/components/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Login = () => {
  const { push } = useRouter();

  return (
    <>
      <Container>
        <WrapCon>
          <div>
            <BackHeader title="로그인" />
          </div>
          <WrapLogin>
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
          </WrapLogin>

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
        </WrapCon>
      </Container>
    </>
  );
};

export default Login;

const WrapCon = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const LostPassword = styled.div`
  font-size: 12px;
  color: #bcbcbc;
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
