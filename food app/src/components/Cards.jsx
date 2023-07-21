import React from 'react'

const Cards = () => {
  return (
      <>
          <div className="container">
              <div className="img">
                  <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h0iuahkue4rxgwmqhxcz" width="300px" alt="" />
              </div>
              <div className="name">
                  <h4>Chhole Bhature</h4>
                  <p>North Indian, Snacks, Indian</p>                  
              </div>
              <div className="rating">
                  <span>Rating</span>
                  <span>30 MINS</span>
                  <span>RS 100 FOR TWO</span>
              </div>
          </div>
    </>
  )
}

export default Cards