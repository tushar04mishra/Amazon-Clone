import React from "react";
import HomeBanner from "./HomeBanner";
import HomeDetails from "./HomeDetails";
import Footer from "./Footer";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <HomeBanner></HomeBanner>
      <HomeDetails></HomeDetails>
    </div>
  );
};
export default HomeScreen;
