import React, {useState} from 'react'
import logo from "../images/losangeles_mountains.png"
import smallLogo from "../images/vector_smart_object_2.png"
import { Link } from 'react-router-dom'

import silder1 from "../images/rectangle_23_copy.jpg"
import slider2 from "../images/rectangle_23.jpg"
const History = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  return (

    <div className='history'>
          <div className="navbar" style={{ backgroundColor: 'white' }}>
    <div className="logo">
      <img src={smallLogo} alt="First Logo" />
      <img src={logo} alt="Second Logo" />
    </div>
    <div className="nav-links">
      <Link style={{textDecoration: "none", color: "black"}} to="/history"><h3>01. History</h3></Link>
      <Link style={{textDecoration: "none", color: "black"}} to="/climb"><h3>02. Team</h3></Link>
    </div>

  </div>
      <div className="image-div">
        <div className="image-div-inside-text">
          <p className="number">01.</p>
          <p className="history">HISTORY</p>
        </div>
        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aperiam minus, mollitia, iste necessitatibus, eius similique explicabo libero aliquam corporis incidunt! Incidunt doloremque hic odit expedita. Libero vitae explicabo molestiae.</p>


      <div className="second-image-div">
        <div className="second-image">
            


        </div>
        <div className="slider">
              

<img
              src={silder1}
              alt=""
              style={{ border: selectedImage === 0 ? '2px solid yellow' : 'none' }}
              onClick={() => handleImageClick(0)}
            />
            <img
              src={slider2}
              alt=""
              style={{ border: selectedImage === 1 ? '2px solid yellow' : 'none' }}
              onClick={() => handleImageClick(1)}
            />
            <img
              src={silder1}
              alt=""
              style={{ border: selectedImage === 2 ? '2px solid yellow' : 'none' }}
              onClick={() => handleImageClick(2)}
            />
            <img
              src={slider2}
              alt=""
              style={{ border: selectedImage === 3 ? '2px solid yellow' : 'none' }}
              onClick={() => handleImageClick(3)}
            />

            </div>

            <div className="ball-container">
            <div className={`ball ${selectedImage === 0 ? 'selected' : ''}`}></div>
            <div className={`ball ${selectedImage === 1 ? 'selected' : ''}`}></div>
            <div className={`ball ${selectedImage === 2 ? 'selected' : ''}`}></div>
            <div className={`ball ${selectedImage === 3 ? 'selected' : ''}`}></div>
          </div>

        


      </div>
    </div>

    </div>
  )
}

export default History