import React from "react";
import Link from "next/link";
function RestaurantCard() {
  return (
    <>
      {/* CARD */}
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer bg-yellow-50">
        <Link href="/restaurant/grill">
          <img src="/images/sample1.jpg" alt="food" className="w-full h-36" />
          <div className="p-1">
            <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2">77 reviews</p>
            </div>
            <div className="flex text-reg font-light capitalize">
              <p className=" mr-3">Mexican</p>
              <p className="mr-3">$$$$</p>
              <p>Toronto</p>
            </div>
            <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
          </div>
        </Link>
      </div>
      {/* CARD */}
    </>
  );
}

export default RestaurantCard;
