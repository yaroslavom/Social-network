import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      messagesPage={state}
      updateNewMessageText={onMessageChange}
      sendMessage={onSendMessageClick}
    />
  );
};

export default DialogsContainer;
