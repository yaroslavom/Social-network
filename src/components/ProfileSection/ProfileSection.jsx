import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="content_profile">
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;
