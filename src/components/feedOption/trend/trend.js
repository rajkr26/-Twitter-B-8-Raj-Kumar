// import React, { useState } from 'react';
import '../trend/trend.css'

function trend(props) {
        
    return(
        <div className="trending-div">
            <p className="trending-title">{props.data.header}</p>
            <p className="text">{props.data.text}</p>
            <p className="tweet-count">{props.data.tweetCount}</p>
            
        </div>
    )
}
            
                   
                       
       
   

   







    export default trend