import { useState } from "react";
import "./App.css";
import Admin from "./pages/admin/Admin";
import { Route, Routes } from "react-router-dom";
import Customers from "./pages/admin/customers/Customers";
import Seller from "./pages/admin/seller/Seller";
import Shop from "./pages/admin/shop/Shop";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/" element={<Admin />}>
                    <Route path="customers" element={<Customers />} />
                    <Route path="seller" element={<Seller />} />
                    <Route path="shop" element={<Shop />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
