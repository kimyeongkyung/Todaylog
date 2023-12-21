import Container from "@/components/Container";
import WriteForm from "@/components/Form/WriteForm";
import Input from "@/components/Input";
import {
  EmptyPercentBar,
  NextChapter,
  PercentBar,
  PrevChapter,
} from "@/components/icons";
import Guide from "@/components/icons/Guide";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface WrapProps {
  step: number;
}

const WriteMain = () => {
  const [data, setData] = useState([]);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [step, setStep] = useState(0);
  //이전 단계로 이동
  const handlePrevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);
  //다음 단계로 이동
  const handleNextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const methods = useForm({
    defaultValues: {},
    mode: "onChange",
    reValidateMode: "onChange",
    // resolver: yupResolver(writeTodaylogSchema[step]),
  });
  const formTitle = [
    "작성하기",
    "첫번 째 장소를 등록해주세요.",
    "두번 째 장소를 등록해주세요.",
    "마지막 장소를 등록해주세요.",
  ];

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  console.log(data);
  // 서버 주소 및 엔드포인트
  // const serverUrl = "http://localhost:4000";
  // const endpoint = "/saveData";

  // useEffect(() => {
  //   // GET 요청 보내기
  //   fetch(`${serverUrl}${endpoint}`)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       console.log("Server response:", data);
  //       setData(data); // 받아온 데이터를 상태에 저장
  //     })
  //     .catch((error) => {
  //       console.error("Error during GET request:", error);
  //     });
  // }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행하도록 합니다.

  // const handleSendRequest = async () => {
  //   // 가상 데이터
  //   const postData = {
  //     id: 9,
  //     name: "testtest",
  //     region: "seoul",
  //     age: 22,
  //   };

  //   try {
  //     // POST 요청 보내기
  //     const response = await fetch(`${serverUrl}${endpoint}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(postData),
  //     });

  //     // 서버 응답 확인
  //     const data = await response.text();
  //     console.log("Server response:", data);
  //   } catch (error) {
  //     console.error("Error during POST request:", error);
  //   }
  // };

  return (
    <>
      <Container>
        <WrapCon>
          <Title>
            <WrapPercent step={step}>
              <div className="chapter1" />
              <div className="chapter2" />
              <div className="chapter3" />
              <div className="chapter4" />
            </WrapPercent>

            <div>{formTitle[step]}</div>
          </Title>
          <WriteForm
            handleNextStep={handleNextStep}
            step={step}
            methods={methods}
          />
          {/* 하단 버튼 */}
          <WrapBtn>
            <button
              onClick={() => {
                handlePrevStep();
              }}
              style={{ backgroundColor: "#fff" }}
            >
              <PrevChapter />
            </button>
            {step === 3 ? (
              <WrapLastBtn>
                <PreviewBtn>미리보기</PreviewBtn>
                <SaveBtn step={step}>발행</SaveBtn>
              </WrapLastBtn>
            ) : step === 0 ? (
              <button
                onClick={() => {
                  handleNextStep();
                }}
                style={{ backgroundColor: "#fff" }}
              >
                <NextChapter />
              </button>
            ) : (
              <WrapLastBtn>
                <AddPlaceBtn form="write-todaylog">장소 추가</AddPlaceBtn>
                <SaveBtn step={step} form="write-todaylog">
                  발행
                </SaveBtn>
              </WrapLastBtn>
            )}
          </WrapBtn>
          {/* <div> */}
          {/* {data.map((item) => (
          <div key={item.id}>
            {item.name} - {item.region} - {item.age}
          </div>
        ))} */}
          {/* </div> */}
          {/* <ButtonCustom onClick={handleSendRequest}>Send POST Request</ButtonCustom> */}
          <WrapGuide>
            <div className="icon">
              <Guide />
            </div>
            <Wrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>작성 방법이 궁금해요!</div>
              {isTooltipVisible && (
                <TooltipText>
                  <ul>
                    <li>• 장소는 최대 3곳까지 등록할 수 있어요.</li>
                    <li>
                      • 바로 발행 버튼을 누르면 현재까지 작성한 장소만 저장돼요.
                    </li>
                    <li>
                      • 오른쪽 화살표 아이콘을 누르면 다음 장소를 등록할 수
                      있어요.
                    </li>
                    <li>
                      • 중간에 수정이 필요하다면 왼쪽 화살표 버튼을 눌러
                      얼마든지 수정 가능해요.
                    </li>
                  </ul>
                </TooltipText>
              )}
            </Wrapper>
          </WrapGuide>
        </WrapCon>
      </Container>
    </>
  );
};
export default WriteMain;

const WrapCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 34px;
`;
const WrapPercent = styled.div<WrapProps>`
  width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    gap: 15px;
  }
  justify-content: space-between;
  div {
    width: 25%;
    height: 8px;
    border-radius: 3px;
    border: 1px solid #ffc700;
  }
  .chapter1 {
    background-color: ${(props) => (props.step >= 0 ? "#ffc700" : "#fff")};
  }
  .chapter2 {
    background-color: ${(props) => (props.step >= 1 ? "#ffc700" : "#fff")};
  }
  .chapter3 {
    background-color: ${(props) => (props.step >= 2 ? "#ffc700" : "#fff")};
  }
  .chapter4 {
    background-color: ${(props) => (props.step >= 3 ? "#ffc700" : "#fff")};
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const WrapWrite = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .write {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const CheckBtn = styled.div`
  min-width: 68px;
  height: 38px;
  background-color: #ffc700;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin: 5px 0 0 10px;
`;
const WrapSearch = styled.div`
  display: flex;
`;
const ButtonCustom = styled.button`
  width: 100px;
  cursor: pointer;
  border: 1px solid #000;
  margin: 10px;
`;

const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    cursor: pointer;
  }
`;
const WrapGuide = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 3px;
  color: #a4a4a4;
  cursor: pointer;
  text-decoration: underline;
`;
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.div`
  visibility: visible;
  width: 400px;
  border: 1px solid #a4a4a4;
  color: #a4a4a4;
  border-radius: 6px;
  padding: 10px;
  line-height: 20px;
  position: absolute;
  z-index: 1;
  /* bottom: 0; */
  left: 50%;
  margin: 10px 0 0 -70px;
  opacity: 1;
  transition: opacity 0.3s;
`;
const WrapLastBtn = styled.div`
  display: flex;
  gap: 10px;
`;
const PreviewBtn = styled.button`
  font-size: 14px;
  padding: 8px 0px;
  width: 76px;
  border: 1px solid #ffc700;
  color: #ffc700;
  border-radius: 5px;
  background-color: #fff;
`;
const SaveBtn = styled.button<WrapProps>`
  font-size: 14px;
  padding: 8px 0px;
  width: 76px;
  border: 1px solid #ffc700;
  color: ${(props) => (props.step === 3 ? "#fff" : "#ffc700")};
  border-radius: 5px;
  background-color: ${(props) => (props.step === 3 ? "#ffc700" : "#fff")};
`;
const AddPlaceBtn = styled.button`
  font-size: 14px;
  padding: 8px 0px;
  width: 76px;
  color: #fff;
  border-radius: 5px;
  background-color: #ffc700;
`;
