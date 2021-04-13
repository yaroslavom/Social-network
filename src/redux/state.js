const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
      if (action.type === ADD_POST) {
        let newPost = {
          id: 3,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state);
      }
  
      else if (action.type === UPDATE_NEW_POST_TEXT){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
      }
    }
}    

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


window.store = store; 

export default store;