"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const Products = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="productpage">
      <div className="productpageHero">
        <h2>Products</h2>
      </div>
      <div className="productpage-section">
        <div className="homepage-card1">
          <div className="homepage-card-text d-flex">
            <p>New Product</p>
            <h2>Food For Pets</h2>
          </div>
          <img src="/image/home-21.png" alt="" className="w-50" />
        </div>
        <div className="homepage-card1 bg-green">
          <div className="homepage-card-text d-flex ">
            <p>New Product</p>
            <h2>Food For Pets</h2>
          </div>
          <img src="/image/product-11.png" alt=""/>
        </div>
      </div>
      <div className="productpage-section2">
        <div className="heroTabsContainer">
          <div className="heroTabs">
            {["Latest Product", "Top Rating", "Best Selling"].map(
              (section, index) => (
                <div
                  key={index}
                  className={`tab ${activeTab === index + 1 ? "active" : ""}`}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {section}
                </div>
              )
            )}
          </div>
          <div className="searchInput">
            <div className="searchBox">
              <FiSearch size={20} />

              <input type="text" placeholder="Search here..." />
            </div>
          </div>
        </div>
        <div className="heroPageContent">
          {activeTab === 1 && (
            <div className="heroTabsCard">
              <div className="tabCards">
                <div className="tabCard">
                  <img src="/image/tap-1.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-2.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-3.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-4.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-1.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-2.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-3.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-4.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="heroTabsCard">
              <div className="tabCards">
                <div className="tabCard">
                  <img src="/image/tap-4.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-1.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>

                <div className="tabCard">
                  <img src="/image/tap-3.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-2.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="heroTabsCard">
              <div className="tabCards">
                <div className="tabCard">
                  <img src="/image/tap-2.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-1.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>

                <div className="tabCard">
                  <img src="/image/tap-4.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
                <div className="tabCard">
                  <img src="/image/tap-3.png" alt="" />
                  <p>Simply Cat</p>
                  <div className="tabPrice">
                    <p>$60.00 USD</p>
                    <p>$60.00 USD</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="productpage-section-3">
      
        <div className="petFoodImg">
          <img src="/image/home-41.jpg" alt="" />
          <div className="footContent">
            <p>30% off All Items</p>
            <h2>Accessory</h2>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="petFoodImg">
          <img src="/image/home-42.png" alt="" />
          <div className="footContent">
            <p>30% off All Items</p>
            <h2>Accessory</h2>
            <button>SHOP NOW</button>
          </div>
        </div>

        <div className="petFoodImg">
          <img src="/image/home-43.png" alt="" />
          <div className="footContent">
            <p>30% off All Items</p>
            <h2>Accessory</h2>
            <button>SHOP NOW</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Products;
