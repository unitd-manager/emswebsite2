import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { useLocation,useNavigate } from "react-router-dom";
import { getUser } from "../common/user.js";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartData = location.state?.cartData || [];
  const [orderDetail, setOrderDetail] = useState({});
  const [allcountries, setallCountries] = useState();
  const getAllCountries = () => {
    api
      .get("/commonApi/getCountry")
      .then((res) => {
        setallCountries(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const handleOrderDetail = (e) => {
    setOrderDetail({ ...orderDetail, [e.target.name]: e.target.value });
  };

  const getTotalPrice = () => {
    return cartData.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const user = getUser();
  const userContactId = user.contact_id;

  console.log('user',user)
  console.log('userContactId',userContactId)

  const removeBacket = async () => {
    try {
      await api.post("/orders/deleteBasketContact", {
        contact_id: userContactId,
      });
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const placeOrder = () => {
    // Validate fields

    api
      .post("/orders/insertorders", {
        ...orderDetail,
        contact_id: userContactId,
      })
      .then((response) => {
        if (response.status === 200) {
          const orderId = response.data.data.insertId;
          Promise.all(
            cartData.map((item) => {
              console.log("orderitem", item);
              return api.post("/orders/insertOrderItem1", {
                qty: item.qty,
                unit_price: item.price,
                contact_id: userContactId,
                order_id: orderId,
                cost_price: item.qty * item.price,
                item_title: item.title,
              });
            })
          )
            .then((responses) => {
              const allInserted = responses.every(
                (response) => response.status === 200
              );
              if (allInserted) {
                SendEmail();
                removeBacket();
              } else {
                console.error("Error placing one or more order items");
              }
            })
            .catch((error) => {
              console.error("Error placing order items:", error);
            });
        } else {
          console.error("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const SendEmail = () => {
    const to = orderDetail.shipping_email;
    const subject = "Order Confirmed";
    const phone = orderDetail.shipping_phone;
    const names = orderDetail.shipping_first_name;
    const address = orderDetail.shipping_address1;
    const city = orderDetail.shipping_address_city;
    const state = orderDetail.shipping_address_state;
    const Country = orderDetail.shipping_address_country_code;
    const TotalAmount = getTotalPrice();
    const code = orderDetail.shipping_address_po_code;

    api
      .post("/commonApi/sendUseremail", {
        to,
        subject,
        phone,
        names,
        address,
        city,
        state,
        Country,
        TotalAmount,
        code,
      })
      .then((response) => {
        if (response.status === 200) {
          window.confirm("Orders Sent successfully on your mail.");
          navigate("/ShopList"); 
        } else {
          console.error("Error");
        }
      });
  };

  const handlePaymentSuccess = (data) => {
    console.log("Payment Successful:", data);
    placeOrder();

    // history('/order-success');
  };

  const handlePaymentFailure = (error) => {
    console.error("Payment Failed:", error);
    // history('/orderfail');
  };

  const onPaymentPress = () => {
    if (!orderDetail.shipping_first_name) {
      alert("Please enter your first Name.");
      return;
    }
    if (!orderDetail.shipping_email) {
      alert("Please enter your email.");
      return;
    }
    if (!orderDetail.shipping_phone) {
      alert("Please enter your phone number.");
      return;
    }
    if (!orderDetail.shipping_address1) {
      alert("Please enter your address.");
      return;
    }

    // Proceed with adding delivery address
    if (!userContactId) {
      alert("User information not found.");
      return;
    }

    const totalAmount = getTotalPrice();
    const amountInPaise = totalAmount * 100;

    const options = {
      key: "rzp_test_yE3jJN90A3ObCp", // Replace with your Razorpay test/live key
      key_secret: "tt8BnBOG7yRvYZ6TSB28RXJy",
      amount: amountInPaise,
      currency: "INR",
      name: "United",
      description: "Purchase Description",
      image: "",
      handler: handlePaymentSuccess,
      prefill: {
        name: orderDetail.shipping_first_name,
        email: orderDetail.shipping_email,
        contact: orderDetail.shipping_phone,
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#532C6D",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    rzp.on("payment.failed", handlePaymentFailure);
  };

  return (
    <>
      {/* <div className="popup-subscribe-area">
      <div className="container">
        <div className="popup-subscribe">
          <div className="box-img">
            <img src="assets/img/normal/popup_subscribe.jpg" alt="Image" />
          </div>
          <div className="box-content">
            <button className="simple-icon popupClose">
              <i className="fal fa-times" />
            </button>
            <div className="widget newsletter-widget footer-widget">
              <h3 className="widget_title">Subscribe</h3>
              <p className="footer-text">
                Sign up to get update about us. Don't be hasitate your email is
                safe.
              </p>
              <form className="newsletter-form">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Email"
                  required=""
                />
                <button type="submit" className="icon-btn">
                  <i className="fa-solid fa-paper-plane" />
                </button>
              </form>
              <div className="mt-30">
                <input type="checkbox" id="destroyPopup" />
                <label htmlFor="destroyPopup">
                  I don't want to see this popup again.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="home-newspaper.html">Home</a>
            </li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
      {/*==============================
  Checkout Arae
  ==============================*/}
      <div className="th-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
          {/* <div className="woocommerce-info">
            Returning customer?{" "}
            <a href="#" className="showlogin">
              Click here to login
            </a>
          </div> */}

          <form action="#" className="woocommerce-checkout mt-40">
            <div className="row ">
              {/* <div className="col-lg-6">
              <h2 className="h4">Billing Details</h2>
              <div className="row">
                <div className="col-12 form-group">
                  <select className="form-select">
                    <option>United Kingdom (UK)</option>
                    <option>United State (US)</option>
                    <option>Equatorial Guinea (GQ)</option>
                    <option>Australia (AU)</option>
                    <option>Germany (DE)</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={orderDetail && orderDetail.shipping_first_name}
                    onChange={handleOrderDetail}
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Company Name"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Street Address"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode / Zip"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
                <div className="col-12 form-group">
                  <input type="checkbox" id="accountNewCreate" />
                  <label htmlFor="accountNewCreate">Create An Account?</label>
                </div>
              </div>
            </div> */}
              <div className="col-lg-12">
                <h2 className="h4">Billing Details</h2>
                <div className="shipping_address">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="shipping_first_name"
                        value={orderDetail && orderDetail.shipping_first_name}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="shipping_last_name"
                        value={orderDetail && orderDetail.shipping_last_name}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Company Name"
                        name="selling_company"
                        value={orderDetail && orderDetail.selling_company}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <textarea
                        type="textarea"
                        className="form-control"
                        placeholder="Street Address"
                        name="shipping_address1"
                        value={orderDetail && orderDetail.shipping_address1}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <textarea
                        type="textarea"
                        className="form-control"
                        placeholder="Apartment, suite, unit etc. (optional)"
                        name="shipping_address2"
                        value={orderDetail && orderDetail.shipping_address2}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Town / City"
                        name="shipping_address_city"
                        value={orderDetail && orderDetail.shipping_address_city}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                        name="shipping_address_state"
                        value={
                          orderDetail && orderDetail.shipping_address_state
                        }
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <select
                        className="form-select"
                        name="shipping_address_country_code"
                        onChange={handleOrderDetail}
                        value={orderDetail?.shipping_address_country_code || ""}
                      >
                        <option value="" disabled>
                          Please Select Country
                        </option>
                        {allcountries?.map((country) => (
                          <option
                            key={country.country_code}
                            value={country.country_code}
                          >
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode / Zip"
                        name="shipping_address_po_code"
                        value={
                          orderDetail && orderDetail.shipping_address_po_code
                        }
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                        name="shipping_email"
                        value={orderDetail && orderDetail.shipping_email}
                        onChange={handleOrderDetail}
                      />
                      </div>
                      <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone number"
                        name="shipping_phone"
                        value={orderDetail && orderDetail.shipping_phone}
                        onChange={handleOrderDetail}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 form-group">
                  <textarea
                    cols={20}
                    rows={5}
                    className="form-control"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </form>
          <h4 className="mt-4 pt-lg-2">Your Order</h4>
          <form action="#" className="woocommerce-cart-form">
            <table className="cart_table mb-20">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname">Product Name</th>
                  <th className="cart-col-price">Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((product, index) => (
                  <tr className="cart_item">
                    <td data-title="Product">
                      <a className="cart-productimage" href="shop-details.html">
                        <img
                          width={91}
                          height={91}
                          src={`https://emsmedia.net/storage/uploads/${product.images}`}
                          alt="Image"
                        />
                      </a>
                    </td>
                    <td data-title="Name">
                      <a className="cart-productname" href="shop-details.html">
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
                      <strong className="product-quantity">
                        {product.qty}
                      </strong>
                    </td>
                    <td data-title="Total">
                      <span className="amount">
                        <bdi>{product.price * product.qty}</bdi>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="checkout-ordertable">
                <tr className="cart-subtotal">
                  <th>Subtotal</th>
                  <td data-title="Subtotal" colSpan={4}>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        {getTotalPrice()}
                      </bdi>
                    </span>
                  </td>
                </tr>
                <tr className="woocommerce-shipping-totals shipping">
                  <th>Shipping</th>
                  <td data-title="Shipping" colSpan={4}>
                    {" "}
                    ₹0
                  </td>
                </tr>
                <tr className="order-total">
                  <th>Total</th>
                  <td data-title="Total" colSpan={4}>
                    <strong>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          {getTotalPrice()}
                        </bdi>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>
          <div className="mt-lg-3 mb-30">
            <div className="woocommerce-checkout-payment">
              {/* <ul className="wc_payment_methods payment_methods methods">
                <li className="wc_payment_method payment_method_cod">
                  <input
                    id="payment_method_cod"
                    type="radio"
                    className="input-radio"
                    name="payment_method"
                  />
                  <label htmlFor="payment_method_cod">Cash On Delivery</label>
                  <div className="payment_box payment_method_cod">
                    <p>Pay with cash on delivery.</p>
                  </div>
                </li>
                <li className="wc_payment_method payment_method_paypal">
                  <input
                    id="payment_method_paypal"
                    type="radio"
                    className="input-radio"
                    name="payment_method"
                    defaultValue="Rayzorpay"
                  />
                  <label htmlFor="payment_method_paypal">Rayzorpay</label>
                  <div className="payment_box payment_method_paypal">
                    <p>you can pay with Rayzorpay.</p>
                  </div>
                </li>
              </ul> */}
              <div className="form-row place-order">
                <button type="submit" className="th-btn" onClick={onPaymentPress}>
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
