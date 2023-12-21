import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "../icons";
import { useRouter } from "next/router";

const BackHeader = ({ title }: { title: string }) => {
  const { push, back } = useRouter();

  return (
    <>
      <Container>
        <Back
          onClick={() => {
            // push("/");
            back();
          }}
        >
          <ArrowLeft />
        </Back>
        <Title>{title}</Title>
      </Container>
    </>
  );
};

export default BackHeader;
const Container = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Back = styled.div`
  /* position: absolute;
  top: 16px;
  left: 16px; */
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 16px;
  /* padding: 0 0 16px 0; */
  font-weight: bold;
  margin: 0 auto;
  /* 아이콘 영역만큼 오른쪽으로 다시 밀기 */
  padding-right: 19px;
`;
