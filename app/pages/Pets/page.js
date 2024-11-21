"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
function PetsPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="petspage">
      <div className="petspageHeroSection">
        <div className="petspageContent">
          <h1 className="title">Our Pets</h1>
          <div className="categories">
            <div className="categoryContent">
              <div className="category">
                <img src="/image/pet-1.png" alt="" />
              </div>
              <h2 className="categoriesTitle">Dogs & Cats</h2>
            </div>
            <div className="categoryContent">
              <div className="category">
                <img src="/image/pet-2.png" alt="" />
              </div>
              <h2 className="categoriesTitle">Birds</h2>
            </div>
            <div className="categoryContent">
              <div className="category">
                <img src="/image/pet-3.png" alt="" />
              </div>
              <h2 className="categoriesTitle">Aquarium</h2>
            </div>
            <div className="categoryContent">
              <div className="category">
                <img src="/image/pet-4.png" alt="" />
              </div>
              <h2 className="categoriesTitle">Farm Animals</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="petspageContainer">
        <div className="sectionTitle">
          <h2>Dogs & Cats</h2>
          <p>Choose your perfect pet</p>
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
      </div>
    </div>
  );
}

export default PetsPage;
