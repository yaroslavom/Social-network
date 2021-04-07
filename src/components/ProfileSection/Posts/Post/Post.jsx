import React from 'react';
import profile from './Post.module.css';

const Post = (props) => {
    return (  
        <div className={profile.published_post}>
            <img src="https://www.freeiconspng.com/uploads/harley-davidson-logo-png-4.png" />
            <div className="Post_text">{ props.message }</div>
            <span>Like</span>{ props.likesCount}
        </div>  
    )
}

export default Post;