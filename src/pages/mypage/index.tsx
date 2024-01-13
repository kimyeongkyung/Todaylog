import BackHeader from "@/components/BackHeader";
import SquareButton from "@/components/Button/SquareButton";
import Container from "@/components/Container";
import Input from "@/components/Input";
import EditModal from "@/components/Modal/EditModal";
import { ArrowLeft, MyBookmark, MyEdit, MyNotice } from "@/components/icons";
import MyPost from "@/components/icons/MyPost";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Mypage = () => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      // 서버에 로그아웃 요청 보내기
      const response = await axios.post("http://localhost:4000/logout", {
        withCredentials: true,
      });
      // const auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(null, (err) => {
      //   console.error("Error signing out:", err);
      // });
      // 로그아웃이 성공하면 클라이언트 측에서 사용자 상태 업데이트
      // 서버에서 반환하는 로그아웃 관련 정보
      // 여기서 로그인 상태를 업데이트하거나 리다이렉션 등의 작업 수행
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <>
      <Container>
        <button onClick={handleLogout}>Logout</button>
        {/* Mobile */}
        <WrapMobile>
          <BackHeader title="마이페이지" />
          <WrapProfile>
            <WrapImage>
              이미지
              <Edit>
                <MyEdit />
              </Edit>
            </WrapImage>
            <WrapNickname>
              <span>나무늘보</span>님 환영해요!
              <SquareButton
                text="닉네임 수정"
                borderColor="#FFC700"
                bgColor="#fff"
                color="#FFC700"
                margin="8px 0"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            </WrapNickname>
          </WrapProfile>
          <WrapMainCon>
            <div
              className="main"
              onClick={() => {
                push("/mypage/mypost");
              }}
            >
              <MyPost />
              <div>내가 쓴 게시글</div>
            </div>
            <div
              className="main"
              onClick={() => {
                push("/mypage/bookmark");
              }}
            >
              <MyBookmark />
              <div>북마크</div>
            </div>
            <div
              className="main"
              onClick={() => {
                push("/notice");
              }}
            >
              <MyNotice />
              <div>공지사항</div>
            </div>
          </WrapMainCon>
          <WrapSubCon>
            <div className="sub">비밀번호 변경</div>
            <div
              className="sub"
              onClick={() => {
                push("/mypage/question");
              }}
            >
              문의하기
            </div>
            <div className="sub">로그아웃</div>
          </WrapSubCon>
        </WrapMobile>

        {/* PC */}
        <WrapPC>
          <WrapTab>
            <Title>MYPAGE</Title>
            <div className="clicked">회원정보 수정</div>
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
              onClick={() => {
                push("/mypage/question");
              }}
            >
              문의하기
            </div>
            <div>로그아웃</div>
          </WrapTab>
          <WrapContents>
            <Chapter>회원정보 수정</Chapter>
            <Information>
              <WrapProfile>
                <WrapPCImage>
                  이미지
                  <Edit>
                    <MyEdit />
                  </Edit>
                </WrapPCImage>
              </WrapProfile>
              <div>
                <label style={{ fontSize: "12px" }}>닉네임</label>
                <Nickname>
                  <Input type="text" id="nickname"></Input>
                  <CheckBtn>중복확인</CheckBtn>
                </Nickname>
              </div>
              <div>
                <label style={{ fontSize: "12px" }}>아이디(이메일)</label>
                <Input type="text" id="id"></Input>
              </div>
              <SquareButton
                text="비밀번호 변경"
                color="#ffc700"
                bgColor="#fff"
                borderColor="#ffc700"
              ></SquareButton>
            </Information>
          </WrapContents>
        </WrapPC>
      </Container>
      {isOpen && (
        <EditModal
          title="닉네임 수정"
          setIsOpen={(value: boolean) => setIsOpen(value)}
        />
      )}
    </>
  );
};

export default Mypage;

const WrapMobile = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const WrapImage = styled.div`
  width: 76px;
  height: 76px;
  background: #fff;
  border: 1px solid #ffc700;
  border-radius: 38px;
  text-align: center;
  line-height: 76px;
  box-sizing: border-box;
  position: relative;
`;
const WrapPCImage = styled.div`
  width: 76px;
  height: 76px;
  background: #fff;
  border: 1px solid #ffc700;
  border-radius: 38px;
  text-align: center;
  line-height: 76px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
`;

const WrapProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const WrapNickname = styled.div`
  font-size: 15px;
  span {
    font-weight: bold;
  }
`;

const Edit = styled.div`
  position: absolute;
  bottom: 0;
  left: 49px;
  cursor: pointer;
`;

const WrapMainCon = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #6c6c6c;

  .main {
    width: 100%;
    min-width: 96px;
    max-width: 170px;
    aspect-ratio: 9.6/9.2;
    // height: 92px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    background: #fff;
    gap: 10px;
    cursor: pointer;
  }
`;

const WrapSubCon = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  .sub {
    display: flex;
    padding: 17px 13px;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    background: #fff;
    color: #000;
    cursor: pointer;
    font-family: Inter;
    font-size: 13px;
    color: #6c6c6c;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
