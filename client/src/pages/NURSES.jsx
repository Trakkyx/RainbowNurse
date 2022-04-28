import React from 'react';
import Annoncement from '../Component/Annoncement';
import Categories from '../Component/Categories';
import Navabar from '../Component/Navabar';
import Slider from '../Component/Slider';
import Products from "../Component/Products"
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import Upsale from '../Component/Upsale';
import styled from "styled-components"
import NHSDOLLS from '../Component/NHSDOLLS';
import NURSEVIDEOS from '../Component/NURSEVIDEOS';


const Info = styled.div`
text-align:center;
padding:20%;
padding-top:50px;
padding-bottom:50px;
font-size:18px;
`



const Image = styled.img`


display:flex;
align-items:center;
justify-content:center;
margin:5%;
text-align:center;
width:500px;
display: block;
margin-left: auto;
margin-right: auto;



`
const Title= styled.h1`
text-align:center;
padding-top:3%;
color:darkblue;
`


const Container = styled.div`


`







const NURSES = () => {
  return(
  <div>
  <Annoncement/>
  <Navabar/>
   <Container>
     
     <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/a368f881e3b5e0b62d95192422f6c7d1-541x194x0x0x541x194x1648212911.png"/>
     <Title>What is NHS Charities Together</Title>
     <Info>Rainbow Nurses (TM) who support the incredible NHS Charities Together helps take pressure off an overstretched NHS, helping the NHS go further for everyone.<br/> They support incredible NHS staff and emergency volunteers so that they can continue with their vital life-saving work. They also fund projects that prevent ill health and improve services for patients.<br/> Their national reach through a network of NHS charities covering the UK means that they can ensure funds go quickly where they are needed most.

As a membership organisation they also lead nationwide fundraising and advocacy campaigns, specialist advice and guidance, conferences and training or NHS charities – because they know that together we can help the NHS be the best it can be.<br/>

They believe the collective mission is more important than ever as the NHS faces the most challenging time in its history.<br/> They have been overwhelmed by the heartfelt support from across the nation to get behind the NHS during this critical time.<br/>

A big thank you to you the amazing supporters – your help is making a huge difference to NHS staff, volunteers and patients, and is more important than ever.<br/></Info>
<Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/4-562x562x0x25x562x511x1647866928.jpg"/>
<Title>What Do NHS Charities Together Do?</Title>
     <Info>People have been donating money to health services since well before the NHS was created. The 230+ member charities of NHS Charities Together are based in hospital, ambulance trusts, mental health trusts, community health trusts and health boards across the UK and they give over £1 million every day to the NHS so that people can stay well for longer and get better faster.<br/>

Most of them focus on helping our health services to do more. From supporting research and development, to brightening up hospital environments, to donating state-of-the-art technologies and equipment, the charities raise funds and mobilise volunteers, touching lives and making a huge difference to millions of people when they are at their most vulnerable.<br/>

During the Covid-19 pandemic this focus has shifted to supporting immediate practical and emotional needs of staff and patients and helping to take pressure off an overstretched health service.<br/> The aim of NHS Charities Together and the wider NHS charity network is to provide extra care and support for NHS staff and patients, enabling health services to do more, beyond the core services that would ordinarily be funded by government. This helps improve the wellbeing of patients and saves lives.<br/> With current relentless pressures on the NHS the extra support provided by NHS charities is more important than ever.</Info>
   </Container>
   <NHSDOLLS/>
  <Footer/>
  </div>
  );
};
export default NURSES;
