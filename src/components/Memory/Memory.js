import React from 'react'
import Memory1 from "../assets/memory1.jfif"
import Memory2 from "../assets/memory2.jfif"
import Memory3 from "../assets/memory3.jfif"
import Memory4 from "../assets/memory4.jfif"
import Memory5 from "../assets/memory5.jfif"
import "./Memory.css"
import { Link } from 'react-router-dom'

const Memory = () => {
  return (
    <div>
        <Link to="/home"><h2 className='memory-heading'><a href="/">Back to Home</a></h2></Link>
        <h1>My Memories</h1>
        <div className='Memories'>
            
            <div className='memory-continer'>
                <div className='image-continer-memory'>
                    <img src={Memory1} alt=''/>
                    <div className='description-memory'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-memory'>
                    <img src={Memory2} alt=''/>
                    <div className='description-memory'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-memory'>
                    <img src={Memory3} alt=''/>
                    <div className='description-memory'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-memory'>
                    <img src={Memory4} alt=''/>
                    <div className='description-memory'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-memory'>
                    <img src={Memory5} alt=''/>
                    <div className='description-memory'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Memory
