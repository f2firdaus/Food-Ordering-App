// import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { menuData } from "../menuData";
const RestaurantsMenu = () => {
  // const params=useParams()
  const { id } = useParams();
  console.log(id);
  // console.log(myId)

  // console.log(itemNames)
  const selectRestraunt = menuData.find((restro) => restro.id === id);
  // const imageMenu= menuData.find(images =>images.id === id)
  return !selectRestraunt ? (
    <>
      <h1>Restaurant Not FOUND</h1>
    </>
  ) : (
    <>
      <div className="restro-menu">
        <div className="menu-heading">
          <div key={id} className="menu-img">
            <img
              className="cover-image"
              src={menuData[id - 1].coverimage}
              alt=""
            />
          </div>

            <div className="menu-heading-details">
              <div className="menu-heading-name">
                <h1>{menuData[id - 1].name}</h1>
                <div className="star-rating">
                <span className="rating-star">☆{menuData[id - 1].rating} 
                  </span> <hr />
                  <span >10K + Rating</span>
                  </div>
                </div>
            <div className="menu-details">
              {selectRestraunt.menu.map((myMenu) => {
                return (
                  <>
                    <div className="food-details">
                      <div className="food-menu">
                        <p>{myMenu.item_name}</p>
                        <p>{Math.floor(myMenu.price * 50)}: FOr TWo</p>
                      </div>
                      <div className="menu-image">
                        <img src={myMenu.image} alt="" width={70} />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
