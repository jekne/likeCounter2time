// src/components/ArticleList.js
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState([]);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I am going to fetch some data");
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("i come back", res);
      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map((x) => {
        return <ArticleCard key={x.id} title={x.title} content={x.body} />;
      })}
    </div>
  );
}
