import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapStateToDispatch = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: (text) => {
      dispatch(addPostActionCreator(text))
    }
  }
};
const PostsContainer = connect(mapStateToProps, mapStateToDispatch)(Posts);

export default PostsContainer;
