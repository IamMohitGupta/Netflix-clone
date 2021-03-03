import React from 'react'
import './Profilescreen.css'
function Profilescreen() {
    return (
        <div className="containing">
            <h1 className='heading1'>Edit Profile</h1>
            <br></br>
            <img className="profile_icon" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
            <input placeholder="Email address" className="inp1" type="email"></input>
            <div>
                <h3 className="texts">Plans (Current Plan : Premium)</h3>
                <h3>Renewal Date:</h3>
            </div>
        </div>
    )
}

export default Profilescreen
