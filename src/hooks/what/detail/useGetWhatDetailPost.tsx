import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useGetWhatDetailPost = (postId: string | undefined) => {
  const fetchPostData = async () => {
    const response = await fetch(
      `http://localhost:4000/what/${String(postId)}`
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
  } = useQuery(["post", postId], fetchPostData, {
    enabled: postId !== undefined, // postId가 유효한 값일 때만 데이터 호출
    staleTime: 60000, // 데이터 불러온지 1분 경과 시 새 데이터 호출
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

export default useGetWhatDetailPost;
