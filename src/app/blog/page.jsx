import styles from "./blog.module.css";
import PostCard from "../../components/postCard/postCard";

const post = {
  img: '/about.png',
  createdAt: Date.now(),
  title: 'Post Title',
  body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, velit?',
  slug: '1',
}

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard post={post} />
      </div>
      <div className={styles.post}>
        <PostCard post={post} />
      </div>
      <div className={styles.post}>
        <PostCard post={post} />
      </div>
      <div className={styles.post}>
        <PostCard post={post} />
      </div>

    </div>
  );
};

export default BlogPage;
