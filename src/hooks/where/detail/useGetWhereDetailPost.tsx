import { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface WhereDetailDataType {
  lat: number;
  lng: number;
  placeName: string;
  address: string;
  roadAddress: string;
  images: string;
}

const useGetWhereDetailPost = (
  placeId: string | undefined,
  category: string | undefined
): WhereDetailDataType => {
  const fetchPostData = async () => {
    console.log(placeId);
    const response = await fetch(
      // `https://todaylog.herokuapp.com/where/${String(
      //   placeId
      // )}?category=${category}`
      `http://localhost:4000/where/${String(placeId)}?category=${category}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post data");
    }

    return response.json();
  };

  const {
    data: postData,
    // error,
    // isError,
    // isLoading,
  } = useQuery(["post", placeId], fetchPostData, {
    enabled: placeId !== undefined, // postId가 유효한 값일 때만 데이터 호출
    // staleTime: 60000, // 데이터 불러온지 1분 경과 시 새 데이터 호출
  });
  console.log(postData);
  return postData && postData[0];
};

export default useGetWhereDetailPost;
