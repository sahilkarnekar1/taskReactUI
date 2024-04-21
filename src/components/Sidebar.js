import React from 'react'
import searchImg from "../images/search-interface.png";
import monImg from "../images/monitor_3474360.png";
import quesImg from "../images/question-sign-circles_41943.png";
import calenderImg from "../images/calendar_3239948.png";
import statImg from "../images/statistics_7147740.png";
import dollerImg from "../images/dollar_3429806.png";

const Sidebar = () => {
  return (
    <>
        <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width: 70}}>
  <div className="w3-bar-item menuDiv">
    <div className="menuLogo">d</div>
  </div>
  <div className="sidebaritemsdiv">
    <div className="w3-bar-item menuDiv1">
      <img src={searchImg} alt srcSet />
    </div>
    <div className="w3-bar-item menuDiv1">
      <img src={monImg} alt srcSet />
    </div>
    <div className="w3-bar-item menuDiv1">
      <img src={quesImg} alt srcSet />
    </div>
    <div className="w3-bar-item menuDiv1">
      <img src={calenderImg} alt srcSet />
    </div>
    <div className="w3-bar-item menuDiv1">
      <img src={statImg} alt srcSet />
    </div>
    <div className="w3-bar-item menuDiv1">
      <img src={dollerImg} alt srcSet />
    </div>
  </div>
</div>

    </>
  )
}

export default Sidebar