import React from "react";

function ProductList({ products, currentPage, productsPerPage }) {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="product-list">
      {currentProducts.map((product) => (
        <div key={product.id} className="product">
          <img
            className="image-size"
            src={product.imageUrl}
            alt={product.title}
          />

          <div className="inner-div">
            <h3>{product.title}</h3>
            <p>
              <span>Price:</span> {product.price}
            </p>

            <p>
              <span>Description:-</span> {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
