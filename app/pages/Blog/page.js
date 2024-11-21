import React from "react";
import Link from "next/link";

const Blogpage = () => {
  return (
    <div className="blogpage">
      <div className="blogpageHero">
        <h2>Blog</h2>
      </div>
      <div className="blogpageContainer">
        <div className="blogpageHead">
          <h2>Our Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="blogpageContainerContent">
          <div className="BlogContentCard">
            <img src="/image/home-71.png" alt="" />
            <h2>Understanding Your Pet’s Body Language</h2>
            <span>Nov 05, 2024</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.
            </p>
            <Link href="/">Read More</Link>
          </div>
          <div className="BlogContentCard">
            <img src="/image/home-72.png" alt="" />
            <h2>Understanding Your Pet’s Body Language</h2>
            <span>Nov 05, 2024</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.
            </p>
            <Link href="/">Read More</Link>
          </div>
          <div className="BlogContentCard">
            <img src="/image/home-73.png" alt="" />
            <h2>Understanding Your Pet’s Body Language</h2>
            <span>Nov 05, 2024</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.
            </p>
            <Link href="/">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
