import styled from "styled-components";
import { Duck, LogoMobile, Mypage, Write } from "../icons";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginCheckModal from "../Modal/LoginCheckModal";

const Header = () => {
  const { push, pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <WrapHeader>
          <WrapLogo
            onClick={() => {
              push("/");
            }}
          >
            <LogoMobile />
          </WrapLogo>
          <WrapTab>
            <div
              style={{ fontWeight: pathname === "/where" ? "bold" : "normal" }}
              onClick={() => {
                push("/where");
              }}
            >
              어디가지
            </div>
            <div
              style={{ fontWeight: pathname === "/what" ? "bold" : "normal" }}
              onClick={() => {
                push("/what");
              }}
            >
              오늘 뭐하지
            </div>
          </WrapTab>
        </WrapHeader>
        {/* mobile */}
        <LoginBtn
          onClick={() => {
            setIsOpen(true);
            // push("/login");
          }}
        >
          로그인
        </LoginBtn>
        {/* PC */}
        <PCWrapRightCon>
          <PCWriteBtn>
            <Write width="20px" height="20px" />
            <div className="text">글쓰기</div>
          </PCWriteBtn>
          <PCLoginBtn
            onClick={() => {
              setIsOpen(true);
              // push("/login");
            }}
          >
            <Mypage width="20px" height="20px" />
            <div className="text">로그인</div>
          </PCLoginBtn>
        </PCWrapRightCon>
        {/* <WrapProfile>
        <ProfileImg>
          <Duck />
        </ProfileImg>
        <div
          style={{ fontSize: "12px", paddingLeft: "5px", lineHeight: "30px" }}
        >
          나무늘보
        </div>
      </WrapProfile> */}
      </Container>
      {isOpen && (
        <LoginCheckModal
          setIsOpen={(value: boolean) => setIsOpen(value)} // 모달에서 모달을 닫을 때 사용할 콜백
        />
      )}
    </>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 2000;
  padding: 0px 16px;
  justify-content: space-between;
  background-color: #fff5df;
  box-sizing: border-box;
  width: 100%;
  min-width: 360px;
  margin: 0 auto;
  height: 52px;
  @media (min-width: 600px) {
    width: 100%; /* 너비를 100%로 설정하여 부모 요소의 크기에 따라 변화 */
    min-width: none; /* 최대 너비를 제거하여 더 이상 제한하지 않음 */
    margin-left: 0; /* 왼쪽 마진을 0으로 설정 */
    background: #fff;
    border-bottom: 2px solid #ffc700;
  }
`;

const WrapHeader = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;
const WrapTab = styled.div`
  font-size: 13px;
  display: flex;
  line-height: 52px;
  gap: 30px;
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`;
const WrapLogo = styled.div`
  padding-top: 11px;
  line-height: 30px;
  cursor: pointer;
  @media (max-width: 600px) {
    margin: auto;
  }
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #fff;
`;
const PCWrapRightCon = styled.div`
  display: flex;
  cursor: pointer;
  gap: 25px;
  position: absolute;
  top: 14px;
  right: 16px;
`;
const PCWriteBtn = styled.div`
  display: flex;
  .text {
    padding-left: 7px;
    font-size: 11px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const PCLoginBtn = styled.div`
  display: flex;
  .text {
    padding-left: 7px;
    font-size: 11px;
    line-height: 20px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const LoginBtn = styled.div`
  width: 50px;
  height: 24px;
  border: 1px solid #ffc700;
  border-radius: 5px;
  color: #ffc700;
  font-size: 11px;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 16px;
  @media (min-width: 600px) {
    display: none;
  }
`;

const WrapProfile = styled.div`
  display: flex;
`;
