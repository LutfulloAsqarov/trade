import { useState } from "react";
import "./App.css";
import Admin from "./pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import Customers from "./pages/admin/customers/Customers";
import Seller from "./pages/admin/seller/Seller";
import Shop from "./pages/admin/shop/Shop";
import CreateCustomer from "./pages/admin/createCustomer/CreateCustomer";
import CustomerDetail from "./pages/admin/customerDetail/CustomerDetail";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Auth />}>
                    <Route path="admin/" element={<Admin />}>
                        <Route path="customers" element={<Customers />} />
                        <Route path="seller" element={<Seller />} />
                        <Route path="shop" element={<Shop />} />
                        <Route
                            path="createCustomer"
                            element={<CreateCustomer />}
                        />
                        <Route
                            path="customers/:id"
                            element={<CustomerDetail />}
                        />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
