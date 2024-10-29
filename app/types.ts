import { Post } from "@prisma/client";

// Timeline Types

export interface PostsListProps {
  posts: Post[];
}

export interface PostProps {
  post: Post;
}

export interface FormData {
  post: string;
}

// Highlights Feed Types

export interface HighlightsFeedProps {
  topUsers: Record<string, Post[]>;
}

export interface UserHighlightProps {
  image: string;
  name: string;
  length: number;
}

// Comments Page Types

export interface CommentsPageProps {
  params: Promise<{
    id: string;
  }>;
}
