import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className="content_profile">
          <ProfileInfo />
          <Posts posts={props.posts}/>
        </div>    
    )
}

export default Profile;