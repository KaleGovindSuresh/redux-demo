import React from "react";

const Home = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Home Component</h2>
        <img
          style={{ width: "60px" }}
          src="https://img.freepik.com/premium-vector/logo-grocery-store-called-plus_816425-1335.jpg?w=2000"
        />
      </div>
      <div
        style={{ textAlign: "center", border: "1px solid #000", width: "25%" }}
      >
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://w7.pngwing.com/pngs/277/953/png-transparent-cellphone-smartphone-mobile-phone-mockup-thumbnail.png"
            />
          </div>
          <div className="text-wrapper item">
            <span>I-phone</span>
            <span>Price:$1000.00</span>
          </div>
          <div className="btn-wrapper item" style={{ margin: "10px" }}>
            <button style={{ color: "blue" }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
