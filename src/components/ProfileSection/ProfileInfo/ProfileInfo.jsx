import React from "react";
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div className={style.content}> 
        <div className={style.profile_background}>
            <img src="https://wallpapercave.com/wp/hXAlSQ1.jpg" alt="background-img"/>
          </div>
        <div className={style.profile_header}>
          <div className={style.profile_ava}>
            <img
              src="https://www.freeiconspng.com/uploads/harley-davidson-logo-png-4.png"
              alt="logo"
            />
          </div>
          <div className={style.profile_name}>Profile Name</div>
        </div>
    </div>      
  );
};

export default ProfileInfo;
