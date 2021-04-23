import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  if(!props.profile) {return <Preloader/>}

  return (
    <div className={style.content}> 
        <div className={style.profile_background}>
            <img src="https://wallpapercave.com/wp/hXAlSQ1.jpg" alt="background-img"/>
          </div>
        <div className={style.profile_header}>
          <div className={style.profile_ava}>
            <img
              src={props.profile.photos.large}
              alt="logo"
            />
          </div>
          <div className={style.profile_name}>{props.profile.fullName}</div>
        </div>
    </div>      
  );
};

export default ProfileInfo;
