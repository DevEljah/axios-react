import { useEffect } from "react";
import axios from "axios";
import authFetch from "./../final/axios/interceptors";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const res = await axios(url);
      // console.log(res);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    fetchData(); // invoked !
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
