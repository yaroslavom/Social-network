import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="content_profile">
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
