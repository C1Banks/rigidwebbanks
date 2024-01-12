import {motion} from "framer-motion"
import React from "react"
import "../App.css"
//import dottedBackGround from './images/dottedBackGround.png';



function PopAnimate ({children}) {
    return(
        <motion.div className = "skillsContainer"
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
        
        )}

function SlideAnimate ({children}){
    return(
        <div className='introBox'>
          
          <motion.div className="introBoxContent"
                initial={{ y:400 }}
                animate= {{y:0}}
                //whileInView={{ }}
                transition = {{duration: 1.2}}
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





export {PopAnimate};   
export {SlideAnimate};
export {ProjectOnePopAnimate};
export {ProjectTwoPopAnimate};