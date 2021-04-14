import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../../redux/dialogs-reducer";

import style from "./../Dialogs.module.css";

const SendMessage = (props) => {
   // let newMessageElement = React.createRef();  на відміну від Posts, ми скорочуємо код, відмовившись від Ref; 
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (event) => {
        // let text = newMessageElement.current.value; замість current що віддало Ref, створюємо event.target;
        let text = event.target.value; // event.target - отримує value від textarea;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    
    return (
        <div className={style.new_message}>
            <div>
                <textarea onChange={onMessageChange} value={props.newMessageText} placeholder="enter your message" /* ref={newMessageElement} */ />
            </div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default SendMessage;