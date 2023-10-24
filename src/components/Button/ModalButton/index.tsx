import styled from "styled-components";

const ModalButton = ({ text }: { text: string }) => {
  return <Button>{text}</Button>;
};

export default ModalButton;

const Button = styled.div`
  width: 70px;
  height: 30px;
  background-color: #000;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
`;
