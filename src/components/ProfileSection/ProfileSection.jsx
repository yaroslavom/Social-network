import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/Profilelnfo";


const Profile = (props) => {
  return (
    <div className="content_profile">
      <ProfileInfo profile={props.profile} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
