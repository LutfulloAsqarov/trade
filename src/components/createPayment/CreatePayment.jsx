import React, { useState } from "react";
import { useCreatePaymentMutation } from "../../context/api/paymentApi";

const CreatePayment = ({ id, setPayment }) => {
    console.log(id);
    const initialState = {
        customerId: id,
        amount: "",
        comment: "",
    };
    const [cusPay, setCusPay] = useState(initialState);

    const [createPayment] = useCreatePaymentMutation(id);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setCusPay((prev) => ({ ...prev, [name]: value }));
    };

    const handlePaySubmit = (e) => {
        e.preventDefault();
        createPayment(cusPay);
        setPayment(false);
    };
    return (
        <div>
            <form action="" onSubmit={handlePaySubmit}>
                <h2>Payment</h2>
                <input
                    type="number"
                    placeholder="amount"
                    name="amount"
                    value={cusPay.amount}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="comment"
                    name="comment"
                    value={cusPay.comment}
                    onChange={handleChange}
                />
                <button> Save</button>
            </form>
        </div>
    );
};

export default CreatePayment;
