import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "Amazon miniTV" },
    { name: "Sell" },
    { name: "Best Seller" },
    { name: "Mobiles" },
    { name: "Today's Deals" },
    { name: "Customer Service" },
    { name: "Prime" },
    { name: "Electronics" },
    { name: "Fashions" },
    { name: "New Release" },
    { name: "Home & Kitchen" },
    { name: "Amazon Pay" },
    { name: "Computers" },
    { name: "Cars & Motorbikes" },
    { name: "Books" },
  ];
  return (
    <div className="navbarBanner">
      {/* <div className="navbarBannerOptionsLeft"> */}
      <div className="optionsNavbarBanner">
        <MenuOutlinedIcon sx={{ fontSize: "24px" }} />
        <div className="allOptionsNavbarBanner">All</div>
      </div>

      {options.map((item, ind) => {
        return (
          <Link to={"/products"} className="optionsNavbarBanner" key={ind}>
            <div className="allOptionsNavbarBanner">{item.name}</div>
          </Link>
        );
      })}

      {/* </div> */}
    </div>
  );
};
export default NavbarBanner;
