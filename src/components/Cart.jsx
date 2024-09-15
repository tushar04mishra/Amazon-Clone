import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeFromCart } from "../redux/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItem, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a = 0;
  let cost = cartItems.map((item) => {
    // Remove commas and convert the string to a float
    let price = parseFloat(item.price.replace(/,/g, ""));
    return (a += price);
  });

  useEffect(() => {
    setCartItems(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    toast.error("Item Removed from Cart", {
      position: "bottom-right",
    });
    dispatch(removeFromCart(id));
  };
  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="deselectAllCart">Deselect all items</div>
        <div className="cartPriceTextDivider">Price</div>
        <div className="cartItemsDiv">
          {cartItems.map((item, ind) => {
            return (
              <div className="cartItemBlock">
                <div className="cartItemLeftBlock">
                  <div className="cartItemLeftBlockImage">
                    <img className="cartItemLeftBlockImg" src={item.imageUrl} />
                  </div>
                  <div className="cartItemLeftBlockDetails">
                    <div className="cartItemProductName">{item.name}</div>
                    <div className="inStockCart">In Stock</div>
                    <div className="elgFreeShip">
                      Elligible for FREE Shipping
                    </div>
                    <div className="amazonFullfilledImage">
                      <img
                        className="fullfillImg"
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                      />
                    </div>
                    <div
                      className="removeFromCart"
                      onClick={() => {
                        handleRemoveFromCart(item.id);
                      }}
                    >
                      Remove From Basket
                    </div>
                  </div>
                </div>

                <div className="cartItemRightBlock">Rs {item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({cartItem.length} items) :{" "}
          <span className="subTotalTitleSpan">Rs {a}</span>
        </div>
        <div className="giftAddTo">
          <div className="check">
            <input type="checkbox" />
          </div>

          <div>This Order Contains a gift</div>
        </div>
        <div className="proceedToBuy">Proceed To Buy</div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};
export default Cart;
