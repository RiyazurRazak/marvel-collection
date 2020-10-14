import React from 'react';


// components

import HeroSection from '../components/HeroSection'
import Row from '../components/Row'
import Footer from '../components/Footer';



function Main() {

  return (
    <div >
     
     <HeroSection />

     <Row
     title={"Events"}
     fetchType={"events"}
     isposter/>
 


     <Row 
     title={"Charecters"}
     fetchType={"characters"}
     
     />

     <Row 
     title={"Comics"}
     fetchType={"comics"} 
     isposter/>

    
     <Row
     title={"Series"}
     fetchType={"series"}
     isposter/>


     <Footer />
    

    </div>
  );
}

export default Main;



