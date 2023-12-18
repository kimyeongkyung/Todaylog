import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "../icons";
import { useRouter } from "next/router";

const BackHeader = ({ title }: { title: string }) => {
  const { push, back } = useRouter();

  return (
    <>
      <Back
        onClick={() => {
          // push("/");
          back();
        }}
      >
        <ArrowLeft />
      </Back>
      <Title>{title}</Title>
    </>
  );
};

export default BackHeader;

const Back = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
`;
const Title = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 0 0 16px 0;
  font-weight: bold;
  text-align: center;
`;
