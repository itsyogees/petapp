import React from "react";
import { CiShare2 } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";

const PetDetails = () => {
  return (
    <div className="petDetails">
      <div className="petDetailsContainer">
        <div className="petDetailsContent">
          <div className="detailsSection">
            <div className="detailsImgSection">
              <img src="/image/details-1.png" alt="" />
              <img src="/image/details-2.png" alt="" />
              <img src="/image/details-3.png" alt="" />
              <img src="/image/details-5.png" alt="" />
            </div>
            <div className="detailsImgSection2">
              <img src="/image/home-1.png" alt="" />
            </div>
          </div>
          <div className="detailsSection1">
            <div className="detailsSectionHead">
              <div className="detailsHead">
                <h2>Dog Baby</h2>
                <div className="rating">
                  <span>4.0</span>{" "}
                  {[...Array(4)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}{" "}
                  <span>20 Reviews</span>
                </div>
              </div>
              <div className="detailsHead2">
                <CiShare2 />
              </div>
            </div>

            <div className="detailsSectionContent">
              <h2>$60.00 USD</h2>
              <p>$80.00 USD</p>
            </div>

            <hr />
            <div className="petContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.{" "}
              </p>
            </div>
            <div className="petContent">
              <h2>Age: 2 Month</h2> <h2>Color: Cream</h2>
            </div>

            <div className="petFeature">
              <div className="petFeatureHead">
                <h2>Outstanding Features</h2>
              </div>
              <div className="petFeatureContent">
                <p>Blanditiis dolorem voluptatem consequuntur explicabo accusamus fugiat maxime. Eum vel fugit voluptatibus ex dolorum dolorem cupiditate. Et sed minus repudiandae. Cum aliquid aut voluptatem possimus ipsa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
