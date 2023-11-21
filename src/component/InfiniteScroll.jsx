import "../App.css";
import { useEffect } from "react";
import useFunction from "../hook/useFunction";
const infiniteScroll = () => {
  const { data, page, loading, getData, handleInfiniteScroll } = useFunction();

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, [handleInfiniteScroll]);

  return (
    <div>
      <h1>Infinite-Scrolling</h1>
      <div className="description_data">
        {data.map((items) => {
          return <h2 key={items.id}>{items.title}</h2>;
        })}
        <div>{loading && <h3>Loading...</h3>}</div>
      </div>
    </div>
  );
};

export default infiniteScroll;

//1:- window.innerHeight:-that represents the inner height of a browser window's content area. It returns the height of the viewport (the visible area of the web page) in pixels,

//2:- document.documentElement.scrollTop:-that is commonly used to get or set the number of pixels that the document's content is currently scrolled vertical

//3:- document.documentElement.scrollHeight:-that is used to retrieve the entire height of the HTML document, including the content that may be currently hidden due to scrolling
// { This property returns the entire height of the element, including the content that is not currently visible due to scrolling}
