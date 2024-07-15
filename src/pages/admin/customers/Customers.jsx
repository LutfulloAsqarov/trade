import React from "react";
import { useGetCustomersQuery } from "../../../context/api/customerApi";
// import axios from "../../../api";
// import { useEffect, useState } from "react";
// import Header from "../../../components/header/Header";
// import useFetch from "../../../hooks/useFetch";
import "./customers.scss";

const Customers = () => {
    // let { data, loading, error } = useFetch(`users`);

    let { data } = useGetCustomersQuery();
    // console.log(data);

    let productItems = data?.innerData.map((el) => (
        <tr key={el._id} className="products__cart">
            <td>{el._id}</td>
            <td>{el.fname}</td>
            <td>{el.address}</td>
            <td>{el.phones[0]}</td>
            <td>{el.budget}</td>
            <td>
                <button>batafsil</button> <button>tolov</button>
            </td>
        </tr>
    ));

    return (
        <>
            {/* -+-{" "} */}
            <section id="products">
                <div className="products container">
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
        </>
    );
};

export default Customers;
