import React, { useState } from "react";
export default useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    const response = await apiFunc(...args);
    setIsLoading(false);
    console.log("WHTA IS THE RES");
    console.log(response.ok);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, isLoading, request };
};
