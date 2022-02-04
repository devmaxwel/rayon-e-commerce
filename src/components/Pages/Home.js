import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../actions/productsActions";
import SideBar from "../Home/SideBar";
import SingleProduct from "../Home/SingleProduct";

const Home = () => {


const dispatch = useDispatch();
const productsList = useSelector((state) => state.productsList)
const { products, error, loading } = productsList

console.log("products", products)

useEffect(() => {
    dispatch(Products);
},[dispatch])


  return (
    <div className>
      <SideBar />
      <div className="productConatiner">
        {
            products.map((product) => {
              return <span>{product?.title}</span>
            })
        }
      </div>
    </div>
  );
};

export default Home;
