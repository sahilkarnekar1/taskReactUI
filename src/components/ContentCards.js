import React, { useEffect } from 'react'
import markImg from "../images/marketimg.png";
import Swiper from 'swiper';
import "./Style1.css";

const ContentCards = () => {
    useEffect(() => {
        // Initialize Swiper
        const swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 5,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".rightArrow",
            prevEl: ".leftArrow",
          },
        });
    
        // Add media query listener to adjust slidesPerView
        const mediaQuery = window.matchMedia("(max-width: 600px)");
    
        const handleMediaQuery = (mediaQuery) => {
          if (mediaQuery.matches) {
            // For mobile view
            swiper.params.slidesPerView = 1;
            swiper.update();
          } else {
            // For desktop view
            swiper.params.slidesPerView = 4;
            swiper.update();
          }
        };
    
        // Initial setup
        handleMediaQuery(mediaQuery);
    
        // Listen for changes in media query
        mediaQuery.addListener(handleMediaQuery);
    
        // Clean up
        return () => {
          mediaQuery.removeListener(handleMediaQuery);
          swiper.destroy();
        };
      }, []);
  return (
    <>
      <div className="subdiv">
  <div className="subdiv2">
    <div className="sliderdiv">
      <div className="leftArrow">
        <p>🡨</p>
      </div>
      <div className="slideContentDiv swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Swipe Left Or Right</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card setCardW swiper-slide">
            <img className="card-img-top" src={markImg} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightArrow">
        <p>➜</p>
      </div>
    </div>
    <div className="swiper-pagination" />
    <div className="viewMoreBtnDiv">
      <button>View More</button>
    </div>
  </div>
  <div className="recentReleaseDiv">
    <div className="releaseTopMain">
      <div className="releasetxtDiv">Recent Releases</div>
      <div className="spinnerDiv">
        <div className="select">
          <select>
            <option value={1}>India</option>
            <option value={2}>USA</option>
            <option value={3}>Africa</option>
          </select>
        </div>
      </div>
    </div>
    <div className="releaseNoteseDivMain">
      <div className="releasesub2">
        <div className="releasesub1">
          <div className="circleView" />
          <div className="virticalLineDiv" />
        </div>
        <div className="completeNoteDiv">
          <p className="DateBluetxt">February 12, 2024</p>
          <p className="Headingtxt">Industrial Production</p>
          <p className="desctxt">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Expedita quia incidunt reprehenderit consequuntur nam
            provident ducimus maiores. Suscipit distinctio eaque minus
            nihil, quod recusandae reiciendis beatae nemo totam repellat
            animi, aliquid magnam, ut iste eos? ?
          </p>
        </div>
      </div>
      <div className="releasesub2">
        <div className="releasesub1">
          <div className="circleView" />
          <div className="virticalLineDiv" />
        </div>
        <div className="completeNoteDiv">
          <p className="DateBluetxt">February 12, 2024</p>
          <p className="Headingtxt">Industrial Production</p>
          <p className="desctxt">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Expedita quia incidunt reprehenderit consequuntur nam
            provident ducimus maiores. Suscipit distinctio eaque minus
            nihil, quod recusandae reiciendis beatae nemo totam repellat
            animi, aliquid magnam, ut iste eos? ?
          </p>
        </div>
      </div>
      <div className="releasesub2">
        <div className="releasesub1">
          <div className="circleView" />
          <div className="virticalLineDiv" />
        </div>
        <div className="completeNoteDiv">
          <p className="DateBluetxt">February 12, 2024</p>
          <p className="Headingtxt">Industrial Production</p>
          <p className="desctxt">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Expedita quia incidunt reprehenderit consequuntur nam
            provident ducimus maiores. Suscipit distinctio eaque minus
            nihil, quod recusandae reiciendis beatae nemo totam repellat
            animi, aliquid magnam, ut iste eos? ?
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default ContentCards
