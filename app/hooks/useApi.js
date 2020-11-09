import React, { useState } from "react";
export default useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const request = async () => {
    const response = await apiFunc();
    setIsLoading(false);
    console.log(response);
    if (!response.ok) {
      return setError(true);
    }
    setError(false);
    setData(response.data);
  };

  return { data, error, isLoading, request };
};
