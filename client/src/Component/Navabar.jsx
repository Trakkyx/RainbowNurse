import { ShoppingBasketOutlined, Search  } from '@material-ui/icons';
import {logOut} from "../redux/userRedux"
import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Badge } from "@material-ui/core"
import { mobile } from "../responisive"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
           <Scale>
           <Link  style={{ textDecoration: 'none' }} to="/cart">
           <Badge badgeContent={0} color="primary"style={{ color: '#BC8F4A', fontSize:"20px" }}>
            <ShoppingBasketOutlined/>   
           </Badge>
           </Link>
           </Scale>
           </MenuItem>



       </Right>
   </Wrapper>
   <Line style={{border:"solid 0.5px", borderRadius:"2px", color:"black", fontSize:"1.5rem"}}/>
  </Container>
  );
};

export default Navabar;

