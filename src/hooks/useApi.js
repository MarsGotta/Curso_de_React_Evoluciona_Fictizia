import { useState, useEffect } from "react";
import axios from "axios";

const useApi = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [pending, setPeding] = useState(false);

  console.log("entra por useApi")
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
  }, []);

  return {
    data,
    error,
    pending
  };
};

export default useApi;
