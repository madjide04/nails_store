import React from "react";
import "./mostordered.css";

const MostOrdered = () => {
  return (
    <div className="most-ordered">
      <h1>Most Ordered</h1>
      <a href="">View All</a>
      <div className="samples">
        <div className="first">
          <div className="img">
            <img src="../../public/img/nail3.png" alt="" />
          </div>
          <h5>Clean & Fresh! Oh no.</h5>
          <h4>2 200.00 DZD</h4>
        </div>
        <div className="second">
          <div className="img">
            <img src="../../public/img/nail2.png" alt="" />
          </div>
          <h5>It’s Overdosed pinky!</h5>
          <h4>2 200.00 DZD</h4>
        </div>
        <div className="thired">
          <div className="img">
            <img src="../../public/img/nail1.png" alt="" />
          </div>
          <h5>Roses sunnies day.</h5>
          <h4>2 200.00 DZD</h4>
        </div>
      </div>
    </div>
  );
};

export default MostOrdered;
