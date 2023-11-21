import { useState } from "react";
export default function useFunction() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page}&select=title,price`
      );
      const result = await response.json();
      setData((prev) => [...prev, ...result.products]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    data,
    setData,
    page,
    setPage,
    loading,
    setLoading,
    getData,
    handleInfiniteScroll,
  };
}
