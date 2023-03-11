import React from "react";
import Link from "next/link";
function RestaurantNavBar() {
  return (
    <>
      <nav className="flex text-reg border-b pb-2">
        <Link href="/restaurant/mile" className="mr-7">
          Overview
        </Link>
        <Link href="/restaurant/mile/menu" className="mr-7">
          Menu
        </Link>
      </nav>
    </>
  );
}

export default RestaurantNavBar;
