import styled from "styled-components";
import { Duck } from "../icons";
import { useRouter } from "next/router";

const Header = () => {
  const { push } = useRouter();

  return (
    <Container>
      <div
        className="logo"
        onClick={() => {
          push("/");
        }}
      >
        Routine
      </div>
      <LoginBtn
        onClick={() => {
          push("/login");
        }}
      >
        로그인
      </LoginBtn>
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
  );
};

export default Header;

const Container = styled.div`
  padding: 9px 14px 9px 16px;
  display: flex;
  line-height: 30px;
  justify-content: space-between;
  background-color: #ffc700;
  .logo {
    font-weight: bold;
    cursor: pointer;
  }
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
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-size: 11px;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
`;
const WrapProfile = styled.div`
  display: flex;
`;
