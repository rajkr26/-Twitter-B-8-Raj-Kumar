import './profileMain.css'
import Tweets from '../feedOption/Tweet/Tweet'
import { useState, useEffect } from 'react'
// import NewTweet from '../NewTweet/NewTweet'
import {useNavigate} from "react-router-dom"


function MainProfile(props){
  
  const navigate = useNavigate()
    function home(){
        navigate('/', true)
     }

const [follow, setFollow] = useState(false)
const [tweet, setTweet] = useState([])
const[count, setcount] = useState(0)

useEffect(() => {
    fetch("Raj-tweetData.json")
      .then((res) => res.json())
      .then((res) => {
        setTweet(res);
      });
  }, []);


  function Like(params){
    let likes=tweet[params].likes
    if(tweet[params].likes===0){
    tweet[params].likes=1
    }else{
      tweet[params].likes=0
    }
    setTweet(tweet)
    console.log(tweet)
    setcount(count+1)
}
   
  return(
        
    <div>
    
   
    {/* <NewTweet/> */}
           

        <div className='profile-header'>
            <div className='profile-back-btn'>
               <a onClick={home}> <svg height={20} width={20} viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></a>
            </div>

             <div>
               
               <h5>{tweet.length?tweet[0].authorName:''}</h5>
               <p>30.3K Tweets</p>
               
             </div>

             <span>
                    <svg fill="cornflowerblue" width="18px" height="18px"viewBox="0 0 24 24"aria-label="Verified account"role="img" className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr">
                        <g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g>
                    </svg>
               
              </span>

        </div>
        <div className='main-cover'>
            <div className="profile-cover">

                <a href="#">
                <img  className="profile-img" src='./raj-dp.jpg'></img>
                </a>

            </div>
      
           <div className="follow-btn-container fw-bold float-end">
                <button onClick={()=>setFollow(!follow)} className="follow-btn">{follow?'Unfollow': 'Follow'}</button>
            </div>
        </div>

     <div className='profile-details-container' >
          <div className='profile-details'>
               <h5>{tweet.length?tweet[0].authorName:''}</h5>
               <span>
                    <svg fill="cornflowerblue" width="18px" height="18px"viewBox="0 0 24 24"aria-label="Verified account"role="img" className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr">
                        <g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g>
                    </svg>
               
              </span>  
          </div>
           <p>{tweet.length?tweet[0].UserName:''}</p>


           <div className='d-flex'>
           <svg viewBox="0 0 24 24" width="23px" height="23px" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg>
           <p className='join-date'>Joined June 2009</p>
           </div>

           <div className='d-flex'>
         < a href='#'> <p className='following '><b>115</b> Following</p></ a>
         < a href='#'> <p className='following '><b>115.6M</b> Followers</p></ a>
           </div>

       </div>

      <nav className='frofile-nav'>
        <ul>
            <li><a href='#'>Tweets</a></li>
            <li><a href='#'>Tweets & Reply</a></li>
            <li><a href='#'>Media</a></li>
            <li><a href='#'>Likes</a></li>
        </ul>
      </nav>
        
         { tweet.map(tweet=><Tweets data ={tweet} Like={Like}/>   ) }
               
            
               
           
      





    </div>
  )

}


export default MainProfile