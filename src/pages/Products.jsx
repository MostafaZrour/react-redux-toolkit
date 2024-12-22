import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux-toolkit/ProductSlice";

export default function Products() {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());        
    },[])
  return <div>
    {data.products && data.products.map((product,index) => <p key={index}>{product.title}</p>)}
  </div>;
}
