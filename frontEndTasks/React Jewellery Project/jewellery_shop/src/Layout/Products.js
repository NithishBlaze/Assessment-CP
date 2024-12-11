import React from 'react';
import './style.css';
import Gold from '../Assests/gold bangle.jpg';
import Diamond from '../Assests/diamond ring.png';
import Wedding from '../Assests/wedding collection.jpg';
import Platinum from '../Assests/platinum jewel.jpg';
import Custom from '../Assests/custom design.jpg';

const Product = () => {
  return (
    <div className="product-page">
      <h1 className='product-pagetitle'>Explore Our Products</h1>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Gold}
            alt="Gold Necklace"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td className='prodtitle'>Product Name</td>
                <td className='prodvalue'>Gold Necklace</td>
              </tr>
              <tr>
                <td className='prodtitle'>Price</td>
                <td className='prodvalue'>₹ 75,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Diamond}
            alt="Diamond Ring"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td className='prodtitle'>Product Name</td>
                <td className='prodvalue'>Diamond Ring</td>
              </tr>
              <tr>
                <td className='prodtitle'>Price</td>
                <td className='prodvalue'>₹ 1,25,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Wedding}
            alt="Wedding Collection"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td className='prodtitle'>Product Name</td>
                <td className='prodvalue'>Wedding Collection</td>
              </tr>
              <tr>
                <td className='prodtitle'>Price</td>
                <td className='prodvalue'>₹ 5,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Platinum}
            alt="Platinum Ring"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td className='prodtitle'>Product Name</td>
                <td className='prodvalue'>Platinum Ring</td>
              </tr>
              <tr>
                <td className='prodtitle'>Price</td>
                <td className='prodvalue'>₹ 1,50,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr className='differentiateline'></hr>

      <div className="product-container">
        <div className="product-image">
          <img
            src={Custom}
            alt="Custom Design"
            className="product-img"
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">Product Details</h2>
          <table className="product-table">
            <tbody>
              <tr>
                <td className='prodtitle'>Product Name</td>
                <td className='prodvalue'>Custom Design</td>
              </tr>
              <tr>
                <td className='prodtitle'>Price</td>
                <td className='prodvalue'>₹ 2,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
