import {motion} from 'framer-motion';
import './App.css';
import {PopAnimate} from './animations';
import {SlideAnimate} from './animations';

function App() {
  return (
    
        
        <div className="App">
        
        <div className ="header" >React App
          <motion.div className='socialContainer'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
             }}
            >
            <div id = "socialElement">GH</div>
            <div id='socialElement'>LN</div>
          </motion.div>
          <motion.div className = "resumeButton"
            initial={{ y:400 }}
            animate= {{y:0}}
            transition = {{duration: 1.2}}
          > My resume</motion.div>
        </div>
        
        <SlideAnimate>
          <h1 style ={{fontFamily : "Gill Sans", fontSize: "4em"}}> 
            HI I'm Curtis
            <span style={{color: 'salmon'}}>.
            </span>
          </h1>
        </SlideAnimate>
        <PopAnimate>
          <div >Skills</div>
        </PopAnimate>
      

      <div className = "projectOneContainer">Project #1</div>
        <div className = "projectOneDescript"align = "left">ProjectOneDescription</div>
      
      <div className = "projectTwoContainer">Project #2</div>
        <div className="projectTwoDescript"align = "right">ProjectTwoDescription</div>

    
    

    </div>
  );
}

export default App;
