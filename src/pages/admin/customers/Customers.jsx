import React, { useState } from "react";
import {
    useGetCustomersQuery,
    useUpdateCustomerMutation,
} from "../../../context/api/customerApi";
// import axios from "../../../api";
// import { useEffect, useState } from "react";
// import Header from "../../../components/header/Header";
// import useFetch from "../../../hooks/useFetch";
import "./customers.scss";
import { Link } from "react-router-dom";
import Model from "../../../components/model/Model";
import CreatePayment from "../../../components/createPayment/CreatePayment";

const Customers = () => {
    const [payment, setPayment] = useState(false);
    let { data } = useGetCustomersQuery();

    let [updateCustomer] = useUpdateCustomerMutation();

    const handlePin = (el) => {
        el = { ...el, pin: !el.pin };
        updateCustomer({ body: el, id: el._id });
    };

    // console.log(payment._id);

    let productItems = data?.innerData.map((el) => (
        <tr key={el._id} className="products__cart">
            <td>{el._id}</td>
            <td>{el.fname}</td>
            <td>{el.address}</td>
            <td>{el.phone_primary}</td>
            <td className={`products__cart__budget`}>
                <span
                    className={` ${
                        el.budget > 0
                            ? "green"
                            : el.budget === 0
                            ? "purple"
                            : "red"
                    }`}
                >
                    {el.budget}
                </span>
            </td>
            <td>
                <Link to={`/customers/${el._id}`}>batafsil</Link>{" "}
                <button onClick={() => handlePin(el)}>pin</button>
                <button onClick={() => setPayment(el)}>payment</button>
            </td>
        </tr>
    ));

    return (
        <>
            <section id="products">
                <div className="products container">
                    <h2 className="route__title">CUSTOMERS</h2>
                    <table className="products__carts">
                        <thead>
                            <tr className="products__carts__head">
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Budget</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{productItems}</tbody>
                    </table>
                </div>
            </section>
            {payment ? (
                <Model close={setPayment}>
                    <CreatePayment id={payment._id} setPayment={setPayment} />
                </Model>
            ) : (
                <></>
            )}
        </>
    );
};

export default Customers;
