import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let state = props.messagesPage;

  // Create Dialogs with Messages, use date in props from index.js
  let messagesEl = state.messages.map((el) => <Message message={el.message} key={el.id}/>);
  let dialogsEl = state.dialogs.map((el) => (
    <DialogItem name={el.name} key={el.id} id={el.id} />
  ));
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={style.content_dialogs}>
      <div className={style.dialogs_items}>{dialogsEl}</div>
      <div className={style.messages}>{messagesEl}</div>
      <div className={style.new_message}>
        <div>
          <textarea
            onChange={onMessageChange}
            value={newMessageText}
            placeholder="enter your message"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
