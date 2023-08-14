import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductList from "./pages/ProductList";
import CreateUpdateProduct from "./pages/CreateUpdateProduct";
import { Toaster } from "react-hot-toast";

import "./assets/css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="create" element={<CreateUpdateProduct />} />
          <Route path="update/:id" element={<CreateUpdateProduct />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
