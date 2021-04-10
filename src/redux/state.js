let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 2 },
      { id: 2, message: "It's my new post", likesCount: 17 },
    ],
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

export default state;
