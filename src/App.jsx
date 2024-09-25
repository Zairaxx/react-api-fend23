import './App.css'
import { useState, useEffect } from "react";
import { Post } from "./components/Post";

export default function App() {
  const [show, setShow] = useState(true);
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
