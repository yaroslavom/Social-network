import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/searchUsers-reducer";
import SearchUsers from "./SearchUsers";

let mapStateToProps = (state) => {
    return {
        users: state.searchUsersPage.users
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchUsers);
