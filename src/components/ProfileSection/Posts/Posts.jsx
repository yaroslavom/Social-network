import React, { createRef } from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import Post from "./Post/Post";

const Posts = (props) => {

  // Create Posts Element, use PostsDate in props from index.js
  let postsEl = props.posts.map ( el => <Post message={el.message} likesCount={el.likesCount} />);

  // Ref - допомагає зчитувати інформацію, коли це необхідно, але краще лише зчитувати і не змінювати її.
  // У нашому випадку post має передатися в state, де будуть присвоюватися нові id, like, тому така функція потрубє змін.
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className="profile_posts">
      <div className="new-post">
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Publish</button>
        </div>
      </div>
      <div className="published">
        { postsEl }
      </div>
    </div>
  );
};
 
export default Posts;
