import { useRouter } from "next/router";
import { Id } from "react-toastify";
import styled from "styled-components";

const ModalBottomButton = ({
  setIsOpen,
  okLabel,
  cancelLabel,
  //okLabel 클릭 시 실행할 action
  okActions,
  //okLabel 클릭 시 이동할 path
  moveOkPath,
}: {
  setIsOpen: (value: boolean) => void;
  okLabel: string;
  cancelLabel?: string;
  moveOkPath?: string;
  okActions?: () => Id;
}) => {
  const { push } = useRouter();

  return (
    <>
      <WrapBottomBtn>
        <CloseBtn
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {cancelLabel}
        </CloseBtn>
        <ConfirmBtn
          onClick={() => {
            okActions && okActions(); // 여기서 수정
            moveOkPath && push(`${moveOkPath}`);
          }}
        >
          {okLabel}
        </ConfirmBtn>
      </WrapBottomBtn>
    </>
  );
};
export default ModalBottomButton;

const WrapBottomBtn = styled.div`
  cursor: pointer;
  display: flex;
  text-align: center;
  line-height: 49px;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  width: 328px;
  border-radius: 0px 0px 5px 5px;
  border-top: 1px solid #ffc700;
  background: #fff;
  height: 48px;
  width: 50%;
  background-color: #fff;
  border-bottom-left-radius: 5px;
`;
const ConfirmBtn = styled.div`
  height: 49px;
  width: 50%;
  border-radius: 0px 0px 5px 0px;
  background: #ffc700;
`;
