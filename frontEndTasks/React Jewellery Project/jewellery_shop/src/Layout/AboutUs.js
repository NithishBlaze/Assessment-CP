import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="shop-history">
        <h2 className="section-title">Our Legacy</h2>
        <p>
          Nithish Jewellers was founded in 2003 with the vision of providing exquisite 
          jewellery that blends timeless tradition with modern elegance. Over the years, 
          we have established ourselves as a trusted name in Chennai, known for our commitment 
          to quality craftsmanship and customer satisfaction. Our journey has been one of growth 
          and innovation, always staying true to our roots while embracing new trends.
        </p>
        <p>
          With over two decades of experience, we continue to bring joy to our customers 
          by creating jewellery that celebrates the most cherished moments of life.
        </p>
      </section>

      <section className="owner-info">
        <h2 className="section-title">Meet the Founder</h2>
        <p>
          Nithish Jewellers was founded by Mr. Nithish Kumar, a visionary who has dedicated his life 
          to the art of jewellery making. With over 21 years of experience in the industry, Mr. Nithish Kumar 
          has built a reputation for offering high-quality jewellery that reflects both tradition and luxury. 
          His passion for design and attention to detail has shaped Nithish Jewellers into one of the leading 
          jewellery stores in Chennai.
        </p>
        <p>
          Mr. Nithish Kumar's goal is to provide his customers with not just jewellery, but memories that will last 
          a lifetime. Under his leadership, the brand has expanded its collections while maintaining a commitment 
          to excellence.
        </p>
      </section>

      <section className="our-partners">
        <h2 className="section-title">Our Trusted Partners</h2>
        <p>
          At Nithish Jewellers, we believe in the power of collaboration. Over the years, we have formed 
          strong partnerships with renowned suppliers, designers, and craftsmen to bring you the finest jewellery 
          pieces. Our partners share our commitment to quality, ensuring that every piece we offer meets the highest standards.
        </p>
        <p>
          We are proud to work with some of the leading names in the jewellery industry, allowing us to offer a wide 
          range of designs, from traditional to contemporary, all crafted to perfection.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
