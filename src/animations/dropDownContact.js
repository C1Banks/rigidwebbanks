import React, {useState} from "react";
import { ContactCard, ContactButton } from "./index";
import PngItem from '../images/PngItem.png';




const DropDownContact = () => {
    const [showCard, setShowCard] = useState(false);


    const handleClick = () =>{
            console.log('click');
            setShowCard(!showCard);
      }

    console.log('showCard:', showCard);
    
    
      return(
        <>
        
        <ContactButton onClick = {handleClick}>
            <div style={{backgroundColor: "transparent"}} >Connect</div> 
        </ContactButton>
    
      {showCard && (
        <ContactCard>
          <h1 style = {{background:"#FAF9F6" ,fontFamily: "Gill Sans", fontSize: "2em", color:"#282c34"}}>
          <span id ="makeItOrange">C</span>urtis  
          <span id='makeItOrange'> B</span>anks</h1>
        <img style={{background:"#FAF9F6"}} src={PngItem} alt = "_" width="200" height="10em"></img>
        <h2 id='offWhiteBack'>Seattle, WA</h2>
        <h2 id='offWhiteBack'>Email: Bankscur@gmail.com</h2>
        <h2 id='offWhiteBack'>Phone: (602) 698-2978</h2>
      </ContactCard>
        )}
        
        
    </>
      
      )}







export default DropDownContact;