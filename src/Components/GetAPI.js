import axios from "axios";

function GetAPIdataPosts() {
  let postsData = [];
  axios.get(`https://bloggy-api.herokuapp.com/posts`).then((res) => {
    const posts = res.data;

    posts.forEach((post) => {
      const onePost = {
        id: post.id,
        title: post.title,
        content: post.body,
      };
      postsData.push(onePost);
    });
  });

  return postsData;
}

export const dataPosts = GetAPIdataPosts();

function GetAPIdataComments() {
  let commentsData = [];
  axios.get(`https://bloggy-api.herokuapp.com/comments`).then((res) => {
    const comments = res.data;

    comments.forEach((comment) => {
      const oneComment = {
        id: comment.id,
        postId: comment.postId,
        content: comment.body,
      };
      commentsData.push(oneComment);
    });
  });

  return commentsData;
}

export const dataComments = GetAPIdataComments();
