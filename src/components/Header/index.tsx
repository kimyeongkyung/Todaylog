import styled from "styled-components";
import { Duck, Logo, Mypage, Write } from "../icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginCheckModal from "../Modal/LoginCheckModal";
import axios from "axios";

const Header = ({ isLogin }: { isLogin: boolean }) => {
  const { push, pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // 프론트엔드 로그인 상태 확인
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/check-login-status"
  //       );

  //       if (response.data.isLogin) {
  //         // 로그인 상태인 경우
  //         console.log("User is logged in:", response.data.user);
  //       } else {
  //         // 로그인 상태가 아닌 경우
  //         console.log("User is not logged in");
  //       }
  //     } catch (error) {
  //       console.error("Error checking login status:", error);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  return (
    <>
      <Container>
        <WrapHeader>
          <WrapLogo
            onClick={() => {
              push("/");
            }}
          >
            <Logo />
          </WrapLogo>
          {/* mobile */}
          {isLogin ? (
            <WrapProfile>
              <div>
                <Duck />
              </div>
              <div
                style={{
                  fontSize: "12px",
                  paddingLeft: "5px",
                  lineHeight: "30px",
                }}
              >
                나무늘보 님
              </div>
            </WrapProfile>
          ) : (
            // <LoginBtn
            //   onClick={() => {
            //     // setIsOpen(true);
            //     push("/mypage");
            //   }}
            // >
            //   내 정보
            // </LoginBtn>
            <LoginBtn
              onClick={() => {
                // setIsOpen(true);
                push("/login");
              }}
            >
              로그인
            </LoginBtn>
          )}

          <WrapCon>
            <WrapTab>
              <div
                style={{
                  fontWeight:
                    pathname === "/" || pathname === "/where"
                      ? "bold"
                      : "normal",
                }}
                onClick={() => {
                  push("/where");
                }}
              >
                어디가지
              </div>
              <div
                style={{
                  fontWeight: pathname === "/what" ? "bold" : "normal",
                }}
                onClick={() => {
                  push("/what");
                }}
              >
                오늘 뭐하지
              </div>
              <div
                style={{
                  fontWeight: pathname === "/notice" ? "bold" : "normal",
                }}
                onClick={() => {
                  push("/notice");
                }}
              >
                공지사항
              </div>
            </WrapTab>

            {/* PC */}
            <PCWrapRightCon>
              {isLogin ? (
                <>
                  <PCWriteBtn
                    onClick={() => {
                      // setIsOpen(true);
                      push("/write");
                    }}
                  >
                    <div className="icon">
                      <Write width="20px" height="20px" />
                    </div>
                    <div className="text">글쓰기</div>
                  </PCWriteBtn>

                  <PCLoginBtn
                    onClick={() => {
                      // setIsOpen(true);
                      push("/mypage");
                    }}
                  >
                    <div className="icon">
                      <Mypage width="20px" height="20px" />
                    </div>
                    <div className="text">내 정보</div>
                  </PCLoginBtn>
                </>
              ) : (
                <PCLoginBtn
                  onClick={() => {
                    // setIsOpen(true);
                    push("/login");
                  }}
                >
                  <div className="icon">
                    <Mypage width="20px" height="20px" />
                  </div>
                  <div className="text">로그인</div>
                </PCLoginBtn>
              )}
            </PCWrapRightCon>
          </WrapCon>
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
        </WrapHeader>
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
  /* margin: 0 auto; */
  height: 52px;
  @media (min-width: 600px) {
    width: 100%; /* 너비를 100%로 설정하여 부모 요소의 크기에 따라 변화 */
    min-width: none; /* 최대 너비를 제거하여 더 이상 제한하지 않음 */
    margin-left: 0; /* 왼쪽 마진을 0으로 설정 */
    background: #fff5df;
  }
  display: flex;
`;

const WrapHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: row;
  align-items: center;
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
  display: flex;
  margin: auto;
  cursor: pointer;
`;
const WrapCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: none;
  }
`;

const PCWrapRightCon = styled.div`
  display: flex;
  cursor: pointer;
  gap: 25px;
`;
const PCWriteBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 11px;
  gap: 6px;
`;
const PCLoginBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 11px;
  gap: 6px;
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
  position: absolute;
  right: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ffc700;
  padding: 3px 5px;
  border-radius: 5px;
  @media (min-width: 600px) {
    display: none;
  }
`;
