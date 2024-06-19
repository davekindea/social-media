import React from 'react'
import gallary1 from "../assets/memory1.jfif"
import gallary2 from "../assets/memory2.jfif"
import gallary3 from "../assets/memory3.jfif"
import gallary4 from "../assets/memory4.jfif"
import gallary5 from "../assets/memory5.jfif"
import "./gallary.css"
import { Link } from 'react-router-dom'

const Gallary = () => {
  return (
    <div>
        <Link to="/home"><h2 className='gallary-heading'><a>Back to Home</a></h2></Link>
        <h1>Gallary</h1>
        <div className='Memories'>
            
            <div className='gallary-continer'>
                <div className='image-continer-gallary'>
                    <img src={gallary1} alt=''/>
                    <div className='description-gallary'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-gallary'>
                    <img src={gallary2} alt=''/>
                    <div className='description-gallary'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-gallary'>
                    <img src={gallary3} alt=''/>
                    <div className='description-gallary'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-gallary'>
                    <img src={gallary4} alt=''/>
                    <div className='description-gallary'>
                        <h1>hello world</h1>
                        <h3>21/10/2000</h3>
                        <button className='edit-btn'>Edit</button>
                        <button className='remove-btn'>Remove</button>
                    </div>
                </div>
                <div className='image-continer-gallary'>
                    <img src={gallary5} alt=''/>
                    <div className='description-gallary'>
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

export default Gallary
