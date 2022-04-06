import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import {sliderItems} from "../data"
import styled from "styled-components"
import { Star } from '@material-ui/icons';


const Container = styled.div`
padding:10%;
background-color:#EBD3B1;

`

const Wrapper= styled.div`
display:flex:
padding-bottom:100px;

`
const Desc = styled.div`
display:flex;
color:gold;
padding-top:2%;
padding-bottom:2%;
`
const Frapper= styled.div`
padding:5%;
margin:10%;
border-radius:20px;
background-color:white;
`
const Title=styled.h1`
padding-bottom:30px;
`
const Ritle=styled.h1`
text-align:center;
padding:5%;
padding-bottom:5%;
font-size:50px;
`


const Karousel = () => {
  

  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },

  ]
    return (
       <Container>
         <Ritle style={{fontSize:"16px", padding:"5px"}}>MORE THAN 10 000+ HAPPY CUSTOMERS</Ritle>
         <Ritle style={{paddingTop:"15px"}}><b>Loved by thousands</b></Ritle>
      <Carousel  /*enableAutoPlay autoPlaySpeed={6000}*/  breakPoints={breakPoints}>
        {sliderItems.map(item => 
        <div key={item.id}>
          <Frapper>
          
         
           <Title>{item.title}</Title> 
          <Wrapper>
           {item.desc}
           <Desc> 
                <p style={{color:"black"}}>Review Score:    </p>
                <Star style={{fontSize:"20px"}}/>
                <Star  style={{fontSize:"20px"}}/>
                <Star  style={{fontSize:"20px"}}/>
                <Star  style={{fontSize:"20px"}}/>
                <Star  style={{fontSize:"20px"}}/>
           </Desc>
          </Wrapper>
          </Frapper>
          </div>)}
      </Carousel>
      </Container>
    )
  
}


export default Karousel;

