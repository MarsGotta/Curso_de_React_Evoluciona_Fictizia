import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
    pending,
  };
};

export default useApi;
