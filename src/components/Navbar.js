import React from 'react'
import calImg from "../images/schedule_3652191.png";
import clockImg from "../images/clock_2784459.png";
import bellImg from "../images/bell_1156949.png";

const Navbar = () => {
  return (
    <>
        <nav className="navbarDiv">
  <div className="left-side">
    <p className="bold-text">Good Afternoon Akshay</p>
    <p className="small-text">You are subscribed to retail</p>
  </div>
  <div className="right-side">
    <div className="calIcon">
      <img className="icon" src={calImg} alt srcSet />
    </div>
    <div className="txtDate">
      <p>Today, 14 February</p>
    </div>
    <div className="clockIcon">
      <img className="icon" src={clockImg} alt srcSet />
    </div>
    <div className="txtDate">
      <p>16:42</p>
    </div>
    <div className="bellIcon">
      <img className="icon" src={bellImg} alt srcSet />
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar