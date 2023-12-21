import React from "react";

const Write = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width ? width : "28"}
      height={height ? height : "28"}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 4H3.55556C2.87778 4 2.22776 4.26925 1.7485 4.7485C1.26925 5.22776 1 5.87778 1 6.55556V24.4444C1 25.1222 1.26925 25.7722 1.7485 26.2515C2.22776 26.7308 2.87778 27 3.55556 27H21.4444C22.1222 27 22.7722 26.7308 23.2515 26.2515C23.7308 25.7722 24 25.1222 24 24.4444V15.5"
        stroke="#FFC700"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.384 1.79198C22.8911 1.28488 23.5789 1 24.296 1C25.0132 1 25.7009 1.28488 26.208 1.79198C26.7151 2.29907 27 2.98684 27 3.70398C27 4.42112 26.7151 5.10889 26.208 5.61598L14.0987 17.7253L9 19L10.2747 13.9013L22.384 1.79198Z"
        stroke="#FFC700"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Write;
