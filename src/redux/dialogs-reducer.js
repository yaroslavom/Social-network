const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    messages: [
        { message: "Where did you work last time?", id: 1 },
        { message: "I have a question", id: 2 },
        { message: "Hi!", id: 3 },
      ],
      dialogs : [
        { name: "Oleg", id: 1 },
        { name: "Andrey", id: 2 },
        { name: "Nikita", id: 3 },
        { name: "Olesya", id: 4 },
        { name: "Yana", id: 5 },
        { name: "Dima", id: 6 },
        { name: "Egor", id: 7 },
        { name: "Joshua", id: 8 }, 
      ],
      newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type ) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText, 
                id: 4
              };
              state.messages.push(newMessage);
              state.newMessageText = ""
        return state;
            case UPDATE_NEW_MESSAGE_TEXT:
                state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;