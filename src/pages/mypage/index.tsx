import BackHeader from "@/components/BackHeader";
import SquareButton from "@/components/Button/SquareButton";
import Container from "@/components/Container";
import EditModal from "@/components/Modal/EditModal";
import { ArrowLeft, MyBookmark, MyEdit, MyNotice } from "@/components/icons";
import MyPost from "@/components/icons/MyPost";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Mypage = () => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
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
              push("/mypage/notice");
            }}
          >
            <MyNotice />
            <div>공지사항</div>
          </div>
        </WrapMainCon>
        <WrapSubCon>
          <div className="sub">비밀번호 변경</div>
          <div className="sub">문의하기</div>
          <div className="sub">로그아웃</div>
        </WrapSubCon>
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

const WrapProfile = styled.div`
  display: flex;
`;
const WrapNickname = styled.div`
  padding: 8px 0 0 16px;
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
  // justify-content: space-between;
  gap: 10px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #6c6c6c;
  padding: 16px 0;

  .main {
    width: 100%;
    min-width: 96px;
    max-width: 120px;
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
  .sub {
    display: flex;
    padding: 17px 13px;
    align-items: center;
    margin-bottom: 16px;
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
