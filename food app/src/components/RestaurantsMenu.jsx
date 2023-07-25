// import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { menuData } from "../menuData";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import MenuDetails from "./MenuDetails";
const RestaurantsMenu = () => {
  const { id } = useParams();

  const [searchMenu, setSearchMenu] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [menuImage ,setMenuImage] =useState(null)

  const menuName = menuData[id - 1].name;

  const menuDetails = (menuImage) => {
    console.log(showImage);
    setShowImage(!showImage);
    setMenuImage(menuImage)
  };
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
          <div className="link-jump">
            <a href="/">
              Home / <a href={`/menu/${id}`}>{menuData[id - 1].name}</a>
            </a>
            <div className="input-menu-search">
              <input
                type="text"
                value={searchMenu}
                onChange={(e) => setSearchMenu(e.target.value)}
                className="menu-search"
                placeholder={`Search in ${menuData[id - 1].name}`}
              />
              <CiSearch className="search-icon" />
            </div>
          </div>
          <div key={id} className="menu-img">
            <img
              className="cover-image"
              src={menuData[id - 1].coverimage}
              alt=""
            />
          </div>
          {showImage && (
            <MenuDetails showImage={showImage} menuImage={menuImage} setShowImage={setShowImage} />
          )}
          <div className="menu-heading-details">
            <div className="menu-heading-name">
              <div className="name-heading">
                <h1>{menuName}</h1>
                <p>{menuData[id - 1].areaName}</p>
                <p>{menuData[id - 1].timeToDeliver}</p>
              </div>
              <div className="star-rating">
                <span className="rating-star">☆{menuData[id - 1].rating}</span>

                <span>10K + Rating</span>
              </div>
            </div>
            <div className="menu-details">
              {selectRestraunt.menu
                .filter((items) =>
                  items.item_name.toLowerCase().includes(searchMenu)
                )
                .map((myMenu) => {
                  return (
                    <>
                      <div className="food-details">
                        <div className="food-menu-name">
                          <div className="bestseller">
                            <p>
                              {Math.floor(myMenu.price * 50) > 200 ? (
                                <p className="bestseller-1">☆ Best Seller</p>
                              ) : null}{" "}
                            </p>
                          </div>
                          <p>{myMenu.item_name}</p>

                          <p> ₹{Math.floor(myMenu.price * 50)}: For Two</p>
                        </div>
                        <div className="menu-image"
                          >
                          <img
                          onClick={() => menuDetails(myMenu.image)}  
                            src={myMenu.image}
                            alt=""
                            width={118}
                            height={100}
                            
                          />
                          {/* <MenuDetails/> */}
                          <button className="add-menu">Add</button>
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
