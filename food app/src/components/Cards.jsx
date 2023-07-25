// import React from 'react'
// import { useEffect, useState } from 'react'
import { menuData } from '../menuData';
// import Shimmer from './Shimmer';
// import { foodData } from '../foodData'
import { Link } from 'react-router-dom';

const Cards = ({ search }) => {

    
    
   
  return(
      <>
          
              <div className="cards">
              
                   {
                      menuData.filter((item) => item.name.toLowerCase().includes(search))
                          .map((restraunt) => {
                              return (
                                  <>
                                      <div className="container">
                                          <Link className='link' to={`/menu/${restraunt.id}`}>     <div className="img">
                                              <img src={restraunt.cloudinaryImageId} alt="" />
                                          </div>
                                          <div className="name">
                                                  <h4>{restraunt.name}</h4>
                                                  <p>{ restraunt.areaName}</p>
                                    
                                
                                          </div>
                                          <div className="rating">
                                              <div className='rating-1'>
                                                  <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1200px-Star_icon_stylized.svg.png" width="10px" alt="" />{restraunt.rating} </span></div>
                                              <span>{restraunt.timeToDeliver}Minutes</span>
                                              <span></span>
                                          </div>
                                          </Link>
                                      </div>
                                      

                          
                                  </>
                              )
                          })
                  
             
                 
                  }
              </div>
          
    </>
  )
}

export default Cards