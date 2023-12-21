import BackHeader from "@/components/BackHeader";
import Container from "@/components/Container";
import React from "react";

const Notice = () => {
  return (
    <Container>
      {/* BackHeader는 모바일일때만 있어야 함 */}
      <BackHeader title="공지사항" />
    </Container>
  );
};

export default Notice;
