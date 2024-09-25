import './App.css'
import { useState, useEffect } from "react";
import { Post } from "./components/Post/Post";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <div className="App">
      <h1>React Forum</h1>
      {posts.map((post) => {
        return <Post {...post} />;
      })}
    </div>
  );
}
