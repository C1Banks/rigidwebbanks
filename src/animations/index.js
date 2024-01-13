import {motion} from "framer-motion"
import React from "react"
//import * as ReactDOM  from "react-dom"
import "../App.css"






function SkillsSlideAnimate ({children}) {
    return(
        <motion.div className = "skillsContainer"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 2.2}}
        
        variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: 100, opacity: 0 }
          }}
          >
            {children}
          </motion.div>
        
        )}

function SlideAnimate ({children}){
    return(
        <div className='introBox'>
          
          <motion.div className="introBoxContent"
                initial={{ y:400 }}
                animate= {{y:0}}
                //whileInView={{ }}
                //transition = {{duration: 1.2}}
                >
                    {children}

            </motion.div>
            
        </div>
    )
}

function ProjectOnePopAnimate ({children}){
    return(
        <motion.div className = "projectOneContainer"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 1.2}}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          >
            {children}
          </motion.div>
    )
}



function ProjectTwoPopAnimate ({children}){
    return(
        <motion.div className = "projectTwoContainer"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 1.2}}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          >
            {children}
          </motion.div>
    )
}



function ContactButton ({children, onClick}){
  return(
      <motion.button 
      id='contactButton'
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 1.2}}
      variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
        onClick={onClick}
        style= {{position: 'absolute', left:'51%', top:'90%',backgroundColor: "salmon", fontFamily : "Gill Sans",fontSize: "2em"}}
        >
          {children}
        </motion.button>
  )
}




function ContactCard ({children}){
  return(
      
      <motion.div 
      id='contactCard'
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 1.2}}
      variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
       >
          {children}
        </motion.div>
  )

  
}





export {SkillsSlideAnimate};   
export {SlideAnimate};
export {ProjectOnePopAnimate};
export {ProjectTwoPopAnimate};
export  {ContactButton};
export {ContactCard};
