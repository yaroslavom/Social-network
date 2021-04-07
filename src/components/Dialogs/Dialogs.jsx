import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  // Create Dialogs with Messages, use date in props from index.js
  let messagesEl = props.messages.map((el) => (
    <Message message={el.message} />
  ));
  let dialogsEl = props.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
 
  return (
    <div className={style.content_dialogs}>
      <div className={style.dialogs_items}>{ dialogsEl }</div>
      <div className={style.messages}>{ messagesEl } </div>
    </div>
  );
};

export default Dialogs;
