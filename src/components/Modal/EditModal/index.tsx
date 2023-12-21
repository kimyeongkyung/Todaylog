import ModalBottomButton from "@/components/Button/ModalBottomButton";
import Input from "@/components/Input";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalClose } from "@/components/icons";
const EditModal = ({
  setIsOpen,
  title,
}: {
  setIsOpen: (value: boolean) => void;
  title: string;
}) => {
  const notify = () =>
    toast.info("닉네임이 수정되었습니다.", {
      position: toast.POSITION.BOTTOM_CENTER, // 토스트 메시지 위치 설정
    });

  return (
    <>
      <DimOverlay
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <LoginModal>
        <WrapTitle>
          <Title>{title}</Title>
          <WrapClose
            onClick={() => {
              //   push("/");
            }}
          >
            <ModalClose />
          </WrapClose>
        </WrapTitle>
        <ModalBottomButton
          setIsOpen={setIsOpen}
          okLabel="변경하기"
          cancelLabel="취소"
          okActions={notify}
        />
        <ToastContainer position="bottom-center" />
      </LoginModal>
    </>
  );
};

export default EditModal;

const DimOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  min-width: 360px; /* 최소 너비를 360px로 설정 */
  max-width: 420px; /* 최대 너비를 420px로 설정 */
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
  z-index: 998; /* Place it below the modal */
`;
const LoginModal = styled.div`
  min-width: 360px;
  max-width: 388px;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999; /* Make sure the modal is above other content */
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const WrapClose = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
const WrapTitle = styled.div`
  display: flex;
  width: 328px;
  height: 142px;
  padding: 16px;
  gap: 10px;
  flex-shrink: 0;
`;
