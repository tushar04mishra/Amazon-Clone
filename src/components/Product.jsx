import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import productsDetail from "../products.json";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (item) => {
    toast.success("Added to Cart", {
      position: "bottom-right",
    });
    dispatch(addToCart(item));
  };
  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        <div className="productTopBannerItemsSubmenu">
          Mobiles & Accessories
        </div>

        <div className="productTopBannerItemsSubmenu">
          Laptops & Accessories
        </div>

        <div className="productTopBannerItemsSubmenu">
          TV & Home Entertainment
        </div>

        <div className="productTopBannerItemsSubmenu">Cameras</div>

        <div className="productTopBannerItemsSubmenu">Computer Peripherals</div>

        <div className="productTopBannerItemsSubmenu">Smart Technology</div>

        <div className="productTopBannerItemsSubmenu">Musical Instrument</div>

        <div className="productTopBannerItemsSubmenu">Office & Stationary</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Computers & Accessories
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Macbooks
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>
            <div className="ratingLeftBox">
              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>
              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>
              <div className="andUp"> & Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>
              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>

              <div className="andUp"> & Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>
              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>
              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>

              <div className="andUp"> & Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateIcon>

              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>
              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>
              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>
              <StarRateOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              ></StarRateOutlinedIcon>

              <div className="andUp"> & Up</div>
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>
          </div>
        </div>

        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-5 of 5 results for{" "}
            <span className="productsPagrMainRightTopBannerSpan">Macbooks</span>
          </div>
          <div className="itemsImageProductPage">
            {productsDetail.product.map((item, index) => {
              return (
                <div className="itemsImageProductPageOne" key={item.id}>
                  <div className="imageBlockItemsImageProductPageOne">
                    <img src={item.imageUrl} className="productImageProduct" />
                  </div>
                  <div className="productNameProduct">
                    <div> {item.name}</div>
                    <div className="productNameProductRating">
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      ></StarRateIcon>
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      ></StarRateIcon>
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      ></StarRateIcon>
                      <StarRateIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      ></StarRateIcon>
                      <StarRateOutlinedIcon
                        sx={{ fontSize: "16px", color: "#febd69" }}
                      ></StarRateOutlinedIcon>
                    </div>

                    <div className="priceProductDetailPage">
                      <div className="currencyText">₹</div>
                      <div className="rateHomeDetail">
                        <div className="rateHomeDetailsPrice">{item.price}</div>
                        <div
                          className="addToBasketBtn"
                          onClick={() => {
                            handleAddToCart(item);
                          }}
                        >
                          Add To Cart
                        </div>
                      </div>
                    </div>
                    <div className="offProductPage">
                      Upto 10% Off on delect cards
                    </div>
                    <div className="freeDeliveryHomePage">
                      Free Delivery By Amazon
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Product;
