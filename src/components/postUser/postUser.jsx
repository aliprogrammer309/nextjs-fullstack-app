import styles from "./postUser.module.css";
import Image from "next/image";

const fetchUserData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {cache: "no-store"});

  if (!res.ok) {
    throw new Error("Error geting the user data!");
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await fetchUserData(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src="/noavatar.png"
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.name}</span>
      </div>
    </div>
  );
};

export default PostUser;
