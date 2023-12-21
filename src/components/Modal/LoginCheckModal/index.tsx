import ModalBottomButton from "@/components/Button/ModalBottomButton";
import { useRouter } from "next/router";
import styled from "styled-components";

const LoginCheckModal = ({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) => {
  const { push } = useRouter();

  return (
    <>
      <DimOverlay
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <LoginModal>
        <Title>
          상세 페이지는 로그인 후 볼 수 있어요.
          <br />
          로그인 페이지로 이동할까요?
        </Title>
        <ModalBottomButton
          setIsOpen={setIsOpen}
          okLabel="로그인"
          cancelLabel="닫기"
          moveOkPath="/login"
        />
      </LoginModal>
    </>
  );
};
export default LoginCheckModal;
const LoginModal = styled.div`
  min-width: 360px;
  max-width: 388px;
  width: 100%;
  //   padding: 16px;
  height: 170px;
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Make sure the modal is above other content */
`;
const Title = styled.div`
  padding: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 21px;
`;

const DimOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  // min-width: 360px; /* 최소 너비를 360px로 설정 */
  // max-width: 420px; /* 최대 너비를 420px로 설정 */
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
  z-index: 998; /* Place it below the modal */
`;

const WrapBottomBtn = styled.div`
  cursor: pointer;
  display: flex;
  background-color: #ffc700;
  text-align: center;
  line-height: 49px;
  border-top: 1px solid #ffc700;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const CloseBtn = styled.div`
  height: 49px;
  width: 50%;
  background-color: #fff;
  border-bottom-left-radius: 5px;
`;
const ConfirmBtn = styled.div`
  height: 49px;
  width: 50%;
`;
