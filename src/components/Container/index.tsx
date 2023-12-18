import styled from "styled-components";

const Container = styled.div`
  position: relative;
  justify-content: space-between;
  .title {
    padding: 30px 0 8px 0;
    font-weight: bold;
  }
  min-height: 100vh;
  overflow: hidden;

  // pc
  @media (min-width: 600px) {
    margin: 52px auto;
    padding: 16px 50px;
    max-width: 1440px;
  }
  // mobile
  @media (max-width: 600px) {
    margin: 16px 0 0 0;
    padding: 50px 16px 70px 16px;
  }
`;

export default Container;
