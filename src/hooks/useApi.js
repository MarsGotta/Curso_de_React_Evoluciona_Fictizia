import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useApi = (url, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const doFetch = useCallback(async () => {
    setPending(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setPending(false);
    }
  },[url]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return {
    data,
    error,
    pending,
  };
};

export default useApi;
