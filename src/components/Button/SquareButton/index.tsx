import styled from "styled-components";

interface ButtonProps {
  color?: string;
  bgColor?: string;
  borderColor?: string;
  margin?: string;
}

const SquareButton = ({
  text,
  color,
  bgColor,
  borderColor,
  margin,
  onClick,
}: {
  text: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  margin?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      margin={margin}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SquareButton;

const Button = styled.div<ButtonProps>`
  width: 79px;
  padding: 8px 0;
  color: ${(props) => props.color || "#fff"}; /* 기본값은 흰색(#fff)으로 설정 */
  background-color: ${(props) => props.bgColor || "#000"};
  border: 1px solid ${(props) => props.borderColor || "transparent"};
  margin: ${(props) => props.margin || "0 0 0 0"};
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  box-sizing: border-box;
`;
