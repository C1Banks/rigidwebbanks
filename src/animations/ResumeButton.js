import React from "react";
import { motion } from 'framer-motion';

function ResumeButton() {
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

export default ResumeButton;







