import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "../../../components/postUser/postUser";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Post Title</h1>
        <div className={styles.detail}>
          <PostUser />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{Date.now()}</span>
          </div>
        </div>
        <div className={styles.content}>Post Description...</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
