import React ,{useRef} from 'react'
import { auth } from './firebase';
import './SignUp.css'

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e)=> {
        e.preventDefault();
        auth .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        });
    }
    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then(authUser => {
                console.log(authUser);
            }).catch(error => {
                alert(error.message);
            })
    }
    return (
        <div className="signup">
            <div className="background">
                <img className="logos" 
                src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" 
                alt=""></img>
                <button className="signin">Sign In</button>
                <div className="grad">
                <div className="contents">
                   <h1>Sign In</h1>
                   <form>
                       <input ref={emailRef} className="inps" placeholder="Email Address" type="email" />
                       <input ref={passwordRef}className="inps" placeholder="Password" type="password"/>
                       <button type="submit" onClick={signIn}>Sign In</button>
                       <h4><span className="new_to">New to Netflix? </span>
                       <span className="signup_link" onClick={register}>Sign Up now.</span></h4>
                   </form>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
