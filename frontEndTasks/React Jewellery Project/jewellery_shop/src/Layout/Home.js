import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="homemain">
        <h1>Welcome to Nithish Jewellers</h1>
        <p>Crafting Timeless Elegance Since 2003</p>
        <Link to="/Products" className="cta-button">Explore Our Products</Link>
      </section>
      <section className="Aboutshop">
        <h2 className="Aboutshoptitle">About Our Shop</h2>
        <p className="Aboutshopcont">
          At Nithish Jewellers, we pride ourselves on offering exquisite gold,  
          diamond, and platinum jewellery crafted to perfection. With over three  
          decades of experience, our commitment to quality and customer  
          satisfaction remains unmatched. We source the finest materials to create  
          designs that blend tradition with modern elegance. Discover jewellery that  
          celebrates life's most cherished moments with unparalleled craftsmanship.
        </p>
        <Link to="/About" className="cta-button">Know more</Link>
      </section>

      <section className="collections">
        <h2 className="Aboutshoptitle">Our Collections Include</h2>
        <div className="collection-cards">
          <div className="card">Gold Jewellery</div>
          <div className="card">Diamond Jewellery</div>
          <div className="card">Wedding Collections</div>
          <div className="card">Platinum Jewellery</div>
          <div className="card">Custom Designs</div>
        </div>
      </section>

      <section className="visit-us">
        <h2 className="Aboutshoptitle">Visit Our Store</h2>
        <p className="addresscont">Nithish Jewellery, Coats Road, North, N Usman Rd,<br></br> near Pantaloons, T. Nagar, Chennai, Tamil Nadu 600017</p>
      </section>
    </div>
  );
};

export default Home;
