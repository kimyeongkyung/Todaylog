import { useRouter } from "next/router";
import styled from "styled-components";
import { DarkMypage, DarkWhat, DarkWhere, Mypage, What, Where } from "../icons";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { push, pathname } = useRouter();
  const [clickWhere, setClickWhere] = useState(false);
  const [clickMypage, setClickMypage] = useState(false);
  const [clickWhat, setClickWhat] = useState(false);

  useEffect(() => {
    if (pathname === "/what" || pathname === "/") {
      setClickWhat(true);
    }
    if (pathname === "/where") {
      setClickWhere(true);
    }
    if (pathname === "/mypage") {
      setClickMypage(true);
    }
  }, [pathname]);

  const handleWhatClick = () => {
    push("/what");
    setClickWhat(true);
  };
  const handleWhereClick = () => {
    push("/where");
    setClickWhere(true);
  };
  const handleMypageClick = () => {
    push("/mypage");
    setClickMypage(true);
  };

  return (
    <WrapNavigation>
      <div onClick={handleWhatClick}>
        <div>
          <div>{clickWhat ? <What /> : <DarkWhat />}</div>
        </div>
        <p>What</p>
      </div>
      <div onClick={handleWhereClick}>
        <div>{clickWhere ? <Where /> : <DarkWhere />}</div>
        <p>where</p>
      </div>
      <div onClick={handleMypageClick}>
        <div>{clickMypage ? <Mypage /> : <DarkMypage />}</div>
        <p>mypage</p>
      </div>
    </WrapNavigation>
  );
};

export default Navigation;

const WrapNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  min-width: 360px;
  width: 420px;
  height: 69px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top: 2px solid #ffc700;
  border-left: 2px solid #ffc700;
  border-right: 2px solid #ffc700;
  > div {
    width: 30%;
    text-align: center;
    cursor: pointer;
    padding-top: 13px;
  }
  p {
    padding-top: 4px;
    font-size: 11px;
  }
`;
