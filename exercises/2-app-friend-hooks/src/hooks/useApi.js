import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const doFetch = async () => {
    setPending(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    doFetch();
  }, [url]);

  return {
    data,
    error,
    pending,
    refetch: doFetch
  };
};

export default useApi;
