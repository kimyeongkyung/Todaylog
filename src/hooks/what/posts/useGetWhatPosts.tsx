import { useEffect, useState } from "react";

interface PostData {
  address: string;
  postId: string;
  images: string;
  title: string;
  comment: string;
}

const useGetWhatPosts = (): PostData[] | null => {
  const [postData, setPostData] = useState<PostData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/what");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPostData(data);
      } catch {
        console.error("Error using posts:");
      }
    };

    fetchData();
  }, []);

  return postData;
};

export default useGetWhatPosts;
