import React from 'react';
import Unknown from '../img/unknown_user.png';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import Test1 from "../assets/test1.jfif"
import Test2 from "../assets/test2.jfif"
import Test3 from "../assets/test3.jfif"
import Test4 from "../assets/test4.jfif"

const Post = () => {
  return (
    <div className='post'>
      <div className='post-sec'>
        <div className='post-friends'>
          <div className='posting'>
            <img src={Unknown} alt='' />
            <div className='post-det'>
              <span>Dawit Kindea</span>
              <span>5hr</span>
          </div>
          </div>
          <h3 className='heading-post'>Hello world</h3>
          <div className='post-img'>
              <img src={Test1} alt='post' />
          </div>
          <div className='like-comment-count'>
            <h3>Likes</h3>
            <h3>
              <a href='#'>3 comments</a>
            </h3>
          </div>
          <div className='like-comment'>
            <div className='like'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <h3>Like</h3>
            </div>
            <div className='comment'>
              <FontAwesomeIcon icon={faComment} />
              <h3>Comment</h3>
            </div>
          </div>
        </div>
        <br/>
        <div className='post-friends'>
          <div className='posting'>
          <img src={Unknown} alt='' />
          <div className='post-det'>
            <span>yonas</span>
            <span>7hr</span>
          </div>
          </div>

          <h3 className='heading-post'>jkdscn jcjcjncfj</h3>
          <div className='post-img'>
            <img src={Test2} alt='post' />
          </div>
          <div className='like-comment-count'>
            <h3> 3 Likes</h3>
            <h3>
              <a href='#'>5 comments</a>
            </h3>
          </div>
          <div className='like-comment'>
            <div className='like'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <h3>Like</h3>
            </div>
            <div className='comment'>
              <FontAwesomeIcon icon={faComment} />
              <h3>Comment</h3>
            </div>
          </div>
        </div>
        <br/>
        <div className='post-friends'>
          <div className='posting'>
          <img src={Unknown} alt='' />
          <div className='post-det'>
            <span>mekin</span>
            <span>6hr</span>
          </div>
          </div>
          <h3 className='heading-post'>djknewc jdceab wejc</h3>
          <div className='post-img'>
            <img src={Test3} alt='post' />
          </div>
          <div className='like-comment-count'>
            <h3>10 Likes</h3>
            <h3>
              <a href='#'>7 comments</a>
            </h3>
          </div>
          <div className='like-comment'>
            <div className='like'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <h3>Like</h3>
            </div>
            <div className='comment'>
              <FontAwesomeIcon icon={faComment} />
              <h3>Comment</h3>
            </div>
          </div>
        </div>
        <br/>
        <div className='post-friends'>
          <div className='posting'>
          <img src={Unknown} alt='' />
          <div className='post-det'>
            <span>Abdu</span>
            <span>11hr</span>
          </div>
          </div>
          <h3 className='heading-post'>jkdn cd cd cdndn </h3>
          <div className='post-img'>
            <img src={Test4} alt='post' />
          </div>
          <div className='like-comment-count'>
            <h3>20 Likes</h3>
            <h3>
              <a href='#'>13 comments</a>
            </h3>
          </div>
          <div className='like-comment'>
            <div className='like'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <h3>Like</h3>
            </div>
            <div className='comment'>
              <FontAwesomeIcon icon={faComment} />
              <h3>Comment</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
