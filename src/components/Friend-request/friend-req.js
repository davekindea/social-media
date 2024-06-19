import React from 'react'
import Unknown from "../img/unknown_user.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./friend-req.css"
import { Link } from 'react-router-dom'

const FriendRequests = () => {
  return (
    <div>
        <Link to="/home"><h1>back to hopme</h1></Link>
        <h1 className='back-to-home'><a href="/">Back To Home</a></h1>
        <h1>Friend Requests</h1>
        <div className='request-continer'>
            <form className='request-search-form'>
                <input type="text" placeholder='Search friend requests' />
                <button type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <div className='num-of-requests'>
                <h2>5 Friend Requests</h2>
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Dawit</h2>
                <div className='action-buttons'>
                    <button className='accept-btn'>Accept</button>
                    <button className='decline-btn'>Decline</button>
                </div>
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Xdhbjex</h2>
                <div className='action-buttons'>
                    <button className='accept-btn'>Accept</button>
                    <button className='decline-btn'>Decline</button>
                </div>
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Solomon</h2>
                <div className='action-buttons'>
                    <button className='accept-btn'>Accept</button>
                    <button className='decline-btn'>Decline</button>
                </div>
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Habtom</h2>
                <div className='action-buttons'>
                    <button className='accept-btn'>Accept</button>
                    <button className='decline-btn'>Decline</button>
                </div>
            </div>
            <div className='detailed-continer'>
                <img src={Unknown} alt='Unknown' />
                <h2>Yonas</h2>
                <div className='action-buttons'>
                    <button className='accept-btn'>Accept</button>
                    <button className='decline-btn'>Decline</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FriendRequests
