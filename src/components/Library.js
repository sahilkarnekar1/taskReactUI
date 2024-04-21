import React from 'react'
import bookImg from "../images/stack-books_5832416.png"

const Library = () => {
  return (
    <>
       <div className="libraryDiv">
  <div className="savedLibrary">
    <img className="icon" src={bookImg} alt srcSet />
    <p className="savedtxt">My Saved Library 1</p>
    <p className="ddmmyy">dd-mm-yyyy</p>
  </div>
  <div className="savedLibrary">
    <img className="icon" src={bookImg} alt srcSet />
    <p className="savedtxt">My Saved Library 2</p>
    <p className="ddmmyy">dd-mm-yyyy</p>
  </div>
  <div className="savedLibrary">
    <img className="icon" src={bookImg} alt srcSet />
    <p className="savedtxt">My Saved Library 3</p>
    <p className="ddmmyy">dd-mm-yyyy</p>
  </div>
  <div className="savedLibrary">
    <img className="icon" src={bookImg} alt srcSet />
    <p className="savedtxt">My Saved Library 4</p>
    <p className="ddmmyy">dd-mm-yyyy</p>
  </div>
  <div className="savedLibrary">
    <img className="icon" src={bookImg} alt srcSet />
    <p className="savedtxt">My Saved Library 5</p>
    <p className="ddmmyy">dd-mm-yyyy</p>
  </div>
  {/* Add more savedLibrary divs as needed */}
</div>

    </>
  )
}

export default Library