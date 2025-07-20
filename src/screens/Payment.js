import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../constants/api";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Yaseeni = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const bloodGroup = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
];

const Payment = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cateOptions, setcateOption] = useState([]);
  const [paymentOptions, setPaymentOptions] = useState(null);
  const [amount, setAmount] = useState({ discount: "" });
  const [country, setCountry] = useState([]);
  const [gender, setGender] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [userContactId, setUserContactId] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfBaiyath, setDateOfBaiyath] = useState("");

  const [name, setName] = useState({
    shipping_first_name: "",
    shipping_email: "",
    shipping_phone: "",
    shipping_address1: "",
    shipping_address_city: "",
    shipping_address_state: "",
    shipping_address_country_code: "",
    shipping_address_po_code: "",
    date_of_birth: "",
    father_name: "",
    pass_word: "",
    date_of_baiyath: "",
    gender: "",
    alternate_number: "",
    qualification: "",
    ug_specialization: "",
    pg_specialization: "",
    blood_group: "",
    yaseeni: "",
  });

  useEffect(() => {
    const getUserCart = async () => {
      try {
        const userData = localStorage.getItem("user");
        const user = JSON.parse(userData);

        console.log("contact",user)
        api
          .post("/contact/getContactsById", {
            contact_id: user?.contact_id || null,
          })
          .then((res) => {
            const contactCri = res.data.data;
            setUserContactId(contactCri[0]?.contact_id);
            setDateOfBirth(contactCri[0]?.date_of_birth);
            setDateOfBaiyath(contactCri[0]?.date_of_baiyath);
            setName({
              shipping_first_name: contactCri[0]?.first_name || "",
              shipping_email: contactCri[0]?.email || "",
              shipping_phone: contactCri[0]?.mobile || "",
              shipping_address1: contactCri[0]?.address1 || "",
              shipping_address_city: contactCri[0]?.address_city || "",
              shipping_address_state: contactCri[0]?.address_state || "",
              shipping_address_country_code:
                contactCri[0]?.address_country_code || "",
              shipping_address_po_code: contactCri[0]?.address_po_code || "",
              date_of_birth: contactCri[0]?.date_of_birth || "",
              father_name: contactCri[0]?.father_name || "",
              date_of_baiyath: contactCri[0]?.date_of_baiyath || "",
              gender: contactCri[0]?.gender || "",
              alternate_number: contactCri[0]?.alternate_number || "",
              qualification: contactCri[0]?.qualification || "",
              ug_specialization: contactCri[0]?.ug_specialization || "",
              pg_specialization: contactCri[0]?.pg_specialization || "",
              blood_group: contactCri[0]?.blood_group || "",
              yaseeni: contactCri[0]?.yaseeni || "",
            });
          });
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    getUserCart();
  }, []);

  const fetchGalleryCatecory = () => {
    api
      .get("/content/getValueListPayment")
      .then((res) => {
        setcateOption(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  const fetchGenderq = () => {
    api
      .get("/valuelist/getGenderValuelist")
      .then((res) => {
        setGender(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  const fetchCountry = () => {
    api
      .get("/content/getGeoCountry")
      .then((res) => {
        setCountry(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  const fetchQualification = () => {
    api
      .get("/valuelist/getQualificationValuelist")
      .then((res) => {
        setQualification(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  const fetchGender = () => {
    api
      .get("/content/getGeoCountry")
      .then((res) => {
        setCountry(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  const fetchGalleryCatecorySpcl = () => {
    api
      .post("/content/getValueListSpecialPaymentId", { value: categoryFilter })
      .then((res) => {
        setPaymentOptions(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  const fetchPaymentDetails = () => {
    if (!categoryFilter) return;
    api
      .post("/content/getValueListSpecialPaymentId", { value: categoryFilter })
      .then((res) => setPaymentOptions(res.data.data));
  };

  const totalAmount = paymentOptions?.code || amount.discount;

  const SendEmail = () => {
    const to = name.shipping_email;
    const subject = "Payment Confirmed";
    const names = name.shipping_first_name;
    const TotalAmount = totalAmount;
    const Type = categoryFilter;
    const phone = name.shipping_phone;
    const address = name.shipping_address1;
    const city = name.shipping_address_city;
    const state = name.shipping_address_state;
    const Country = name.shipping_address_country_code;
    const code = name.shipping_address_po_code;

    api
      .post("/commonApi/sendUseremailPayment", {
        to,
        subject,
        names,
        TotalAmount,
        Type,
        address,
        city,
        state,
        Country,
        phone,
        code,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Payment successful. Check your email for acknowledgement.");
          navigate("/home");
        } else {
          console.error("Error");
        }
      });
  };

  const addDeliveryAddress = async () => {
    try {
      const currentDate = new Date().toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
  
      let contactId = userContactId;
  
      // Prepare contact insert objects
      const contactUser = {
        address1: name?.shipping_address1,
        address_city: name?.shipping_address_city,
        contact_id: userContactId,
        address_state: name?.shipping_address_state,
        address_country_code: name?.shipping_address_country_code,
        address_po_code: name?.shipping_address_po_code,
        subscribe: 1,
      };
  
      const contactUserInsert = {
        first_name: name?.shipping_first_name,
        email: name?.shipping_email,
        address1: name?.shipping_address1,
        address_city: name?.shipping_address_city,
        address_state: name?.shipping_address_state,
        address_country_code: name?.shipping_address_country_code,
        address_po_code: name?.shipping_address_po_code,
        published: 1,
        date_of_birth: dateOfBirth,
        mobile: name?.shipping_phone,
        father_name: name?.father_name,
        date_of_baiyath: dateOfBaiyath,
        gender: name?.gender,
        pass_word: name?.pass_word,
        alternate_number: name?.alternate_number,
        qualification: name?.qualification,
        ug_specialization: name?.ug_specialization,
        pg_specialization: name?.pg_specialization,
        blood_group: name?.blood_group,
        yaseeni: name?.yaseeni,
      };
  
      const contactUserInsertMagazine = {
        first_name: name?.shipping_first_name,
        email: name?.shipping_email,
        address1: name?.shipping_address1,
        address_city: name?.shipping_address_city,
        address_state: name?.shipping_address_state,
        address_country_code: name?.shipping_address_country_code,
        address_po_code: name?.shipping_address_po_code,
        payment_date: currentDate,
        subs_payment_status: "subscribe",
        subscribe: 1,
        published: 1,
        date_of_birth: dateOfBirth,
        pass_word: name?.pass_word,
        mobile: name?.shipping_phone,
        father_name: name?.father_name,
        date_of_baiyath: dateOfBaiyath,
        gender: name?.gender,
        alternate_number: name?.alternate_number,
        qualification: name?.qualification,
        ug_specialization: name?.ug_specialization,
        pg_specialization: name?.pg_specialization,
        blood_group: name?.blood_group,
        yaseeni: name?.yaseeni,
      };
  
      // 👉 Step 1: Insert contact if contact_id is not available
      if (!contactId) {
        if (categoryFilter === "Magazine payment") {
          const res = await api.post("/contact/insertContact", contactUserInsertMagazine);
          contactId = res.data.data.insertId;
        } else {
          const res = await api.post("/contact/insertContact", contactUserInsert);
          contactId = res.data.data.insertId;
        }
      }
  
      // 👉 Step 2: Insert Order
      const orderRes = await api.post("/orders/insertorders", {
        ...name,
        contact_id: contactId,
      });
  
      if (orderRes.status === 200) {
        const orderId = orderRes.data.data.insertId;
  
        // 👉 Step 3: Insert Order Item
        await api.post("/orders/insertOrderItem", {
          item_title: categoryFilter,
          unit_price: totalAmount,
          cost_price: totalAmount,
          contact_id: contactId,
          order_id: orderId,
        });
  
        // 👉 Step 4: Update or add additional contact details
        if (userContactId) {
          if (categoryFilter === "Magazine payment") {
            await api.post("/contact/editContactPaymentMagazine", {
              address1: name?.shipping_address1,
              address_city: name?.shipping_address_city,
              contact_id: contactId,
              address_state: name?.shipping_address_state,
              address_country_code: name?.shipping_address_country_code,
              address_po_code: name?.shipping_address_po_code,
              payment_date: currentDate,
              subs_payment_status: "subscribe",
              subscribe: 1,
              date_of_birth: dateOfBirth,
              father_name: name?.father_name,
              date_of_baiyath: dateOfBaiyath,
              gender: name?.gender,
              alternate_number: name?.alternate_number,
              qualification: name?.qualification,
              ug_specialization: name?.ug_specialization,
              pg_specialization: name?.pg_specialization,
              blood_group: name?.blood_group,
              yaseeni: name?.yaseeni,
            });
          } else {
            await api.post("/contact/editContactPayment", {
              ...contactUser,
              contact_id: contactId,
            });
          }
        }
  
        // 👉 Step 5: Magazine-specific registration
        if (!userContactId && categoryFilter === "Magazine payment") {
          await api.post("/content/insertMagazineReg", {
            payment_date: currentDate,
            amount: totalAmount,
            contact_id: contactId,
            subs_payment_status: "subscribe",
          });
        }
  
        // 👉 Final: Send confirmation email
        SendEmail();
      } else {
        console.error("Order creation failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const onPaymentPress = () => {
    if (!categoryFilter) return alert("Please select payment method.");
    if (!totalAmount) return alert("Please enter amount.");
    if (!name.shipping_first_name.trim()) return alert("Enter your name.");
    if (!name.shipping_email.trim()) return alert("Enter your email.");
    if (!name.shipping_phone.trim()) return alert("Enter your phone number.");
    if (!name.shipping_address1.trim()) return alert("Enter your address.");

    const amountInPaise = totalAmount * 100;

    const options = {
      key: "rzp_test_yE3jJN90A3ObCp",
      amount: amountInPaise,
      currency: "INR",
      name: "United",
      description: "Purchase Description",
      handler: function (response) {
        console.log("Payment Success:", response);
        addDeliveryAddress();
      },
      prefill: {
        name: name.shipping_first_name,
        email: name.shipping_email,
        contact: name.shipping_phone,
      },
      theme: { color: "#532C6D" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    fetchGalleryCatecory();
    fetchCountry();
    fetchGender();
    fetchGenderq();
    fetchQualification();
    fetchGalleryCatecorySpcl(categoryFilter);
  }, [categoryFilter]);

  console.log("paymntvalue", gender);

  const transformedCateOptions = cateOptions.map((c) => ({
    label: c.value,
    value: c.value,
  }));

  const transformedGenderOptions = gender.map((c) => ({
    label: c.value,
    value: c.value,
  }));

  const transformedQualificationOptions = qualification.map((c) => ({
    label: c.value,
    value: c.value,
  }));

  return (
    <>
      <div className="space2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="quote-form-box">
                <h4 className="form-title">Payment</h4>
                <form onSubmit={onPaymentPress} className="contact-form">
                  <div className="row">
                    {/* Payment Method */}
                    <div className="form-group col-md-6">
                      <label>Payment Method</label>
                      <Select
                        className="react-select-container"
                        styles={{
                          control: (base, state) => ({
                            ...base,
                            borderColor: 'orange',
                            boxShadow: state.isFocused ? '0 0 0 1px orange' : base.boxShadow,
                            '&:hover': {
                              borderColor: 'orange',
                            },
                          }),
                        }}
                        classNamePrefix="react-select"
                        value={transformedCateOptions.find(
                          (opt) => opt.value === categoryFilter
                        )}
                        onChange={(selected) =>
                          setCategoryFilter(selected?.value)
                        }
                        options={transformedCateOptions}
                        placeholder="Select method"
                      />
                    </div>

                    {/* Amount */}
                    <div className="form-group col-md-6">
                      <label>Amount</label>
                      <input
                        type="number"
                        className="form-control"
                        value={paymentOptions?.code || amount.discount}
                        onChange={(e) => {
                          const value = e.target.value;
                          paymentOptions?.code
                            ? setPaymentOptions({
                                ...paymentOptions,
                                discount: value,
                              })
                            : setAmount({ ...amount, discount: value });
                        }}
                        readOnly={!!paymentOptions?.code}
                      />
                    </div>

                    {/* Basic Info */}
                    {[
                      "shipping_first_name",
                      "shipping_email",
                      "shipping_phone",
                    ].map((field) => (
                      <div className="form-group col-md-4" key={field}>
                        <label>{field.replace(/_/g, " ")}</label>
                        <input
                          type={field === "shipping_email" ? "email" : "text"}
                          className="form-control"
                          value={name[field]}
                          onChange={(e) =>
                            setName({ ...name, [field]: e.target.value })
                          }
                          readOnly={!!userContactId}
                        />
                      </div>
                    ))}

                    {/* Password */}
                    {/* {!userContactId && (
                <div className="form-group col-md-6">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={name.pass_word}
                    onChange={e => setName({ ...name, pass_word: e.target.value })}
                  />
                </div>
              )} */}

                    {/* Conditional Magazine Fields */}
                    {categoryFilter === "Magazine payment" && (
                      <>
                        <div className="form-group col-md-6">
                          <label>Alternate Number</label>
                          <input
                          type="number"
                            className="form-control"
                            value={name.alternate_number}
                            onChange={(e) =>
                              setName({
                                ...name,
                                alternate_number: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Father Name</label>
                          <input
                            className="form-control"
                            value={name.father_name}
                            onChange={(e) =>
                              setName({ ...name, father_name: e.target.value })
                            }
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Date of Birth</label>
                          <DatePicker
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select Date"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Date of Baiyath</label>
                          <DatePicker
                           type="date"
                            selected={dateOfBaiyath}
                            onChange={(date) => setDateOfBaiyath(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select Date"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Gender</label>
                          <Select
                            className="react-select-container"
                            styles={{
                              control: (base, state) => ({
                                ...base,
                                borderColor: 'orange',
                                boxShadow: state.isFocused ? '0 0 0 1px orange' : base.boxShadow,
                                '&:hover': {
                                  borderColor: 'orange',
                                },
                              }),
                            }}
                            classNamePrefix="react-select"
                            value={transformedGenderOptions.find(
                              (opt) => opt.value === name.gender
                            )}
                            onChange={(selected) =>
                              setName({ ...name, gender: selected.value })
                            }
                            options={transformedGenderOptions}
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Are you a Yaseeni?</label>
                          <Select
                            className="react-select-container"
                            styles={{
                              control: (base, state) => ({
                                ...base,
                                borderColor: 'orange',
                                boxShadow: state.isFocused ? '0 0 0 1px orange' : base.boxShadow,
                                '&:hover': {
                                  borderColor: 'orange',
                                },
                              }),
                            }}
                            classNamePrefix="react-select"
                            value={Yaseeni.find(
                              (opt) => opt.value === name.yaseeni
                            )}
                            onChange={(selected) =>
                              setName({ ...name, yaseeni: selected.value })
                            }
                            options={Yaseeni}
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Blood Group</label>
                          <Select
                            className="react-select-container"
                            styles={{
                              control: (base, state) => ({
                                ...base,
                                borderColor: 'orange',
                                boxShadow: state.isFocused ? '0 0 0 1px orange' : base.boxShadow,
                                '&:hover': {
                                  borderColor: 'orange',
                                },
                              }),
                            }}
                            classNamePrefix="react-select"
                            value={bloodGroup.find(
                              (opt) => opt.value === name.blood_group
                            )}
                            onChange={(selected) =>
                              setName({ ...name, blood_group: selected.value })
                            }
                            options={bloodGroup}
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Qualification</label>
                          <Select
                            className="react-select-container"
                            styles={{
                              control: (base, state) => ({
                                ...base,
                                borderColor: 'orange',
                                boxShadow: state.isFocused ? '0 0 0 1px orange' : base.boxShadow,
                                '&:hover': {
                                  borderColor: 'orange',
                                },
                              }),
                            }}
                            classNamePrefix="react-select"
                            value={transformedQualificationOptions.find(
                              (opt) => opt.value === name.qualification
                            )}
                            onChange={(selected) =>
                              setName({
                                ...name,
                                qualification: selected.value,
                              })
                            }
                            options={transformedQualificationOptions}
                          />
                        </div>
                      </>
                    )}

                    {/* Address Fields */}
                    <div className="form-group col-md-6">
                      <label>Address</label>
                      <input
                        className="form-control"
                        value={name.shipping_address1}
                        onChange={(e) =>
                          setName({
                            ...name,
                            shipping_address1: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input
                        className="form-control"
                        value={name.shipping_address_city}
                        onChange={(e) =>
                          setName({
                            ...name,
                            shipping_address_city: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label>State</label>
                      <input
                        className="form-control"
                        value={name.shipping_address_state}
                        onChange={(e) =>
                          setName({
                            ...name,
                            shipping_address_state: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label>Country</label>
                      <Select
                        className="react-select-container"
                        styles={{
                          control: (base, state) => ({
                            ...base,
                            borderColor: 'orange',
                            boxShadow: state.isFocused ? '0 0 0 1px orange' : base.boxShadow,
                            '&:hover': {
                              borderColor: 'orange',
                            },
                          }),
                        }}
                        classNamePrefix="react-select"
                        value={country.find(
                          (opt) =>
                            opt.country_code ===
                            name.shipping_address_country_code
                        )}
                        onChange={(selected) =>
                          setName({
                            ...name,
                            shipping_address_country_code:
                              selected.country_code,
                          })
                        }
                        options={country.map((c) => ({
                          label: c.name,
                          value: c.country_code,
                        }))}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label>Postal Code</label>
                      <input
                        className="form-control"
                        value={name.shipping_address_po_code}
                        onChange={(e) =>
                          setName({
                            ...name,
                            shipping_address_po_code: e.target.value,
                          })
                        }
                      />
                    </div>

                    {categoryFilter === "Magazine payment" && (
                      <>
                        <div className="form-group col-md-6">
                          <label>UG Specialization</label>
                          <input
                            className="form-control"
                            value={name.ug_specialization}
                            onChange={(e) =>
                              setName({
                                ...name,
                                ug_specialization: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>PG Specialization</label>
                          <input
                            className="form-control"
                            value={name.pg_specialization}
                            onChange={(e) =>
                              setName({
                                ...name,
                                pg_specialization: e.target.value,
                              })
                            }
                          />
                        </div>
                      </>
                    )}

                    {/* Submit Button */}
                    <div className="form-btn col-12 text-end">
                      <button type="submit" className="th-btn">
                        Confirm Payment{" "}
                        <i className="fas fa-arrow-up-right ms-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
