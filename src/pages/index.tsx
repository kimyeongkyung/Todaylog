import What from "./what";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const Home = () => {
  const router = useRouter();

  return (
    <>
      {/* <Header /> */}
      <What />
      {/* footer */}
      <WrapFooter>footer</WrapFooter>
      {/* 네비게이션 */}
      <Navigation />
    </>
  );
};

export default Home;

const WrapFooter = styled.div`
  height: 20px;
  margin-bottom: 50px;
  color: #fff;
  background-color: #000;
`;
