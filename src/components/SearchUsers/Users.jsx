import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/image/user-logo.png"

const Users = (props) => {

  let getUsers = () => {

  
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items);
      });
    /* props.setUsers([
        {
            id: 2,
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
            followed: false,
            fullName: "Dmitriy",
            status: "I'm an Actor",
            location: { city: "Mosscow", country: "Russia" },
          },
          {
            id: 1,
            photoUrl: "https://enter.expert/upload/iblock/6f9/6f98faf8110be82b43bce99bfdbfea78.png.pagespeed.ce.5EtEzeQFTz.png",
            followed: true,
            fullName: "Alexander",
            status: "I'm a Student of KNU",
            location: { city: "Kyiv", country: "Ukraine" },
          },
          {
            id: 3,
            photoUrl: "https://worldbaristachampionship.org/wp-content/uploads/2018/04/Belarus-web.jpg",
            followed: false,
            fullName: "Daria",
            status: "If you want to send me a message, use Instagram;)",
            location: { city: "Minsk", country: "Belarus" },
          },
    ]) */
    }
  }
  
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photoSize}/>
            </div>
            <div>
              {u.followed 
              ? <button onClick={() => {props.unFollow(u.id)}}>unfollow</button>
              : <button onClick={() => {props.follow(u.id)}}>follow</button>}  
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
