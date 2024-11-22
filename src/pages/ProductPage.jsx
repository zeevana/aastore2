import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();

  const handleSelectPrice = (priceItem) => {
    navigate("/payment", {
      state: {
        amount: parseInt(priceItem.price.replace(/[^0-9]/g, "")), // Hapus format Rp dan koma
        type: priceItem.type,
      },
    });
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <h3>Harga:</h3>
        {product.price.map((priceItem, index) => (
          <div key={index}>
            <p>{priceItem.type}</p>
            <p>{priceItem.price}</p>
            <button onClick={() => handleSelectPrice(priceItem)}>Pilih</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
