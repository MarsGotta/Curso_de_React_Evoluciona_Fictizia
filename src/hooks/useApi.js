import { useState, useEffect } from "react";
import axios from "axios";

const useApi = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [pending, setPeding] = useState(false);

  const doFetch = async () => {
    setPeding(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setPeding(false);
    }
  };

  useEffect(() => {
    doFetch();
  });

  return {
    data,
    error,
    pending
  };
};

export default useApi;
