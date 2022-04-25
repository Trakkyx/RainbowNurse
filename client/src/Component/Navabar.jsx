import { ShoppingBasketOutlined, Search  } from '@material-ui/icons';
import {logOut} from "../redux/userRedux"
import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Badge, Button, Drawer, List, ListItem} from "@material-ui/core"
import Snackbar from '@mui/material/Snackbar';
import { mobile } from "../responisive"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClearCart, RemoveFromCart,increaseCart,decreaseCart,getTotals } from '../redux/cartRedux';
import { Add, Remove } from '@material-ui/icons';
import MuiAlert from '@mui/material/Alert';
import StripeCheckout from 'react-stripe-checkout';

const KEY = process.env.REACT_APP_STRIPE;

const Image = styled.img`
width:200px;
@media only screen and (max-width:732px){
  
    width:100px;
    
  }
`
const Details = styled.div`
padding: 15px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const PriceDetails= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};

`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

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
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
@media only screen and (max-width:732px){
   font-size:15px;
  }
`
const ProductPrice =styled.div`
font-size:30px;
font-weight:200;
@media only screen and (max-width:732px){
  
   font-size:20px;
    
  }
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
text-align:center;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"}; 
`
const CheckOutButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
width:100%;



border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"}; 
`
const Product = styled.div`
display:flex;
justify-content:space-between;
`
const ProductDetails = styled.div`
flex:2;
display:flex;
`
const Container=styled.div`
margin:0px;
 padding-left:30px;
  padding-right:160px;
color:white;
z-index:0;
background-color:white;
width:100%;
transition:all 1s ease;
position:relative;
align-items:center;
text-align:center;
justify-content:center;
justify-content:space-around;
@media only screen and (max-width:500px){
 padding-left:5%;
  padding-right:5%;
  width:100%;
}
@media only screen and (max-width:990px){
 padding-left:10px;
  padding-right:50px;
  width:100%;
}


  
`


const Line = styled.hr`

`


const Language=styled.div`
font-size:14px;
cursor:pointer;
@media only screen and (max-width:900px){

  display:none;
}
`
const Wrapper=styled.div`
padding:10px 20px;
@media only screen and (max-width:950px){

  padding:5px 10px;
}
@media only screen and (max-width:500px){

  padding:2.5px 5px;
}
display:flex;
justify-content:space-between;


`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:space-between;
`
const Center = styled.div`
flex:1;
text-align:center;
`

const Logo = styled.h1`
font-weight:bold;
transform:scale(1.6);
padding:1%;
font-size:20px;
margin-left: 25px;
font-weight:600;
color:black;
transition:all 0.5s ease;
cursor:pointer;
&:hover {
    color:#DAA520;
    transform: scale(1.8);
}
@media only screen and (max-width:800px){
  
   transform: scale(1.1);
   &:hover {
    color:#DAA520;
    transform: scale(1.3);
}
    
  }



`

const MenuItem = styled.div`
font-size:20px;
margin-left: 25px;
font-weight:600;
color:black;
transition:all 0.5s ease;
cursor:pointer;
&:hover {
    color:#DAA520;
    transform: scale(1.1);
}
@media only screen and (max-width:900px){

  font-size:15px;
}

`
const SubMenuItem = styled.div`
font-size:20px;
margin-left: 25px;
font-weight:600;
color:black;
transition:all 0.5s ease;
cursor:pointer;
&:hover {
    color:#DAA520;
    transform: scale(1.1);
}
@media only screen and (max-width:1400px){

  display:none;
}
`

const Right = styled.div`
flex:1;
display flex;
align-items:center;
justify-content:space-between;
`

const Img = styled.img`

width:100px;
`


const Summary= styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius:10px;
padding:10px;
height:60vh;

`
const Scale = styled.div`
transform:scale(1.5);
@media only screen and (max-width:900px){

  font-size:15px;
  transform:scale(1.1);
}

`
const SummaryText =styled.span``
const SummaryItem =styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};

`
const SummaryPrice =styled.span``
const SummaryTitle =styled.h1`
font-weight:200;
font-size:30px:
@media only screen and (max-width:732px){
  

    font-size:15px;
    
  }
