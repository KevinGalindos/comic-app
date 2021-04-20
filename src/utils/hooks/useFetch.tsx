import { useState, useEffect } from "react";

export default function useFetch(url: string, options?: any) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        setResult(await res.json());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url, options]);
  return { loading, result, error };
}
