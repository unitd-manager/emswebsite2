import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const [shippingCost, setShippingCost] = useState(50);
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponDiscountPer, setCouponDiscountPer] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const applyCoupon = async () => {
    try {
      const res = await api.post("/product/getCouponCode", {
        coupon_code: couponCode,
      });

      if (
        res.status === 200 &&
        res.data &&
        Array.isArray(res.data.data) &&
        res.data.data.length > 0
      ) {
        const coupon = res.data.data[0];


        const today = new Date();

        const validFrom = coupon.valid_from ? new Date(coupon.valid_from) : null;
        const validTo = coupon.valid_to ? new Date(coupon.valid_to) : null;
  
        // Check date validity
        if (
          (validFrom && today < validFrom) ||
          (validTo && today > validTo)
        ) {
          setCouponDiscount(0);
          setCouponMessage("This coupon is not valid for today's date.");
          return;
        }

        // Check if coupon has reached its max uses
        if (coupon.times_used >= coupon.max_uses) {
          // Mark coupon as inactive
          await api.post("/product/edit-Coupon-is-active", {
            is_active: 0,
            coupon_id: coupon.coupon_id,
          });
          setCouponDiscount(0);
          setCouponMessage("Expired coupon!");
          return;
        }
        let discount = 0;
        const total = cartData.reduce(
          (sum, item) => sum + item.price * item.qty,
          0
        );

        // Determine if it's percentage or fixed
        if (coupon.discount_type === "percentage") {
          discount = (total * parseFloat(coupon.discount_value || 0)) / 100;
          setCouponDiscountPer(`${coupon.discount_value}%`);
        } else {
          discount = parseFloat(coupon.discount_value || 0); // fixed amount
        }
        setCouponDiscount(discount);
        setCouponMessage("Coupon applied successfully!");
      } else {
        setCouponDiscount(0);
        setCouponMessage("Invalid or expired coupon.");
      }
    } catch (err) {
      console.error(err);
      setCouponDiscount(0);
      setCouponMessage("Error applying coupon. Try again.");
    }
  };

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

  // const getTotalPrice = () => {
  //   return cartData.reduce((total, item) => total + item.price * item.qty, 0);
  // };

  const getTotalPrice = () => {
    const total = cartData.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    return Math.max(total + shippingCost, 0); // avoid negative
  };

  // Calculate shipping cost based on total
  const calculateShipping = () => {
    const subtotal = getTotalPrice();
    if (subtotal >= 500) {
      setShippingCost(0);
    } else {
      setShippingCost(50);
    }
  };

  // Run calculation when cart or coupon changes
  useEffect(() => {
    calculateShipping();
  }, [cartData, couponDiscount]);

  // Grand total = subtotal + shipping
  const getGrandTotal = () => {
    const totalWithShipping = getTotalPrice();
    return Math.max(totalWithShipping - (couponDiscount || 0), 0);
  };

  const user = getUser();
  const userContactId = user?.contact_id;
  const userfirstname = user?.first_name;
  const userlastname = user?.last_name;
  const useremail = user?.email;
  const useraddress1 = user?.address1;
  const useraddress2 = user?.address2;
  const userCity = user?.address_city;
  const userState = user?.address_state;
  const userCountry = user?.address_country_code;
  const userPoCode = user?.address_po_code;
  const userPhone = user?.mobile;

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
    const createOrder = () => {
      api
        .post("/orders/insertorders", {
          ...orderDetail,
          contact_id: userContactId,
          amount: getGrandTotal(),
          discount: couponDiscount,
          payment_method: "online",
          cust_first_name: userfirstname,
          cust_last_name: userlastname,
          cust_email: useremail,
          cust_address1: useraddress1,
          cust_address2: useraddress2,
          cust_address_city: userCity,
          cust_address_state: userState,
          cust_address_country: userCountry,
          cust_address_po_code: userPoCode,
          cust_phone: userPhone,
        })
        .then((response) => {
          if (response.status === 200) {
            const orderId = response.data.data.insertId;
            Promise.all(
              cartData.map((item) =>
                api.post("/orders/insertOrderItem1", {
                  qty: item.qty,
                  unit_price: item.price,
                  contact_id: userContactId,
                  order_id: orderId,
                  cost_price: item.qty * item.price,
                  item_title: item.title,
                  product_id: item.product_id,
                })
              )
            )
              .then((responses) => {
                if (responses.every((res) => res.status === 200)) {
                  SendEmail();
                  removeBacket();
                } else {
                  console.error("Error placing one or more order items");
                }
              })
              .catch((err) => console.error("Error placing order items:", err));
          } else {
            console.error("Error creating order");
          }
        })
        .catch((err) => console.error("Error:", err));
    };

    if (couponCode) {
      api
        .post("/product/getCouponCode", { coupon_code: couponCode })
        .then((res) => {
          if (
            res.data &&
            Array.isArray(res.data.data) &&
            res.data.data.length > 0
          ) {
            const coupon = res.data.data[0];
            const timeUsed = (coupon.times_used || 0) + 1;
            api
              .post("/product/edit-Coupon-times-used", {
                times_used: timeUsed,
                coupon_id: coupon.coupon_id,
              })
              .then(() => {
                createOrder(); // ✅ only create order after coupon usage updated
              })
              .catch((err) => {
                console.error("Error updating coupon usage:", err);
                createOrder(); // still place order even if coupon update fails
              });
          } else {
            console.warn("Coupon not valid, placing order without discount");
            createOrder();
          }
        })
        .catch((err) => {
          console.error("Error fetching coupon:", err);
          createOrder();
        });
    } else {
      createOrder(); // No coupon, directly place order
    }
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
    const TotalAmount = getGrandTotal();
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
          navigate("/ShopList/ShopList");
        } else {
          console.error("Error");
        }
      });
  };
  const clearCoupon = () => {
    setCouponCode("");
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

    const totalAmount = getGrandTotal();
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
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="/">Home</a>
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
          <form action="#" className="woocommerce-checkout mt-40">
            <div className="row ">
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
                      <a className="cart-productimage">
                        <img
                          width={91}
                          height={91}
                          src={`https://ems.unitdtechnologies.com/storage/${product.images}`}
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
                {couponDiscount > 0 && (
                  <tr>
                    <th>Coupon Discount</th>
                    <td colSpan={4} data-title="Coupon Discount">
                      <bdi>
                        <span className="amount" style={{ color: "red" }}>
                          {couponDiscountPer}
                        </span>{" "}
                        <span className="amount" style={{ color: "green" }}>
                          ₹{couponDiscount}
                        </span>
                      </bdi>
                    </td>
                  </tr>
                )}
                <tr className="woocommerce-shipping-totals shipping">
                  <th>Shipping</th>
                  <td data-title="Shipping" colSpan={4}>
                    {" "}
                    {shippingCost}
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
                          {getGrandTotal()}
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
              {/* Flex container to align coupon + button + place order in one line */}
              <div className="d-flex flex-wrap align-items-center gap-2">
                {/* Coupon input */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code..."
                  style={{ maxWidth: "200px", flex: "1" }}
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />

                {/* Apply button */}
                <button type="button" className="th-btn" onClick={applyCoupon}>
                  Apply Coupon
                </button>

                {/* Place Order button */}
                <button
                  type="submit"
                  className="th-btn"
                  style={{ backgroundColor: "green" }}
                  onClick={onPaymentPress}
                >
                  Place Order
                </button>
              </div>

              {/* Optional: coupon success or error message */}
              {couponMessage && (
                <>
                  <p
                    style={{
                      color: couponDiscount > 0 ? "green" : "red",
                      marginTop: "10px",
                    }}
                  >
                    {couponMessage}{" "}
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault(); // prevent page reload
                        clearCoupon();
                        setCouponDiscount(0);
                        setCouponMessage("");
                      }}
                    >
                      <u>Clear Coupon</u>
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
