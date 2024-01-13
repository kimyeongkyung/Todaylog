import { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface GetWhatDatailPostType {
  title: string;
  restaurant: {
    id: string;
    restaurantName: string;
    restaurantComment: string;
    restaurantImages: string[];
    restaurantTags: string[];
    restaurantLat: number;
    restaurantLng: number;
    restaurantAddress: string;
    restaurantRoadAddress: string;
  };
  cafe: {
    id: string;
    cafeName: string;
    cafeComment: string;
    cafeImages: string[];
    cafeTags: string[];
    cafeLat: number;
    cafeLng: number;
    cafeAddress: string;
    cafeRoadAddress: string;
  };
  leisure: {
    id: string;
    leisureName: string;
    leisureComment: string;
    leisureImages: string[];
    leisureTags: string[];
    leisureLat: number;
    leisureLng: number;
    leisureAddress: string;
    leisureRoadAddress: string;
  };
}

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
  } = useQuery<GetWhatDatailPostType>(["post", postId], fetchPostData, {
    enabled: postId !== undefined, // postId가 유효한 값일 때만 데이터 호출
    staleTime: 60000, // 데이터 불러온지 1분 경과 시 새 데이터 호출
  });

  if (isLoading) {
    // You can handle loading state here
    return null;
  }

  if (isError) {
    // You can handle error state here
    console.error("Error using posts");

    return null;
  }

  return postData;
};

export default useGetWhatDetailPost;
