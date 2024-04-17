import React, {useState} from 'react'
import Image from "../images/photo-1417021423914-07097.png"
import logo from "../images/losangeles_mountains.png"
import smallLogo from "../images/vector_smart_object_2.png"
import { Link } from 'react-router-dom'

const Climb = () => {
  const [selectedMountain, setSelectedMountain] = useState(null);

  const selectMountain = (mountain) => {
      setSelectedMountain(mountain);
  };

  return (
<div>
<div className='climb-container'>
      {/* <div className="">
        <div className="number">
          <p className='history'>02.</p>
        </div>
      </div> */}
   <div className="outer-climb">
   <div className="left-climb">
     <h1>02.</h1>
     
     </div>
     <p className='climb'>CLIMB</p>
   </div>
     <div className="right-climb">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis est corrupti expedita similique voluptas soluta sint odio voluptates assumenda tempora consectetur, quam vero? Ratione quae qui fugiat velit officia!</p>
     </div>
    </div>

    <div className="text-bar">
            <div className="text-bar-inside">
                <div
                    className={`mountain-one ${selectedMountain === 'MOUNTAIN 1' ? 'selected' : ''}`}
                    onClick={() => selectMountain('MOUNTAIN 1')}
                >
                    MOUNTAIN 1
                </div>
                <div
                    className={`mountain-two ${selectedMountain === 'MOUNTAIN 2' ? 'selected' : ''}`}
                    onClick={() => selectMountain('MOUNTAIN 2')}
                >
                    MOUNTAIN 2
                </div>
            </div>
        </div>
        <div className="climb-image">
          <img src={Image} alt="" />
          <div className="card">
        <h2 className='schedule'>Schedule</h2>
        <div className='column'>
              <div className='row'>
                    <p>25th November, 2016</p>
                    <p>Lorem, ipsum dolor.</p>
              </div>
              <div className='row'>
                    <p>25th November, 2016</p>
                    <p>Lorem, ipsum dolor.</p>
              </div>
              <div className='row'>
                    <p>25th November, 2016</p>
                    <p>Lorem, ipsum dolor.</p>
              </div>
              <div className='row'>
                    <p>25th November, 2016</p>
                    <p>Lorem, ipsum dolor.</p>
              </div>

        </div>
    </div>

       
        </div>
        <div className="navbar footer" style={{ backgroundColor: '#414f6b' }}>
    <div className="logo">
      <img src={smallLogo} alt="First Logo" />
      <img src={logo} alt="Second Logo" />
    </div>
    <div className="nav-links">
     <p style={{color:"#ccc"}}>Copyright 2016 All rights Reserved</p>
    </div>

  </div>
</div>
  )
}

export default Climb