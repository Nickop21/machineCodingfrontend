import React, { useEffect, useState } from "react";

function useFetchApi( apiUrl, options ) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  async function fetchData(url) {
    try {
        setLoading(true);
        setError("");
      const response = await fetch(url, options={});

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataFromUrl = await response.json();

      setData(dataFromUrl);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData(apiUrl);
    // Cleanup function
    return () => {
      setData([]);
    }

  },[apiUrl,options])

  return { loading, error, data };
}

export default useFetchApi;
