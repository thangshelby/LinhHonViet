import { useSelector } from "react-redux";
import {accessTokenSelector } from "../store/selector";

const useAccessToken = () => {
  const accessToken = useSelector(accessTokenSelector);
  return accessToken;
};

export default useAccessToken;
