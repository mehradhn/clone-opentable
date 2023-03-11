import React from "react";

function Images() {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
          5 photos
        </h1>
        <div className="flex flex-wrap">
          <img
            className="w-56 h-44 mr-1 mb-1"
            src="/images/food1.jpg"
            alt="food"
          />
          <img
            className="w-56 h-44 mr-1 mb-1"
            src="/images/food2.jpg"
            alt="food"
          />
          <img
            className="w-56 h-44 mr-1 mb-1"
            src="/images/food3.jpg"
            alt="food"
          />
          <img
            className="w-56 h-44 mr-1 mb-1"
            src="/images/food4.jpg"
            alt="food"
          />
          <img
            className="w-56 h-44 mr-1 mb-1"
            src="/images/food5.jpg"
            alt="food"
          />
        </div>
      </div>
    </>
  );
}

export default Images;
