import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  if(!props.profile) {return <Preloader/>}
  let userPhoto = props.profile.photos.large;
  if(userPhoto == null) {
    userPhoto = "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
  }

  return (
    <div className={style.content}> 
        <div className={style.profile_background}>
            <img src="https://wallpapercave.com/wp/hXAlSQ1.jpg" alt="background-img"/>
          </div>
        <div className={style.profile_header}>
          <div className={style.profile_ava}>
            <img
              src={userPhoto}
              alt="logo"
            />
          </div>
          <div className={style.profile_name}>{props.profile.fullName}</div>
        </div>
    </div>      
  );
};

export default ProfileInfo;
