import React from "react";
import style from "./../Dialogs.module.css";

const SendMessage = () => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
      let newMessage = newMessageElement.current.value;
      alert(newMessage);
    };

    return (
        <div className={style.new_message}>
            <div>
                <textarea textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default SendMessage;