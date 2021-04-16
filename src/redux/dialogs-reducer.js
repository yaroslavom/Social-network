const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
  messages: [
    { message: "Where did you work last time?", id: 1 },
    { message: "I have a question", id: 2 },
    { message: "Hi!", id: 3 },
  ],
  dialogs: [
    { name: "Oleg", id: 1 },
    { name: "Andrey", id: 2 },
    { name: "Nikita", id: 3 },
    { name: "Olesya", id: 4 },
    { name: "Yana", id: 5 },
    { name: "Dima", id: 6 },
    { name: "Egor", id: 7 },
    { name: "Joshua", id: 8 },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    case ADD_MESSAGE:
      // let newMessage = {
      //     message: state.newMessageText,
      //     id: 4
      //   };
      let newMessage = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { message: newMessage, id: 4 }],
      };  //рефакторинг, ще один спосіб зміни state;
      //   stateCopy.messages.push(newMessage);
      //   stateCopy.newMessageText = ""
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
