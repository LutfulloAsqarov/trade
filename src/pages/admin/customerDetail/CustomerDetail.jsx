import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    useGetCustomerByIdQuery,
    useUpdateCustomerMutation,
} from "../../../context/api/customerApi";
import Model from "../../../components/model/Model";

import "./customerDetail.scss";
import CreatePayment from "../../../components/createPayment/CreatePayment";
import { useGetPaymentQuery } from "../../../context/api/paymentApi";

const CustomerDetail = () => {
    const [editUser, setEditUser] = useState(null);
    const [showHistory, setShowHistory] = useState(false);
    let [updateCustomer] = useUpdateCustomerMutation();
    let { id } = useParams();
    let { data } = useGetCustomerByIdQuery(id);
    const [payment, setPayment] = useState(false);
    let { data: history } = useGetPaymentQuery();

    const handleEdit = (el) => {
        setEditUser(el);
    };

    const handleUpdatedUser = (e) => {
        e.preventDefault();
        let updateUser = {
            fname: editUser.fname,
            lname: editUser.lname,
            phone_primary: editUser.phone_primary,
            address: editUser.address,
        };
        updateCustomer({ body: updateUser, id: editUser._id });
        setEditUser(false);
    };
    let historyItems = history?.innerData?.map((el) => (
        <div key={el._id} className="history__cart">
            <p>{el.amount}</p>
            <p>
                {el.updatedAt.split("T")[0]}{" "}
                {el.updatedAt.split("T")[1].split(".")[0]}
            </p>
        </div>
    ));

    return (
        <>
            <div className="detail">
                <div className="detail__wrapper">
                    <div className="detail__info">
                        <p>
                            {data?.innerData?.fname} {data?.innerData?.lname}
                        </p>
                        <p>{data?.innerData?._id}</p>
                        <p>{data?.innerData?.budget}</p>
                        <p>{data?.innerData?.address}</p>
                        <p>{data?.innerData?.phone_primary}</p>
                    </div>
                    <div className="detail__btns">
                        <button
                            className="edit__btn"
                            onClick={() => setPayment(data?.innerData)}
                        >
                            Payment
                        </button>
                        <button
                            className="edit__btn"
                            onClick={() => handleEdit(data?.innerData)}
                        >
                            edit
                        </button>
                    </div>
                </div>
                <button
                    onClick={() => setShowHistory(true)}
                    className="history__btn"
                >
                    History
                </button>
                {showHistory ? (
                    <Model close={setShowHistory} width={800}>
                        <h2>History</h2>
                        <div className="history">
                            <div className="history__carts">{historyItems}</div>
                        </div>
                    </Model>
                ) : (
                    <></>
                )}
            </div>

            {editUser ? (
                <Model width={500} close={setEditUser}>
                    <form
                        action=""
                        className="edit-model"
                        onSubmit={handleUpdatedUser}
                    >
                        <h2>Edit Customer</h2>
                        <div className="edit-model__input">
                            <label htmlFor="fname">Ism</label>
                            <input
                                required
                                value={editUser.fname}
                                onChange={(e) =>
                                    setEditUser((prev) => ({
                                        ...prev,
                                        fname: e.target.value,
                                    }))
                                }
                                type="text"
                                id="fname"
                            />
                        </div>
                        <div className="edit-model__input">
                            <label htmlFor="lname">Familiya</label>
                            <input
                                required
                                value={editUser.lname}
                                onChange={(e) =>
                                    setEditUser((prev) => ({
                                        ...prev,
                                        lname: e.target.value,
                                    }))
                                }
                                type="text"
                                id="lname"
                            />
                        </div>
                        <div className="edit-model__input">
                            <label htmlFor="phone">Telefon</label>
                            <input
                                required
                                value={editUser.phone_primary}
                                onChange={(e) =>
                                    setEditUser((prev) => ({
                                        ...prev,
                                        phone_primary: e.target.value,
                                    }))
                                }
                                type="text"
                                id="phone"
                            />
                        </div>
                        <div className="edit-model__input">
                            <label htmlFor="address">Manzil</label>
                            <input
                                required
                                value={editUser.address}
                                onChange={(e) =>
                                    setEditUser((prev) => ({
                                        ...prev,
                                        address: e.target.value,
                                    }))
                                }
                                type="text"
                                id="address"
                            />
                        </div>

                        <button>Save</button>
                    </form>
                </Model>
            ) : (
                <></>
            )}
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

export default CustomerDetail;
