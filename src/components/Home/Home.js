import React from 'react'
import Navbar from '../navbar/nave';
import Leftbar from '../leftBar/Leftbar';
import Right from '../rightBar/Right';
import Post from '../post/post';
import SocialMediaStoryPost from '../post-page/ppost-page';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Leftbar/>
        <Right/>
        <SocialMediaStoryPost/>
        <Post/>
        
      
    </div>
  )
}

export default Home
