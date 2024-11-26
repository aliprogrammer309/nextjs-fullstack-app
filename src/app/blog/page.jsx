import styles from "./blog.module.css";
import PostCard from "../../components/postCard/postCard";

const post = {
  img: "/about.png",
  createdAt: Date.now(),
  title: "Post Title",
  body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, velit?",
  slug: "1",
};

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Error getching the posts!");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await fetchData();
  console.log("posts: ", posts);

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
