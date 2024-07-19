import React, { useState } from "react";
import {
    useGetCustomersQuery,
    useUpdateCustomerMutation,
} from "../../../context/api/customerApi";
import "./customers.scss";
import { Link } from "react-router-dom";
import Model from "../../../components/model/Model";
import CreatePayment from "../../../components/createPayment/CreatePayment";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CustomerCarts from "../../../components/customer-carts/CustomerCarts";

const Customers = () => {
    const [payment, setPayment] = useState(false);
    const [page, setPage] = React.useState(1);
    let { data } = useGetCustomersQuery({ page: page - 1 });
    let count = Math.ceil(data?.totalCount / 10);
    // console.log(data?.totalCount / data?.innerData?.length);

    const handleChange = (event, value) => {
        setPage(value);
    };

    let productItems = data?.innerData.map((el) => (
        <CustomerCarts key={el._id} el={el} />
    ));

    return (
        <>
            <section id="customers">
                <div className="customers container">
                    <h2 className="route__title">CUSTOMERS</h2>
                    <table className="customers__carts">
                        <thead>
                            <tr className="customers__carts__head">
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
                    <Stack className="customers__page" spacing={2}>
                        {/* <Typography>Page: {page}</Typography> */}
                        <Pagination
                            count={count}
                            page={page}
                            onChange={handleChange}
                        />
                    </Stack>
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
