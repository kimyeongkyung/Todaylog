import { useEffect, useState } from "react";

const useGetWherePosts = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/where/locals");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error("Error using posts:", error.message);
      }
    };

    fetchData();
  }, []);

  return postData;
};

export default useGetWherePosts;
