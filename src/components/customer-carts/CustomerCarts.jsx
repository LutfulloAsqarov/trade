import React, { useState, useEffect, useRef } from "react";
import { BiDetail } from "react-icons/bi";
import { TiPin } from "react-icons/ti";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { useUpdateCustomerMutation } from "../../context/api/customerApi";

const CustomerCarts = ({ el, setPayment }) => {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);
    let [updateCustomer] = useUpdateCustomerMutation();

    const handlePin = (el) => {
        el = { ...el, pin: !el.pin };
        updateCustomer({ body: el, id: el._id });
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <tr key={el._id} className={`customers__cart ${el.pin ? "pin" : ""}`}>
            <td>{el._id}</td>
            <td>{el.fname}</td>
            <td>{el.address}</td>
            <td>{el.phone_primary}</td>
            <td className={`customers__cart__budget`}>
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
            <td className="customers__btns">
                <div className="customers__btns__main">
                    <button
                        className="customers__btns__pay"
                        onClick={() => setPayment(el)}
                    >
                        <MdOutlinePayment />
                        <span>Tolov</span>
                    </button>
                    <div
                        className="customers__btns__more"
                        onClick={() => setShow(!show)}
                        ref={dropdownRef}
                    >
                        <IoMdMore />
                        <div
                            className={`customers__btns__wrapper ${
                                show ? "show" : ""
                            }`}
                        >
                            <Link to={`${el._id}`}>
                                <BiDetail /> <span>Batafsil</span>
                            </Link>

                            <button onClick={() => handlePin(el)}>
                                <TiPin />
                                <span>
                                    {el.pin ? "Olib tashlamoq" : "Qadamoq"}
                                </span>
                            </button>
                        </div>
                    </div>
                    {el.pin ? <TiPin onClick={() => handlePin(el)} /> : <></>}
                </div>
            </td>
        </tr>
    );
};

export default CustomerCarts;
