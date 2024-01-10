import { storage } from "@/api/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRef } from "react";
import styled from "styled-components";
import { Camera } from "../icons";

const UploadImage = ({
  setImageList,
}: {
  setImageList: (images: string[]) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;

    const selectedImages = Array.from(fileList).slice(0, 3); // 최대 3개까지 선택

    const uploadedImageURLs: string[] = [];

    for (const imageFile of selectedImages) {
      const storageRef = ref(storage, `files/${imageFile.name}`);

      try {
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        const snapshot = await uploadTask;

        const downloadURL = await getDownloadURL(snapshot.ref);
        uploadedImageURLs.push(downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setImageList(uploadedImageURLs);
  };

  return (
    <>
      <UploadBtn>
        <label htmlFor="image">
          <div className="icon">
            <Camera />
          </div>
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={onImageChange}
          ref={inputRef}
          multiple
        />
      </UploadBtn>
    </>
  );
};

const UploadBtn = styled.div`
  label {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 3px;
    background-color: #000;
    @media (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
    .icon {
      display: inline-block;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default UploadImage;
