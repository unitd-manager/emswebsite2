import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { getUser } from "../common/user";
import { getCart } from "../common/headerCartApi";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Shop = () => {
  const navigate = useNavigate();
  const [CartItem, setCartItems] = useState([]); // Assuming you have products data
  const user = getUser();

  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  // const userContactId = user.contact_id

  if (!user || !user.contact_id) {
    const userConfirmed = window.confirm(
      "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
    );
    if (userConfirmed) {
      navigate("/Login"); // Navigate to the login page
    }
  }

  const loadCart = async () => {
    const cart = await getCart(); // Wait for the cart data to load
    setCartItems(cart);
  };

  useEffect(() => {
    loadCart();
  }, []);

  // const getTotalPrice = () => {
  //   return CartItem.reduce((total, item) => total + item.price * item.qty, 0);
  // };

  const getTotalPrice = () => {
    const total = CartItem.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    return Math.max(total - couponDiscount, 0); // avoid negative total
  };

  const handleRemoveItem = (item) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (userConfirmed) {
      api
        .post("/contact/deleteCartItem", { basket_id: item })
        .then(() => {
          window.confirm("Selected item is deleted");
          window.location.reload();
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  const handleQtyChange = (index, newQuantity) => {
    const newCart = [...CartItem];
    newCart[index].qty = newQuantity;
    setCartItems(newCart);
  };

  const decrementQuantity = (index) => {
    const newQuantity = Math.max(0, CartItem[index].qty - 1);
    handleQtyChange(index, newQuantity);
  };

  const incrementQuantity = (index) => {
    const newQuantity = CartItem[index].qty + 1;
    handleQtyChange(index, newQuantity);
  };

  const applyCoupon = async () => {
    try {
      const res = await api.post("/product/getCouponCode", {
        code: couponCode,
      });

      // if (res.data && res.data.status === 200) {
        setCouponDiscount(10); // e.g., ₹100 off
        setCouponMessage("Coupon applied successfully!");
      // } else {
      //   setCouponDiscount(0);
      //   setCouponMessage("Invalid or expired coupon.");
      // }
    } catch (err) {
      setCouponMessage("Error applying coupon. Try again.");
    }
  };

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Cart Page</li>
          </ul>
        </div>
      </div>
      {/*==============================
Cart Area
==============================*/}
      <div className="th-cart-wrapper  space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-notices-wrapper">
            <div className="woocommerce-message">Shipping costs updated.</div>
          </div>
          <form action="#" className="woocommerce-cart-form">
            <table className="cart_table">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname">Product Name</th>
                  <th className="cart-col-price">Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                  <th className="cart-col-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {CartItem.map((product, index) => (
                  <tr className="cart_item">
                    <td data-title="Product">
                      <a
                        className="cart-productimage"
                        href="shop-detailis.html"
                      >
                        <img
                          width={91}
                          height={91}
                          src={`https://ems.unitdtechnologies.com/storage/${product.images}`}
                          alt="Image"
                        />
                      </a>
                    </td>
                    <td data-title="Name">
                      <a className="cart-productname" href="shop-detailis.html">
                        {product.title}
                      </a>
                    </td>
                    <td data-title="Price">
                      <span className="amount">
                        <bdi>
                          <span>₹</span>
                          {product.price}
                        </bdi>
                      </span>
                    </td>
                    <td data-title="Quantity">
                      <div className="quantity">
                        <button
                          type="button" // Prevent default form submission
                          className="quantity-minus qty-btn"
                          onClick={() => decrementQuantity(index)} // Decrement quantity
                        >
                          <i className="far fa-minus" />
                        </button>
                        <input
                          type="number"
                          className="qty-input"
                          value={CartItem[index].qty} // Bind value to state
                          min={1}
                          max={99}
                          onChange={(e) =>
                            handleQtyChange(
                              index,
                              parseInt(e.target.value) || 1
                            )
                          } // Update directly
                        />
                        <button
                          type="button" // Prevent default form submission
                          className="quantity-plus qty-btn"
                          onClick={() => incrementQuantity(index)} // Increment quantity
                        >
                          <i className="far fa-plus" />
                        </button>
                      </div>
                    </td>

                    <td data-title="Total">
                      <span className="amount">
                        <bdi>
                          <span>₹</span>
                          {product.price * product.qty}
                        </bdi>
                      </span>
                    </td>
                    <td data-title="Remove">
                      <a
                        className="remove"
                        onClick={() => handleRemoveItem(product.basket_id)}
                      >
                        <i className="fal fa-trash-alt" />
                      </a>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={6} className="actions">
                    {/* <div className="th-cart-coupon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon Code..."
                      />
                      <button type="submit" className="th-btn">
                        Apply Coupon
                      </button>
                    </div> */}
                    <div className="th-cart-coupon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon Code..."
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <button
                        type="button"
                        className="th-btn"
                        onClick={applyCoupon}
                      >
                        Apply Coupon
                      </button>
                      {couponMessage && (
                        <p
                          style={{
                            color: couponDiscount > 0 ? "green" : "red",
                            marginTop: "10px",
                          }}
                        >
                          {couponMessage}
                        </p>
                      )}
                    </div>

                    {/* <button type="submit" className="th-btn">
                      Update cart
                    </button> */}
                    <Link to="/ShopList/ShopList" className="th-btn">
                      Continue Shopping
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="row justify-content-end">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <h2 className="h4 summary-title">Cart Totals</h2>
              <table className="cart_totals">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td data-title="Cart Subtotal">
                      <span className="amount">
                        <bdi>
                          <span>₹</span>
                          {getTotalPrice()}
                        </bdi>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>
                      <span className="amount">
                        <bdi>
                          ₹
                          {CartItem.reduce(
                            (sum, item) => sum + item.price * item.qty,
                            0
                          )}
                        </bdi>
                      </span>
                    </td>
                  </tr>
                  {couponDiscount > 0 && (
                    <tr>
                      <td>Coupon Discount</td>
                      <td>
                        <span className="amount" style={{ color: "green" }}>
                          - ₹{couponDiscount}
                        </span>
                      </td>
                    </tr>
                  )}

                  <tr className="shipping">
                    <th>Shipping and Handling</th>
                    <td data-title="Shipping and Handling">
                      <ul className="woocommerce-shipping-methods list-unstyled">
                        <li>
                          <input
                            type="radio"
                            id="free_shipping"
                            name="shipping_method"
                            className="shipping_method"
                          />
                          <label htmlFor="free_shipping">Free shipping</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="flat_rate"
                            name="shipping_method"
                            className="shipping_method"
                            defaultChecked="checked"
                          />
                          <label htmlFor="flat_rate">Flat rate</label>
                        </li>
                      </ul>
                      <p className="woocommerce-shipping-destination">
                        Shipping options will be updated during checkout.
                      </p>
                      {/* <form action="#" method="post">
                        <a href="#" className="shipping-calculator-button">
                          Change address
                        </a>
                        <div className="shipping-calculator-form">
                          <p className="form-row">
                            <select className="form-select">
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="BD" selected="selected">
                                Bangladesh
                              </option>
                            </select>
                          </p>
                          <p>
                            <select className="form-select">
                              <option value="">Select an option…</option>
                              <option value="BD-05">Bagerhat</option>
                              <option value="BD-01">Bandarban</option>
                              <option value="BD-02">Barguna</option>
                              <option value="BD-06">Barishal</option>
                            </select>
                          </p>
                          <p className="form-row">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Town / City"
                            />
                          </p>
                          <p className="form-row">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Postcode / ZIP"
                            />
                          </p>
                          <p>
                            <button className="th-btn">Update</button>
                          </p>
                        </div>
                      </form> */}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="order-total">
                    <td>Order Total</td>
                    <td data-title="Total">
                      <strong>
                        <span className="amount">
                          <bdi>
                            <span>₹</span>
                            {getTotalPrice()}
                          </bdi>
                        </span>
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="wc-proceed-to-checkout mb-30">
                <Link
                  to="/CheckOut"
                  className="th-btn"
                  state={{ cartData: CartItem, getTotalPrice: getTotalPrice() }}
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
