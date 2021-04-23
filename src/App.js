import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/ProfileSection/ProfileContainer";
import { Route } from "react-router-dom";
import UsersContainer from "./components/SearchUsers/UsersContainer";

const App = () => {
  return (
    <div className="background_gradient">
      <div className="wrapper">
        <Header />
        <Navbar />
        <section className="content">
          <div className="content_wrapper">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route path="/search" render={() => <UsersContainer/>} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
