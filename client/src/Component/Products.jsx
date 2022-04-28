import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import Product from "./Product";
import axios from "axios"

const Container = styled.div`
display: block;
background-color:lightgrey;
padding:5%;
`
const Contained = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-between;
background-color:lightgrey;
padding:20px;
`

const ShopTitle=styled.h1`
text-align:center;
align-items:center;
justify-content:center:
padding:5%;
`

const Products = ({cat,filters,sort}) => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async() =>{
          try{
            const res = await axios.get( 
            "http://localhost:5000/api/product"
            );
            setProducts(res.data);
          }catch(err){}
          };
          getProducts();
    },[cat]);
     useEffect(()=>{
      if(sort==="asc"){
            setProducts((prev)=>
            [...prev].sort((a,b)=>a.price - b.price)
            );
      }else{
              setProducts((prev)=>
              [...prev].sort((a,b)=>b.price - a.price)
              );
      } },[sort])
  return (
<Container>
<ShopTitle>Take A Look At The Dolls!</ShopTitle>
<Contained>

 {products
     .map((item) => <Product item={item} key={item.id} />)}
</Contained>
</Container>
  )
  
};

export default Products;

