import Post from "./post";
import { PostsListProps } from "@/app/types";

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>
            <Post post={post} />
          </li>
        </ul>
      ))}
    </>
  );
};

export default PostsList;
