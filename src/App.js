import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Cart />} />
            <Route path="/register" element={<Cart />} />
            <Route path="/reset" element={<Cart />} />
            <Route path="/recovery" element={<Cart />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
