import React from "react";
import '../ProfilePage/Profile.css'
import HomeOption from '../../components/homeOption/homeOption'
import LoginOption from '../../components/loginOption/LoginOption'
import MainProfile from "../../components/mainProfile/profileMain";
import NewTweetBtn from '../../components/newTweetBtn/NewTweetBtn'
import FollowSuggestion from '../../components/Follow-Suggestion/Follow-Suggestion';
// import Feed from "../../components/feedOption/FeedOption";

function Profile(){
    return (
              <div className="main-container">

                <div className="homeOption"><HomeOption/> <NewTweetBtn/> </div>
                <div className="Profile-container"><MainProfile/></div>
                <div className="LoginOption follow-suggession"><LoginOption/> <FollowSuggestion/></div>

             </div>)
}


export default Profile