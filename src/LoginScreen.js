import React ,{useState} from 'react'
import './LoginScreen.css'
import SignUp from './SignUp'

function LoginScreen() {
    const [signin,setsignin] = useState(false); 
    return (
        <div className="Loginscreen">
            {signin ? (
                <SignUp />
            ):(
                <div className="background">
                <img className="logos" 
                src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" 
                alt=""></img>
                <button onClick={() => setsignin(true)} className="signin">Sign In</button>
                <div className="grad">
                <div className="content">
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2 className="sub_h">Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <form>
                    <input type="email" placeholder="Email address"className="input_email"></input>
                    <button onClick={() => setsignin(true)}className="get_started">GET STARTED</button>
                    </form>
                </div>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default LoginScreen
