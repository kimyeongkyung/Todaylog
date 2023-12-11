import { useRouter } from "next/router";
import styled from "styled-components";
import {
  Community,
  DarkCommunity,
  DarkMypage,
  DarkWhat,
  DarkWhere,
  Mypage,
  What,
  Where,
} from "../icons";
import { useEffect, useState } from "react";

const Navigation = () => {
  const { push, pathname } = useRouter();
  const iconData = [
    { id: "where", Icon: Where, DarkIcon: DarkWhere, label: "어디가지" },
    { id: "what", Icon: What, DarkIcon: DarkWhat, label: "오늘뭐하지" },
    {
      id: "community",
      Icon: Community,
      DarkIcon: DarkCommunity,
      label: "커뮤니티",
    },
    { id: "mypage", Icon: Mypage, DarkIcon: DarkMypage, label: "미이페이지" },
  ];

  const [activeIcon, setActiveIcon] = useState("where");

  useEffect(() => {
    const matchingIcon = iconData.find(
      (icon) => icon.id === pathname.replace("/", "")
    );
    if (matchingIcon) {
      setActiveIcon(matchingIcon.id);
    }
  }, [pathname]);

  const handleIconClick = (iconId: string) => {
    push(`/${iconId}`);
  };

  // const [clickWhere, setClickWhere] = useState(false);
  // const [clickWhat, setClickWhat] = useState(false);
  // const [clickCommunity, setClickCommunity] = useState(false);
  // const [clickMypage, setClickMypage] = useState(false);
  // console.log(clickWhere);
  // console.log(clickWhat);
  // console.log(clickCommunity);
  // console.log(clickMypage);

  // useEffect(() => {
  //   if (pathname === "/where" || pathname === "/") {
  //     setClickWhere(true);
  //   }
  //   if (pathname === "/what") {
  //     setClickWhat(true);
  //   }
  //   if (pathname === "/where") {
  //     setClickCommunity(true);
  //   }
  //   if (pathname === "/mypage") {
  //     setClickMypage(true);
  //   }
  // }, [pathname]);

  // const handleWhereClick = () => {
  //   // push("/where");
  //   setClickWhere(true);
  // };
  // const handleWhatClick = () => {
  //   // push("/what");
  //   setClickWhat(true);
  // };

  // const handleCommunityClick = () => {
  //   // push("/community");
  //   setClickCommunity(true);
  // };

  // const handleMypageClick = () => {
  //   // push("/mypage");
  //   setClickMypage(true);
  // };

  return (
    <WrapNavigation>
      {/* <div className="icon" onClick={handleWhereClick}>
        {clickWhere ? <Where /> : <DarkWhere />}
        <Text style={{ color: clickWhere ? "#FFC700" : "d4d4d4" }}>
          어디가지
        </Text>
      </div>
      <div className="icon" onClick={handleWhatClick}>
        {clickWhat === true ? <What /> : <DarkWhat />}
        <Text style={{ color: clickWhat ? "#FFC700" : "d4d4d4" }}>
          오늘뭐하지
        </Text>
      </div>
      <div className="icon" onClick={handleWhatClick}>
        {clickCommunity ? <Community /> : <DarkCommunity />}
        <Text style={{ color: clickCommunity ? "#FFC700" : "d4d4d4" }}>
          커뮤니티
        </Text>
      </div>
      <div className="icon">
        {clickMypage ? <Mypage /> : <DarkMypage />}
        <Text style={{ color: clickMypage ? "#FFC700" : "d4d4d4" }}>
          미이페이지
        </Text>
      </div> */}
      {iconData.map((icon) => (
        <div
          key={icon.id}
          className="icon"
          onClick={() => handleIconClick(icon.id)}
        >
          {activeIcon === icon.id ? <icon.Icon /> : <icon.DarkIcon />}
          <Text
            style={{ color: activeIcon === icon.id ? "#FFC700" : "#d4d4d4" }}
          >
            {icon.label}
          </Text>
        </div>
      ))}
    </WrapNavigation>
  );
};

export default Navigation;

const WrapNavigation = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  max-width: 420px;
  height: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-top: 2px solid #ffc700;
  background: #fff;
  margin: 0 auto;
  z-index: 100;
  .icon {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
`;

const Text = styled.div`
  padding-top: 6px;
  font-size: 11px;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
