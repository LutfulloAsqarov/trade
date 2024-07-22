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
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import CustomerCarts from "../../../components/customer-carts/CustomerCarts";
// import { create } from "@mui/material/styles/createTransitions";

const Customers = () => {
    const [payment, setPayment] = useState(null);
    const [page, setPage] = useState(1);
    const [paid, setPaid] = useState("2");
    const [debt, setDebt] = useState("2");
    const [created, setCreatedAt] = useState("-1");
    const [limit, setLimit] = useState("10");
    const [budget, setBudget] = useState("0");
    let { data } = useGetCustomersQuery({
        limit,
        page: page - 1,
        paid,
        debt,
        created,
        budget,
    });
    let countPage = Math.ceil(data?.totalCount / limit) || 0;
    // console.log(data?.totalCount / data?.innerData?.length);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handlePaid = (e) => {
        setPage(1);
        setPaid(e.target.value);
    };

    const handleDebt = (e) => {
        setPage(1);
        setDebt(e.target.value);
    };
    const handleCreatedAt = (e) => {
        setPage(1);
        setCreatedAt(e.target.value);
    };
    const handleBudget = (e) => {
        setPage(1);
        setBudget(e.target.value);
    };

    // let productItems = data?.innerData.map((el) => (
    //     <CustomerCarts key={el._id} el={el} />
    // ));

    return (
        <>
            <section id="customers">
                <div className="customers">
                    <h2 className="route__title">CUSTOMERS</h2>
                    <div className="customers__selection">
                        <select name="" id="" onChange={handlePaid}>
                            <option value="2">Barchasi</option>
                            <option value="1">Tolov qilingan</option>
                            <option value="-1">Tolov qilinmagan</option>
                        </select>
                        <select name="" id="" onChange={handleDebt}>
                            <option value="2">Barchasi</option>
                            <option value="-1">Qarzdorlar</option>
                            <option value="1">Haqdorlar</option>
                            <option value="0">Nollar</option>
                        </select>
                        <select name="" id="" onChange={handleCreatedAt}>
                            <option value="1">Oldest</option>
                            <option value="-1">Newest</option>
                        </select>
                        <select name="" id="" onChange={handleBudget}>
                            <option value="0">Barchasi</option>
                            <option value="-1">Haqdorlar</option>
                            <option value="1">Qarzdorlar</option>
                        </select>
                    </div>
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
                        <tbody>
                            {data?.innerData.map((el) => (
                                <CustomerCarts
                                    key={el._id}
                                    el={el}
                                    setPayment={setPayment}
                                />
                            ))}
                        </tbody>
                    </table>

                    <div className="customers__page">
                        <div>
                            <Typography>Soni: {data?.totalCount}</Typography>
                        </div>
                        <div className="customers__pagination">
                            <Stack spacing={2}>
                                <Pagination
                                    count={countPage}
                                    page={page}
                                    onChange={handleChange}
                                />
                            </Stack>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Limit
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={limit}
                                        label="Limit"
                                        onChange={(e) =>
                                            setLimit(e.target.value)
                                        }
                                    >
                                        <MenuItem value={"10"}>Ten</MenuItem>
                                        <MenuItem value={"20"}>Twenty</MenuItem>
                                        <MenuItem value={"30"}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
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
