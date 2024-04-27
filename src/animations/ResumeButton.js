import React from "react";
//import { motion } from 'framer-motion';
//import {Document, PDFViewer} from "@react-pdf/renderer";
import { ContactButton } from "./index";
import {useState} from "react";
import pdfFile from '../CurtisBanksResume_.pdf'
import {Document, Page} from 'react-pdf';



const DropDownResume = () => {
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(null);


  const handleClick = () =>{
          console.log('click');
          setShowCard(!showCard);
    }

  console.log('showCard:', showCard);
  
  
    return(
      <>
      
      <ContactButton onClick = {handleClick}>
          <div style={{backgroundColor: "transparent"}} >Resume</div> 
      </ContactButton>
  
    {showCard && (
      <PDFViewer width={'100%'}height={'100%'}>
                  {error ? (
            <div>Error loading PDF file. Please try again later.</div>
          ) : (
            <Document file={pdfFile} onError={setError} />
          )}
      </PDFViewer>
      )}
      
      
  </>
    
    )}


/*function ResumeButton() {
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the path of the PDF file
    link.href = '/CurtisBanksResume_.pdf';
    // Set the download attribute to prompt the browser to download the file
    link.download = 'CurtisBanksResume_.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event on the link to start the download
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="resumeButton"
      initial={{ y: 400 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2 }}
      onClick={downloadResume}
    >
      My Resume
    </motion.div>
  );
}
*/
export default DropDownResume;








