import React from "react";
import { useNavigate } from "react-router-dom";
import { productData } from "../data/index";

const ProductPage = () => {
  const navigate = useNavigate();

  const handleBuy = (amount, type) => {
    navigate("/payment", { state: { amount, type } });
  };

  return (
    <div className="product-container">
      {productData.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          {product.price.map((item, index) => (
            <div key={index} className="price-item">
              <p>{item.type}</p>
              <p>Rp {item.price.toLocaleString("id-ID")}</p>
              <button onClick={() => handleBuy(item.price, item.type)}>Beli</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
