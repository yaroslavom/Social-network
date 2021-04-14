import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/ProfileSection/ProfileSection';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (

      <div className="background_gradient">
        <div className="wrapper">
          <Header />
          <Navbar />
            <section className="content">
              <div className="content_wrapper">
                  <Route path='/dialogs' render={ () => < Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch} />}/>
                  <Route path='/profile' render={ () => < Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
              </div>
            </section>
        </div>
      </div>
   
  )
} 

export default App;
