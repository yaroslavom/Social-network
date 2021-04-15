import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/ProfileSection/ProfileSection";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="background_gradient">
      <div className="wrapper">
        <Header />
        <Navbar />
        <section className="content">
          <div className="content_wrapper">
            <Route
              path="/dialogs"
              render={() => <DialogsContainer store={props.store} />}
            />
            <Route
              path="/profile"
              render={() => <Profile store={props.store} />}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
