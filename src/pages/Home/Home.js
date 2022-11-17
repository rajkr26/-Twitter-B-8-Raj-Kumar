import React from "react";
import './Home.css'
import HomeOption from '../../components/homeOption/homeOption'
import LoginOption from '../../components/loginOption/LoginOption'
import Feed from "../../components/feedOption/FeedOption";

function Home(){
    return (
              <div className="main-container">

                <div className="homeOption"><HomeOption/></div>
                <div className="FeedOption"><Feed/></div>
                <div className="LoginOption"><LoginOption/></div>

             </div>)
}


export default Home