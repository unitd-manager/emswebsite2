import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { getUser } from "../common/user.js";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Orders = () => {

  const user = getUser();
  const userContactId = user?.contact_id;
  const [orderDetail, setOrderDetail] = useState([]);


    const getOrders = async () => {
      try {
        const res = await api.post("/orders/getOrderHistoryByContactIdOrders", {
          contact_id: userContactId,
        });
        setOrderDetail(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(() => {
      getOrders()
  }, []);

 

  const getTotalPrice = () => {
    return orderDetail.reduce((total, item) => total + item.unit_price * item.qty, 0);
  };

  console.log('Myorders',orderDetail)

  return (
    <>
           <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="home-newspaper.html">Home</a>
            </li>
            <li>Orders</li>
          </ul>
        </div>
      </div>
      {/*==============================
  Checkout Arae
  ==============================*/}
      <div className="th-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
        
          <h4 className="mt-4 pt-lg-2">My Order</h4>
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
                {orderDetail.map((product, index) => (
                  <tr className="cart_item">
                    <td data-title="Product">
                      <a className="cart-productimage">
                        <img
                          width={91}
                          height={91}
                          src={`https://ems.unitdtechnologies.com/storage/${product.file_name}`}
                          alt="Image"
                        />
                      </a>
                    </td>
                    <td data-title="Name">
                      <a className="cart-productname">
                        {product.title}
                      </a>
                    </td>
                    <td data-title="Price">
                      <span className="amount">
                        <bdi>
                          <span>₹</span>
                          {product.unit_price}
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
                        <bdi>{product.unit_price * product.qty}</bdi>
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
        </div>
      </div>
    </>
  );
};

export default Orders;
