import { useEffect } from "react";
import authFetch from "../axios/interceptors";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-store-products");
      // in order to test the error use wrong route insted
      // e.g "/react-store-productsssss"
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