`




const Navabar = () => {
  
  //navbar scroll when active state
  
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
  
    
  const [navbar, setNavbar] = useState("")
  const [position, setPosition] = useState("")
  const [padding, setPadding] = useState("")
  const [margin, setMargin] = useState("")
  const [zdex, setzdex] = useState("")
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
    setStripeToken(token);
    };
  
    const cart = useSelector(state => state.cart)
 
    const dispatch = useDispatch();
    const handleClick = (e) =>{
        //update cart
        e.preventDefault();
        dispatch(ClearCart());
        
        };
        const IncreaseQuantity= (product) => {
  
         dispatch(increaseCart(product))
        };
        const DecreaseQuantity= (product) => {
  
          dispatch(decreaseCart(product))
         };
   const handleRemoveFromCart = (product) => {
    setOpen(true)
    dispatch(RemoveFromCart(product));
   
   };

  //logo scroll when active
  //const [navbarLogo, setNavbarLogo] = useState(logo)

  //navbar scroll changeBackground function

  //navbar scroll when active state
  
    const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setNavbar("white")
    setPosition("fixed")
       setPadding("0px")
       setMargin("0px")
       setzdex("4")
    

     

      
    } else {
       setNavbar("white")
         setPosition("relative")
      
       setMargin("0px")
       setzdex("4")
        setPadding("10px 20px")
    
    
     
      

    }
  }

  //logo scroll when active
  

  //navbar scroll changeBackground function
  
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
 // useEffect(()=>{
 //  dispatch(getTotals());

 // },[cart])
  //logo scroll function
 
  const [state,setState] = useState(false)
  
  const toggleDrawer = (open) => (event) => {

    setState(open)
  }
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
  
      return;
     
    }
    setOpen(false);
  };
  
  return(
    
  
  <Container style={{backgroundColor:navbar, position:"fixed", top:margin, zIndex:zdex}}>
   <Wrapper  >
       
       <Left>
        <Language>EN</Language>
        <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
           <MenuItem>NHS</MenuItem>
           </Link>
 
           <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
           <MenuItem>About Us</MenuItem>
           </Link>
          
       </Left>
       <Center><Logo><Img src="https://rainbownurses.com/wp-content/uploads/2022/02/Untitled.png"></Img></Logo></Center>
       <Right>
            <Link to ="/products/candle" style={{ textDecoration: 'none' }} >
           <SubMenuItem>Nurses</SubMenuItem>
           </Link>
           
           <Link to ="/products/diffuser" style={{ textDecoration: 'none' }}>
           <MenuItem>Shop</MenuItem>
           </Link>
         
            
            
    
           <MenuItem>
           
           <Button onClick={toggleDrawer(true)}>
           <Badge badgeContent={cart.quantity} color="primary"style={{ color: 'black', fontSize:"20px" }}>
            <ShoppingBasketOutlined/>   
           </Badge>
           </Button>
           <Drawer 
           style={{ zIndex:"6"}}
           anchor={"right"}
           open={state}
           onClose={toggleDrawer(false)}
           >
        
          
           <TopButton onClick={handleClick} type="filled">Clear Cart</TopButton>
           {cart.products.map(product=>(

              <Product>
                  <ProductDetails>
                      <Image src={product.img}/>
                      <Details>
                          <ProductName><b>Product:</b>{product.title}</ProductName>
                          <ProductId>{product.id}</ProductId>
                          <ProductColor color={product.color}/>
                          <ProductPrice><Button onClick={()=>handleRemoveFromCart(product)}>Remove</Button></ProductPrice>
                          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                     <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                       Removed From Cart
                    </Alert>
                   </Snackbar>
                          <ProductSize>
                          <AmountContainer>
                         <Remove onClick={()=>DecreaseQuantity(product)}/>
                         <Amount>{product.quantity}</Amount>
                         <Add onClick={()=>IncreaseQuantity(product)}/>
                         </AmountContainer>
                          </ProductSize>

                      </Details>
                      
                  </ProductDetails>
                  <PriceDetails>
                      <ProductAmountContainer>
                          
                          <ProductAmount>{product.quantity}:<b>Item</b></ProductAmount>
                         
                      </ProductAmountContainer>

                      <ProductPrice>£{product.price * product.quantity}</ProductPrice>
                      
                  </PriceDetails>
                 
              </Product>
              
      
              ))}
               <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                <SummaryText>Subtotal</SummaryText>
                <SummaryPrice>£{cart.total}</SummaryPrice>
                </SummaryItem>
                <SummaryItem>
                <SummaryText>Estimated Shipping</SummaryText>
                <SummaryPrice>£5</SummaryPrice>
                </SummaryItem>
                <SummaryItem>
                <SummaryText>Shipping Discount</SummaryText>
                <SummaryPrice>£-5</SummaryPrice>
                </SummaryItem>
                <SummaryItem  type="total">
                <SummaryText>Total</SummaryText>
                <SummaryPrice>£{cart.total}</SummaryPrice>
                </SummaryItem>
                <StripeCheckout
                name="Candles Shop"
                billingAddress
                shippingAddress
                description={`Your total is £${cart.total}`}
                amount={cart.total*100}
                token={onToken} 
                stripekey={KEY}
                 >
                 <CheckOutButton  type="filled">Check Out</CheckOutButton>
                </StripeCheckout>
            </Summary>
               </Drawer>
           
           </MenuItem>
           

       </Right>
   </Wrapper>
  </Container>
  );
};

export default Navabar;

