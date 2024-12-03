import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProfilePic } from "./userSlice";

const useProfilePics = () => {
  const dispatch = useDispatch();

  async function getProfilePics() {
    const pageNo = Math.floor(Math.random() * 7 + 2);
    const data = await fetch("https://picsum.photos/v2/list?page=" + pageNo, {
      method: "GET",
    });
    const json = await data.json();
    const finalProfileList = json.slice(0, 8);
    dispatch(addProfilePic(finalProfileList));
  }

  useEffect(() => {
    getProfilePics();
  }, []);
};

export default useProfilePics;
