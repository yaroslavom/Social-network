import React from "react";
import Post from "./Post/Post";



const Posts = (props) => {

  // Create Posts Element, use PostsDate in props from index.js
  let postsEl = props.posts.map ( el => <Post message={el.message} likesCount={el.likesCount} />);

  return (
    <div className="profile_posts">
      <div className="new-post">
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button role="submit">Publish</button>
        </div>
      </div>
      <div className="published">
        { postsEl }
      </div>
    </div>
  );
};
 
export default Posts;
