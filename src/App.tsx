import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductPageRoute from "./components/ProductPageRoute";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductPageRoute />} />
      </Routes>
    </div>
  );
}

export default App;
