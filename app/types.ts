import { Post, Prisma } from "@prisma/client";

// Timeline Types

export interface PostsListProps {
  posts: Post[];
}

export interface PostProps {
  post: Prisma.PostGetPayload<{
    include: {
      comments: true;
    };
  }>;
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
  params: {
    id: string;
  };
}
