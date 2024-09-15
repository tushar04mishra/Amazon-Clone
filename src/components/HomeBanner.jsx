import React from "react";
import homeBannerItemProduct from "../homeProduct.json";
const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerImg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg"
      />
      <div className="grayBackgroundHomeBanner"></div>
      <div className="homeBannerItemDiv">
        {homeBannerItemProduct.product.map((item, ind) => {
          return (
            <div className="homeBannerItemDivCard">
              <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
              <div className="imgHomeBannerItemDivCard">
                {item.imgs.map((it, ind) => {
                  return (
                    <div className="imgBannerHomeDiv">
                      <img className="imgBannerHomeDivImg " src={it} />
                      <div className="imgBannerImgName">Air Conditioners</div>
                    </div>
                  );
                })}
              </div>

              <div className="seeMoreHomeBanner">See More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeBanner;
