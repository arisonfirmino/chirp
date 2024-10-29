import Post from "@/app/components/post/post";
import { fetchPostById } from "@/app/helpers/fetchPostById";
import { CommentsPageProps } from "@/app/types";
import { ChevronLeftIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Form from "@/app/components/form/form";
import Comment from "../../components/comment";
import { createNewComment } from "@/app/actions/comment";

const CommentsPage = async ({ params }: CommentsPageProps) => {
  const { id } = await params;

  const post = await fetchPostById({ id });

  if (!post) {
    redirect("/timeline");
  }

  return (
    <>
      <div className="px-5 pt-5">
        <Link
          href="/timeline"
          prefetch
          className="flex items-center gap-1 text-blue-700 active:text-gray-400"
        >
          <ChevronLeftIcon size={16} />
          Timeline
        </Link>
      </div>

      <div className="px-5 pt-5">
        <Post post={post} />
      </div>

      <div className="flex items-center gap-2.5 text-nowrap px-5 pt-5 text-sm text-gray-400">
        Deixe um comentário para {post.name}
        <hr className="w-full" />
      </div>

      <div className="px-5 pt-5">
        <Form
          placeholder="Deixe um comentário"
          handleSubmitForm={createNewComment}
          postId={id}
        />
      </div>

      <div className="flex items-center gap-2.5 text-nowrap px-5 pt-5 text-sm text-gray-400">
        Comentários
        <hr className="w-full" />
      </div>

      <div className="space-y-5 px-5 py-5">
        {post.comments.map((comment) => (
          <ul key={comment.id}>
            <li>
              <Comment comment={comment} />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default CommentsPage;
