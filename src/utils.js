import axios from "axios";

const getDataPage = (page) => {
  const skip = (page - 1) * 10;
  const limit = 10;

  return axios({
    method: "get",
    url: `http://localhost:9000/api/quotes/${searchTerm}?limit=${limit}&skip=${skip}`,
    responseType: "json",
  }).then((res) => console.log(res));
};
