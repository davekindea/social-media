import React from 'react'
import Unknown from "../img/unknown_user.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMessage, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import "./Friends.css"
import { Link } from 'react-router-dom'

const Friends = () => {
  return (
    <div>
        <Link to="/home"><h1 className='back-to-home'><a href="/">Back To Home</a></h1></Link>
        <h1>Your Friends</h1>
        <div className='friend-continer'>
            <form className='friend-search-form'>
                <input type="text" placeholder='Search your friends by name' />
                <button type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <div className='num-of-friends'>
                <h2>20 Friends</h2>
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Dawit</h2>
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Xdhbjex</h2>
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Solomon</h2>
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Habtom</h2>
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Yonas</h2>
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div>
    </div>
  )
}

export default Friends
