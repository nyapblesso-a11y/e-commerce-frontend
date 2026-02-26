import "./App.css";
import ProductForm from "./Components/ProductForm";
import { useState } from "react";
import ProductList from "./Components/ProductList";

function App() {
  const [selectProduct, setSelectProduct] = useState(null);
  const [refresh, setRefresh] = useState(false)

  const handleSuccess = () => {
    setSelectProduct(null);
    setRefresh(!refresh)
  };
  return (
    <>
      {" "}
      <div className="container">
        <h1 className="title">E-Commernce Dashboard</h1>

        <ProductForm selectedProduct={selectProduct} onSuccess={handleSuccess} />
        <ProductList onEdit={setSelectProduct} refresh={refresh}/>
      </div>
    </>
  );
}

export default App;
