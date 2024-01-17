import { useEffect, useState } from "react";

interface WhereDataType {
  id: string;
  placeName: string;
  images: string;
  address: string;
  category: string;
  lat: string;
  lng: string;
  placeId: string;
}

const useGetWherePosts = (): WhereDataType[] | null => {
  const [postData, setPostData] = useState<WhereDataType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "https://todaylog.herokuapp.com/where/locals"
          "http://localhost:4000/where/locals"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const { location } = await response.json();
        setPostData(location);
      } catch (error: any) {
        console.error("Error using posts:", error.message);
      }
    };

    fetchData();
  }, []);

  return postData;
};

export default useGetWherePosts;
