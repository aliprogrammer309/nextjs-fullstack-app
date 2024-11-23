import styles from "./postUser.module.css";
import Image from "next/image";

const PostUser = () => {
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
        <span className={styles.username}>Ali Haider</span>
      </div>
    </div>
  );
};

export default PostUser;
