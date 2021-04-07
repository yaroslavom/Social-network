import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/ProfileSection/ProfileSection';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="background_gradient">
        <div className="wrapper">
          <Header />
          <Navbar />
            <section className="content">
              <div className="content_wrapper">
                  <Route path='/dialogs' render={ () => < Dialogs messages={ props.messages} dialogs={props.dialogs} />}/>
                  <Route path='/profile' render={ () => < Profile posts={props.posts}/>}/>
              </div>
            </section>
        </div>
      </div>
    </BrowserRouter>    
  )
} 

export default App;