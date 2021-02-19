import React ,{useState,useEffect} from 'react'
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 150){
            handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[]);
    return (
        <div className={`nav ${show && "nav_bg"}`}>
            <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png"
            >          
            </img>
            {/* <img className="bell" src="https://www.flaticon.com/svg/vstatic/svg/1827/1827347.svg?token=exp=1613628782~hmac=679f0389e8e60bb837cbff8517ea24d5"></img> */}
            <img className="user" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
        </div>
    )
}

export default Nav
