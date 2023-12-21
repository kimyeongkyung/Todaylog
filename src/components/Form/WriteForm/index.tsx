import React, { useCallback } from "react";
import {
  FirstPlaceForm,
  LastPlaceForm,
  SecondPlaceForm,
  TitleForm,
} from "./Form";
import { FormProvider, UseFormReturn } from "react-hook-form";

const getWriteStep = (step: number) => {
  switch (step) {
    case 0:
      return <TitleForm />;
    case 1:
      return <FirstPlaceForm />;
    case 2:
      return <SecondPlaceForm />;
    case 3:
      return <LastPlaceForm />;
    default:
      return null;
  }
};

interface Props {
  handleNextStep: () => void;
  methods: UseFormReturn<
    {
      title?: string;
    },
    any
  >;
  step: number;
}
// ios 테스트 이후 코드 수정필요 - Fix

const WriteForm = ({ handleNextStep, step, methods }: Props) => {
  // const { mutateAsync } = usePostSeller();
  //   const email = methods.watch("email");
  //   const emailValid = methods.watch("emailValid");
  //   const brn = methods.watch("brn");
  //   const brnValid = methods.watch("brnValid");
  const handleSignUp = useCallback(() => {
    handleNextStep();
  }, [handleNextStep]);
  return (
    <FormProvider {...methods}>
      <form id="write-todaylog" onSubmit={methods.handleSubmit(handleSignUp)}>
        {getWriteStep(step)}
      </form>
    </FormProvider>
  );
};

export default WriteForm;
