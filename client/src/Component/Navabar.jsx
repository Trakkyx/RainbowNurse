import { ShoppingBasketOutlined, Search  } from '@material-ui/icons';
import {logOut} from "../redux/userRedux"
import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Badge, Button, Drawer, List, ListItem } from "@material-ui/core"
import { mobile } from "../responisive"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClearCart } from '../redux/cartRedux';

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
 padding-left:28%;
  padding-right:28%;
color:white;
z-index:0;
background-color:#EBD3B1;
transition:all 1s ease;
position:relative;
align-items:center;
justify-content:center;
@media only screen and (max-width:900px){

  padding-left:20%;
  padding-right:20%;
}
@media only screen and (max-width:500px){

  padding-left:10px;
  padding-right:10px;
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
transform:scale(1.1);
padding:1%;
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
const Scale = styled.div`
transform:scale(1.5);
@media only screen and (max-width:900px){

  font-size:15px;
  transform:scale(1.1);
}

`

const Navabar = () => {
  
  //navbar scroll when active state
  const [navbar, setNavbar] = useState("")
  const [position, setPosition] = useState("")
  const [padding, setPadding] = useState("")
  const [margin, setMargin] = useState("")
  const [zdex, setzdex] = useState("")
  const cart = useSelector(state => state.cart)
 
    const dispatch = useDispatch();
    const handleClick = (e) =>{
        //update cart
        e.preventDefault();
        dispatch(ClearCart());
        
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
       setNavbar("#EBD3B1")
         setPosition("relative")
      
       setMargin("0px")
       setzdex("0")
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

  //logo scroll function
 
  const [state,setState] = useState(false)
  
  const toggleDrawer = (open) => (event) => {

    setState(open)
  }
 
  const list = () => {
    <List>
      <ListItem>Help hellllp</ListItem>
    </List>
    
  }
  
  return(
    
  
  <Container style={{backgroundColor:navbar, position:position, top:margin, zIndex:zdex}}>
   <Wrapper style={{padding:padding}} >
       
       <Left>
        <Language>EN</Language>
        <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
           <MenuItem>Energy Drinks</MenuItem>
           </Link>
 
           <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
           <MenuItem>About Us</MenuItem>
           </Link>
          
       </Left>
       <Center><Logo><Img src="https://i.ibb.co/XWdKgrm/Next-Level-Logo-removebg-preview-1.png"></Img></Logo></Center>
       <Right>
            <Link to ="/products/candle" style={{ textDecoration: 'none' }} >
           <SubMenuItem>Reviews</SubMenuItem>
           </Link>
           
           <Link to ="/products/diffuser" style={{ textDecoration: 'none' }}>
           <MenuItem>Party Drinks</MenuItem>
           </Link>
         
            
            
    
           <MenuItem>
           
           <Button onClick={toggleDrawer(true)}>
           <Badge badgeContent={0} color="primary"style={{ color: '#BC8F4A', fontSize:"20px" }}>
            <ShoppingBasketOutlined/>   
           </Badge>
           </Button>
           <Drawer 
           style={{ zIndex:"6"}}
           anchor={"right"}
           open={state}
           onClose={toggleDrawer(false)}
           >
           <p>cool yo yoooooooooooooooo</p>
          
           <TopButton onClick={handleClick} type="filled">Clear Cart</TopButton>
           {cart.products.map(product=>(

              <Product>
                  <ProductDetails>
                      <Image src={product.img}/>
                      <Details>
                          <ProductName><b>Product:</b>{product.title}</ProductName>
                          <ProductId>{product.id}</ProductId>
                          <ProductColor color={product.color}/>
                          <ProductSize><b>Size:</b>{product.size}</ProductSize>
                        
                      </Details>
                      
                  </ProductDetails>
                  <PriceDetails>
                      <ProductAmountContainer>
                          
                          <ProductAmount>{product.quantity}:<b>Item</b></ProductAmount>
                         
                      </ProductAmountContainer>
                      <ProductPrice>£{product.price}</ProductPrice>
                  </PriceDetails>
              </Product>
              ))}
               </Drawer>
           
           </MenuItem>
           

       </Right>
   </Wrapper>
   <Line style={{border:"solid 0.5px", borderRadius:"2px", color:"black", fontSize:"1.5rem"}}/>
  </Container>
  );
};

export default Navabar;

