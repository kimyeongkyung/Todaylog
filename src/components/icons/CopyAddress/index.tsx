import React from "react";

const CopyAddress = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="3"
        width="9"
        height="10"
        rx="1"
        fill="white"
        stroke="#BCBCBC"
      />
      <rect
        x="1"
        y="1"
        width="10"
        height="10"
        rx="1"
        fill="white"
        stroke="#BCBCBC"
      />
      <path d="M3 3H9" stroke="#BCBCBC" stroke-linecap="round" />
      <path d="M3 5H9" stroke="#BCBCBC" stroke-linecap="round" />
      <path d="M3 7H9" stroke="#BCBCBC" stroke-linecap="round" />
      <path d="M3 9H9" stroke="#BCBCBC" stroke-linecap="round" />
    </svg>
  );
};

export default CopyAddress;
