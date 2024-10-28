import { Post } from "@prisma/client";

export interface PostsListProps {
  posts: Post[];
}

export interface PostProps {
  post: Post;
}

export interface FormData {
  post: string;
}
