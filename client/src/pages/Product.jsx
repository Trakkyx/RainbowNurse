import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components"
import Annoncement from '../Component/Annoncement';
import Footer from '../Component/Footer';
import Navabar from '../Component/Navabar';
import Newsletter from '../Component/Newsletter';
import { publicRequest } from '../requestMethods';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Upsale from '../Component/Upsale';
import Products from '../Component/Products';
import Slider from '../Component/Slider';
import { IconButton, Snackbar} from '@material-ui/core';
import MuiAlert from '@mui/material/Alert';

const Container = styled.div``
const Wrapper = styled.div`
padding:50px;
display:flex;
@media only screen and (max-width:1000px){
    
    display:block;
  }
`
const ImgContainer = styled.div`
flex:1;

`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`
const Price = styled.span`
font-weight:100;
font-size:40px;
padding:30px;
line-height:4;

`
const Image = styled.img`
width:80%;
height:80%;
object-fit:contain;
@media only screen and (max-width:732px){
  

    align-items:center;
    justify-content:center;
    
  }

`
const Desc = styled.p`
margin:20px 0px;
padding:30px;

`
const Title = styled.h1`
font-weight:800;
padding:30px;
font-size:70px;
@media only screen and (max-width:732px){
    
    font-size:30px;
  }
`
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
width:50%;
margin:30px 0px;
`

const Filter = styled.div`
display: flex;
align-items:center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`

const FilterSizeOption = styled.option``
const AddContainer = styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
cursor:pointer;

`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight:500;
transition:all 0.5s ease;
&:hover{
    background-color: black;
    color:white;
}

`

const FilterSize = styled.select`
margin-left:10px;

`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`
const Product = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
const location = useLocation();
const id = location.pathname.split("/")[2]; 
const [product, setProduct] = useState({});
const [quantity, setQuantity] = useState(1);
const [open, setOpen] = useState(false);

const dispatch = useDispatch();
useEffect(()=>{
const getProduct = async ()=>{
try{
   const res = await publicRequest.get("/product/find/"+id)
   setProduct(res.data);
}catch{}
};
getProduct();    
},[id]);

const handleQuantity = (type) => {
    if(type === "dec"){
        quantity > 1 && setQuantity(quantity-1);
    }else{
        setQuantity(quantity+1);
    }

};
const handleClick = () =>{
//update cart
setOpen(true);
dispatch(
addProduct({...product, quantity, price:product.price * quantity}));


};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {

    return;
   
  }
  setOpen(false);
};

  return (
  <Container>
      <Navabar/>
      <Annoncement/>
      <Wrapper>
          <ImgContainer>
          <Image src={product.img}/>
          </ImgContainer>
          <InfoContainer>
              <Title>{product.title}</Title>
              <Price>Price: <b>£{product.price}</b></Price>
              <AddContainer>

            <AmountContainer>
               <Remove onClick={()=>handleQuantity("dec")}/>
               <Amount>{quantity}</Amount>
            <Add onClick={()=>handleQuantity("inc")}/>
               </AmountContainer>
              <Button onClick={handleClick}>ADD TO CART</Button>
              <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                     <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                       Added To Cart
                    </Alert>
                   </Snackbar>
            </AddContainer>
              <Desc>{product.desc}</Desc>
            
          </InfoContainer>
      </Wrapper>
      <Upsale/>
      <Slider/>
      <Newsletter/>
      <Footer/>
  </Container>
  )
};

export default Product;
