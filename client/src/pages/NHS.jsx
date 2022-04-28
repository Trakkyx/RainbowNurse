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





`
const Title= styled.h1`
text-align:center;
padding-top:3%;
color:darkblue;
`


const Container = styled.div`
display:block;
padding:15%;
padding-top:5%;

`

const Doll = styled.div`
display:flex;
padding:1%;
`

const Desc = styled.div`
font-size:30px;
padding:3%;
`

const DollEnd = styled.div`
margin-left:auto;
margin-right:auto;
display:block;
text-align:center;
align-items:center;
padding:4%;
padding-bottom:1%;
`



const NHS = () => {
  return(
  <div>
  <Annoncement/>
  <Navabar/>
  <NURSEVIDEOS/>
   <Container>
     <Doll>
       <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/5-545x545x0x11x545x523x1649073853.jpg"></Image>
       <Desc> 
Meet Hope:<br/><br/>

Hope is the second hatched with Big Blue eyes, long blonde hair and fair skin. Hope is a very creative child, and incredibly dreamy and full of optimism.
She is a little more naïve than her siblings but has much hope for the world and often calms her siblings down.
(Hope is full of love, caring, and dreams represented by the Blue Heart radiating from her head)
</Desc>
     </Doll>
     <Doll style={{flexDirection:"row-reverse"}}>
     <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/Nala-animation-1-updated-1-545x545x0x0x545x545x1649070226.jpg"></Image>
     <Desc>Meet Nala:<br/><br/>
 
 Nala was the first who hatched from the cocoon, with her ebony skin, long braided hair, and dark brown eyes, she’s a fierce leader with huge strength, resilience, and decisiveness.
 Nala is fiery and bright ,and represented by the Circle with Fire (Sun) on her head.
 (Nala is headstrong, a little stubborn, makes brave decisions, and will try things again)</Desc>
 </Doll>
     <Doll>
     <Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/Sammie-animation-design-updated-1-572x572x14x0x545x572x1649070239.jpg"></Image>
    
     <Desc>Meet Sammie:<br/><br/>
 
 Sammie is the youngest and a little bit reserved with short brown hair and deep green eyes. Sammie is the protector. They represent the Leaf Symbol shield and Sammie is full of empathy, a deep thinker, and can be reserved, but they are often the one that ultimately saves the day. Sammie is best referred to as they/them.</Desc>
     </Doll>
     <DollEnd>
     <Desc>The Rainbow Nurses are full of surprises and possess many different powers which will be revealed throughout their stories and journeys….

The three Rainbow Nurses are ‘STRONGEST TOGETHER’ and they know that always
‘Love will save the day’.</Desc>
<Image src="https://rainbownurses.com/wp-content/uploads/brizy/imgs/frame-32-866x487x111x0x644x487x1648632421.jpg"/>
</DollEnd>
 
   </Container>
   
  <Footer/>
  </div>
  );
};
export default NHS;
