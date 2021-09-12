import { NEW_POST, NEW_COMMENT, DELETE_POST, EDIT_POST } from "../types";
import { dataComments, dataPosts } from "../../Components/GetAPI";

const initialState = {
  posts: dataPosts,
  comments: dataComments,
  currPostId: 3,
  currCommId: 3,
};

function newDataReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
      return {
        posts: [
          ...state.posts,
          {
            id: state.currPostId + 1,
            title: action.post.title,
            content: action.post.content,
          },
        ],
        comments: [...state.comments],
        currPostId: state.currPostId + 1,
        currCommId: state.currCommId,
      };
    case NEW_COMMENT:
      return {
        posts: [...state.posts],
        comments: [
          ...state.comments,
          {
            id: state.currCommId + 1,
            postId: action.comment.postId,
            content: action.comment.content,
          },
        ],
        currPostId: state.currPostId,
        currCommId: state.currCommId + 1,
      };
    case DELETE_POST:
      let obj = state.posts.find((obj) => obj.id === action.data.postId);
      let index = state.posts.indexOf(obj);
      state.posts.splice(index, 1);

      return {
        posts: state.posts,
        comments: state.comments.filter(
          (obj) => obj.postId !== action.data.postId
        ),
        currPostId: state.currPostId,
        currCommId: state.currCommId,
      };
    case EDIT_POST:
      let objeditedPost = state.posts.find(
        (obj) => obj.id === action.data.postId
      );
      let indexOfEditedPost = state.posts.indexOf(objeditedPost);
      state.posts[indexOfEditedPost].title = action.data.title;
      state.posts[indexOfEditedPost].content = action.data.content;

      return {
        posts: state.posts,
        comments: [...state.comments],
        currPostId: state.currPostId,
        currCommId: state.currCommId,
      };
    default:
      return state;
  }
}

export default newDataReducer;
