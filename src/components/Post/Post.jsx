import { useState } from "react";
import {UserInfo} from "../UserInfo/UserInfo";
import styles from './Post.module.css'

export const Post = ({ title, body, userId }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let user = await response.json();
    setUser(user);
  };

  return (
    <div className={styles.border}>
      <h3>{title}</h3>
      <p>{body}</p>
      {user ? <UserInfo {...user} /> : <button onClick={getUser}>Get user</button>}
    </div>
  );
};
