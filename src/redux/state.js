let rerenderEntireTree = () => {
  console.log("state changed");
}

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ""
  rerenderEntireTree(state);
  
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;