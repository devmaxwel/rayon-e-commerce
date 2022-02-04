import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
