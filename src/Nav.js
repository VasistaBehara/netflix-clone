import React, { useEffect,useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix logo"
            />

            <img
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/84c20033850498.56ba69ac290ea.png"
            alt="Netflix avatar"
            />
        </div>
    )
}

export default Nav
