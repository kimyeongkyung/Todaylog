const Mypage = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "26"}
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9996 3.52898e-07C13.5683 -0.000492128 15.0958 0.514483 16.358 1.46934C17.6202 2.4242 18.5506 3.76865 19.0126 5.30536C19.4745 6.84208 19.4438 8.49012 18.9248 10.0076C18.4058 11.5251 17.426 12.8321 16.1291 13.7367C18.3802 14.5831 20.3326 16.1006 21.7351 18.0941C23.1376 20.0875 23.9259 22.4656 23.9987 24.9222C24.0055 25.0586 23.9857 25.1949 23.9404 25.3233C23.8951 25.4517 23.8252 25.5696 23.7349 25.6699C23.6445 25.7703 23.5356 25.8511 23.4144 25.9077C23.2931 25.9643 23.1621 25.9956 23.029 25.9996C22.8958 26.0036 22.7633 25.9803 22.639 25.9311C22.5148 25.8818 22.4014 25.8077 22.3054 25.7129C22.2095 25.6182 22.1331 25.5048 22.0805 25.3793C22.0279 25.2538 22.0003 25.1189 21.9993 24.9824C21.9199 22.3182 20.8316 19.7905 18.9651 17.9348C17.0985 16.0791 14.6005 15.0412 12.0002 15.0412C9.4 15.0412 6.90194 16.0791 5.03542 17.9348C3.16891 19.7905 2.08062 22.3182 2.00119 24.9824C1.99323 25.2543 1.8802 25.5119 1.68697 25.6984C1.49374 25.885 1.23613 25.9852 0.970811 25.977C0.705496 25.9689 0.45421 25.853 0.272232 25.6549C0.0902538 25.4569 -0.00750886 25.1928 0.000450583 24.9208C0.0734752 22.4644 0.861963 20.0867 2.26444 18.0935C3.66691 16.1003 5.6192 14.583 7.87004 13.7367C6.57314 12.8321 5.5933 11.5251 5.07434 10.0076C4.55537 8.49012 4.52462 6.84208 4.98658 5.30536C5.44855 3.76865 6.37891 2.4242 7.6411 1.46934C8.9033 0.514483 10.4309 -0.000492128 11.9996 3.52898e-07ZM6.66426 7.51987C6.66426 8.97033 7.22637 10.3614 8.22694 11.387C9.2275 12.4127 10.5846 12.9889 11.9996 12.9889C13.4146 12.9889 14.7716 12.4127 15.7722 11.387C16.7728 10.3614 17.3349 8.97033 17.3349 7.51987C17.3349 6.0694 16.7728 4.67834 15.7722 3.6527C14.7716 2.62707 13.4146 2.05087 11.9996 2.05087C10.5846 2.05087 9.2275 2.62707 8.22694 3.6527C7.22637 4.67834 6.66426 6.0694 6.66426 7.51987Z"
        fill="#FFC700"
      />
    </svg>
  );
};

export default Mypage;
