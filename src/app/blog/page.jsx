import styles from "./blog.module.css";
import PostCard from "../../components/postCard/postCard";
import {getPosts, getUsers} from "../../lib/data"

// const fetchData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Error getching the posts!");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  // const posts = await fetchData();
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
