import * as axios from "axios";
import React from 'react';
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import Header from './Header';


class HeaderContainer extends React.Component {
    componentDidMount() {
      debugger
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}) //відправити авторизаційну куку(налаштування запита)
      .then(response => {
        if (response.data.resultCode === 0) {
          let {userId, login, email} = response.data.data;
          this.props.setAuthUserData(userId, email, login)
        }
      })
    }  

    render() {
      return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);