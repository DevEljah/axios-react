import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
});

authFetch.interceptors.request.use(
  (requesta) => {
    requesta.headers.common["Accept"] = "application/json";
    console.log("request sent");
    return requesta;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (responsea) => {
    console.log("got response");
    // console.log(responsea);
    return responsea;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log("NOT FOUNDA");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
