import React from "react";
import {motion} from 'framer-motion';

function ResumeButton ({onClick}){
    const openResume = () => {
        // Open the PDF in a new window or use any other method
        window.open('../CurtisBanksResume.pdf', '_blank');
      };


return (
    <motion.div
      className="resumeButton"
      initial={{ y: 400 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2 }}
      onClick={openResume}
    >
      <a href="../CurtisBanksResume.pdf" download style={{ textDecoration: 'none', fontFamily: 'Gill Sans', fontSize: '1.5em', background: 'transparent' }}>My Resume</a>
    </motion.div>
  );
}

export default ResumeButton;






