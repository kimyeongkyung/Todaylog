import { useEffect, useState } from "react";

interface WhereGetCategoryDataType {
  id: string;
  placeName: string;
  images: string;
  address: string;
  category: string;
  lat: string;
  lng: string;
  placeId: string;
}

// 오늘뭐하지 각 카테고리 데이터 조회
const useGetCategoryPosts = (
  category: string
): WhereGetCategoryDataType[] | null => {
  const [categoryData, setCategoryData] = useState<
    WhereGetCategoryDataType[] | null
  >(null);

  useEffect(() => {
    const switchText = (category: string) => {
      switch (category) {
        case "전체":
          return null;
        case "음식점":
          return "restaurant";
        case "카페":
          return "cafe";
        case "문화/여가":
          return "leisure";
        default:
          return "";
      }
    };

    // 카테고리에 대한 문자열을 얻음
    const categoryString = switchText(category);

    // 카테고리가 "전체"일때는 요청을 보내지 않음
    if (categoryString === null) {
      return;
    }

    // 백엔드로 보낼 때 인코딩 처리
    const encodedCategory = encodeURIComponent(categoryString);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/where/${encodedCategory}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch ${encodedCategory} posts`);
        }

        const { data } = await response.json();
        setCategoryData(data);
      } catch (error: any) {
        console.error(`Error using ${encodedCategory} posts:`, error.message);
      }
    };

    fetchData();
  }, [category]);

  return categoryData;
};

export default useGetCategoryPosts;
