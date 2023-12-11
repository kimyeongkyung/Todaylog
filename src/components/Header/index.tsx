import styled from "styled-components";
import { Duck, LogoMobile } from "../icons";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginCheckModal from "../Modal/LoginCheckModal";

const Header = () => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <WrapHeader>
          <WrapLogo>
            <LogoMobile />
          </WrapLogo>
          <LoginBtn
            onClick={() => {
              setIsOpen(true);
              // push("/login");
            }}
          >
            로그인
          </LoginBtn>
        </WrapHeader>
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
          setOpen={(value: boolean) => setIsOpen(value)} // 모달에서 모달을 닫을 때 사용할 콜백
        />
      )}
    </>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  padding: 0px 16px;
  // display: flex;
  // line-height: 52px;
  justify-content: space-between;
  background-color: #fff5df;

  box-sizing: border-box; /* 추가 */
  width: 100%; /* 너비를 100%로 설정하여 부모 요소의 크기에 따라 변화 */
  max-width: 420px; /* 최대 너비를 420px로 지정 */
  margin: 0 auto; /* 가운데 정렬을 위해 사용 (수평 가운데 정렬) */
  height: 52px;
`;
const WrapHeader = styled.div`
  position: relative;
`;
const WrapLogo = styled.div`
  width: fit-content;
  margin: auto;
  padding-top: 11px;
`;
const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #fff;
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
  right: 0;
`;
const WrapProfile = styled.div`
  display: flex;
`;
