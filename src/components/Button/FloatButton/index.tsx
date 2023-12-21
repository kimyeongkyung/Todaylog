import { FloatingButton } from "@/components/icons";
import styled from "styled-components";

const FloatButton = () => {
  return (
    <Float>
      <FloatingButton />
    </Float>
  );
};

export default FloatButton;

const Float = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid #d4d4d4;
  background: #fff;
  box-shadow: 1px 3px 4px 0px rgba(0, 0, 0, 0.25);
`;
