import { useEffect, useState } from "react";
import { useQuery } from "react-query";
//어디가지 상세 - 리뷰 리스트 조회
const useGetWhereDetailReviews = (
  category: string | undefined,
  lat: string | undefined,
  lng: string | undefined
) => {
  console.log({});
  const fetchPostData = async () => {
    const response = await fetch(
      `http://localhost:4000/reviews?lat=${lat}&lng=${lng}&category=${category}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post data");
    }

    return response.json();
  };

  const {
    data: postData,
    error,
    isError,
    isLoading,
  } = useQuery(["reviews"], fetchPostData, {
    // enabled: placeId !== undefined, // postId가 유효한 값일 때만 데이터 호출
    // staleTime: 60000, // 데이터 불러온지 1분 경과 시 새 데이터 호출
  });

  if (isLoading) {
    // You can handle loading state here
    return null;
  }

  if (isError) {
    // You can handle error state here
    console.error("Error using posts:", error.message);
    return null;
  }

  return postData;
};

export default useGetWhereDetailReviews;
