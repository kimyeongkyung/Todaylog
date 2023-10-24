import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Duck } from "@/components/icons";
import Image from "next/image";
import styled from "styled-components";

const Mypage = () => {
  return (
    <>
      <Header />
      <Container>마이페이지 입니다.</Container>
      <Navigation />
    </>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  // 네비게이션 영역 확보
  margin-bottom: 50px;
`;
