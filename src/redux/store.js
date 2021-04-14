/* import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {     
    _state: {
      profilePage: {
        posts: [
          { id: 2, message: "Hi, how are you?", likesCount: 2 },
          { id: 1, message: "It's my new post", likesCount: 17 },
        ],
        newPostText: ""
      },
      messagesPage: {
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
      },
    },

    _callSubscriber() {
      console.log("state changed");
    },

    getState() {
      return this._state;
    },

    subscribe (observer) {
      store._callSubscriber = observer;
    },

    dispatch (action){
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._callSubscriber(this._state);
    }
}    


window.store = store; 

export default store; */