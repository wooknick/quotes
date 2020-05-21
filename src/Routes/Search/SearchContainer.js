import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { withRouter } from "react-router-dom";
import axios from "axios";

const SearchContainer = ({ location: { search } }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTerm = search.split("=")[1];

  const limit = "10";
  const skip = "";
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9000/api/quotes/${searchTerm}?limit=${limit}&skip=${skip}`,
      responseType: "json",
    }).then((res) => {
      console.log("call");
      setData(res.data);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <SearchPresenter searchTerm={searchTerm} data={data} loading={loading} />
  );
};

export default withRouter(SearchContainer);
