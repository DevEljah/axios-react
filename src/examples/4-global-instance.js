import { useEffect } from "react";
import axios from "axios";
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    // console.log("global axios instance");
    try {
      const re1 = await axios(productsUrl);
      const re2 = await axios(randomUserUrl);
      console.log(re1.data);
    } catch (error) {
      console.log(error.re);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
