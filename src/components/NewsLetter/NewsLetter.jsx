import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="wrapper responsive">
        <div className='newsletter'>
            <h1>Get exclusive offers on youe email</h1>
            <p>Subscribe to our newletter</p>
            <div>
                <input type="email" placeholder='Your Email ...'/>
                <button>Subscribe</button>
            </div>

        </div>
    </div>
  
  )
}

export default NewsLetter