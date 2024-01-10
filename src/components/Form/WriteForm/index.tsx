import React, { useCallback } from "react";
// import {
//   FirstPlaceForm,
//   LastPlaceForm,
//   SecondPlaceForm,
//   TitleForm,
// } from "./Form";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { FirstPlace, LastPlace, SecondPlace, TitleWrite } from "../components";

const getWriteStep = (
  step: number,
  handleNextStep: () => void,
  handlePrevStep: () => void,
  setFormData: (data: any) => void,
  methods: any
) => {
  switch (step) {
    case 0:
      return (
        <TitleWrite
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          setFormData={setFormData}
          methods={methods}
        />
      );
    case 1:
      return (
        <FirstPlace
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          setFormData={setFormData}
          methods={methods}
        />
      );
    case 2:
      return (
        <SecondPlace
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          setFormData={setFormData}
          methods={methods}
        />
      );
    case 3:
      return (
        <LastPlace
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          setFormData={setFormData}
          methods={methods}
        />
      );
    default:
      return null;
  }
};

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  setFormData: (data: any) => void;
  methods: UseFormReturn<
    {
      title?: string;
    },
    any
  >;
  step: number;
}

const WriteForm = ({
  handleNextStep,
  handlePrevStep,
  setFormData,
  step,
  methods,
  formData,
}: Props) => {
  const { watch } = methods;
  const handleSignUp = async () => {
    const currentStepData = watch();
    console.log(currentStepData);
    // 현재 단계에 해당하는 placeInfo를 업데이트
    setFormData((prevData) => {
      console.log({ prevData });
      return {
        ...prevData,
        placeInfo: {
          ...prevData.placeInfo,
          [step === 1
            ? "firstPlace"
            : step === 2
            ? "secondPlace"
            : "lastPlace"]: currentStepData,
        },
      };
    });

    try {
      const response = await fetch("http://localhost:4000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // 전체 데이터를 서버로 전송
      });

      if (response.ok) {
        console.log("Data sent successfully!");
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }

    // 다음 단계로 이동하는 로직
    // handleNextStep();
  };

  return (
    <FormProvider {...methods}>
      <form id="write-todaylog" onSubmit={methods.handleSubmit(handleSignUp)}>
        {getWriteStep(
          step,
          handleNextStep,
          handlePrevStep,
          setFormData,
          methods
        )}
      </form>
    </FormProvider>
  );
};

export default WriteForm;
