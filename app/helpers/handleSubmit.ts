import { createNewComment } from "../actions/comment";
import { createNewPost } from "../actions/post";

export const handleCommentSubmit = async (
  formData: { name: string; email: string; image: string; text: string },
  postId: string,
) => {
  await createNewComment({ ...formData, postId });
};

export const handlePostSubmit = async (formData: {
  name: string;
  email: string;
  image: string;
  text: string;
}) => {
  await createNewPost(formData);
};
