import React from 'react'
import Logo from "../images/vector_smart_object_2.png"
import Logo2 from "../images/losangeles_mountains_copy.png"
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className='Top'>
    <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navbar_right_section">
                <div className="history_text">
                <h3><Link style={{textDecoration: "none", color: "white"}} to="/history">01. History</Link></h3>

                </div>
                <div className="Team_text">
                <h3><Link style={{textDecoration: "none", color: "white"}} to="/climb">01. Team</Link></h3>
                </div>

            </div>
    </div>   
    <div className="big_logo">
        <img className='big_logo_img' src={Logo2} alt="Logo" /></div>     
    </div>
  )
}

export default Home