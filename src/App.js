import {motion} from 'framer-motion';
import './App.css';
import {SkillsSlideAnimate, ProjectTwoPopAnimate, ProjectOnePopAnimate} from './animations';
import {SlideAnimate} from './animations';
import  DropDownContact from './animations/dropDownContact.js';
//import {ContactButton} from './animations';
import dottedBackGround from './images/dottedBackGround.png';
import GitHub from './images/GitHub.png';
import linkedin from './images/linkedin.png';
import pythoncode from './images/pythoncode.jpg';
import openai from './images/openai.png';









function App() {
  return (
    
        
        <div className="App">
        
        <div className ="header" >
          <motion.div className='socialContainer'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
             }}
            >
            <a href = {'https://github.com/C1Banks'}id = "socialElement">
              <img style = {{height:'3em', width:'3em'}}src={GitHub} alt = 'GH'>
              </img>
            </a>

            <a id='socialElement'href={'https://www.linkedin.com/in/curtis-banks-aab900194/'}>
              <img style = {{height:'3em', width:'3em'}}src= {linkedin} alt= 'LN'>
              </img>
            </a>
          </motion.div>
          <motion.div className = "resumeButton"
            initial={{ y:400 }}
            animate= {{y:0}}
            transition = {{duration: 1.2}}
            
          > <span style={{fontFamily: 'Gill Sans', fontSize:'1.5em', background:'transparent'}}>My Resume</span></motion.div>
        </div>
        
        <SlideAnimate>
          
          <h1 style ={{fontFamily : "Gill Sans", fontSize: "4em", backgroundColor: "transparent"}}> 
            HI I'm Curtis
            <span style={{color: 'salmon'}}>.
            </span>
            </h1>
            <p style={{fontFamily: 'gill sans', fontSize: "2em"}}>A specialized QA Engineer with the entangables of a Full-stack developer.<br/> 
            I have a sound skillset in web development, with a strong interest in backend/ <br/>
            Automation work. Currently looking to grow my skills in data automation.<br/> 
            I look forward to connecting!  
            </p>

          
          
        </SlideAnimate>
        <SkillsSlideAnimate >
          <div >
          <h2 style={{color:'salmon'}}> Tech Skills:</h2>AWS, Node, ReactJS, Python, Testing Automation
          <h2 style={{color:'salmon'}}>Soft Skills:</h2> Team Player, Effective Communication, Creative Thinking,  
          </div>
        </SkillsSlideAnimate>
      
      <ProjectOnePopAnimate>
        <img style= {{width : '50em', height: '28em'}}src={pythoncode} alt='' >
          
        </img>  
      </ProjectOnePopAnimate>
      
        <div className = "projectOneDescript"align = "left" style={{fontFamily: 'Gill Sans'}}>
          ProjectOneDescription
        </div>
      
      <ProjectTwoPopAnimate>
      <img style= {{width : '50em', height: '28em'}}src={openai} alt='' >
          
          </img> 
      </ProjectTwoPopAnimate>
      
        <div className="projectTwoDescript"align = "right" style={{fontFamily: 'Gill Sans'}}>
          ProjectTwoDescription
        </div>

            
        <div className = "contactInfoBox">
        <img src = {dottedBackGround} alt = '' ></img>

        <DropDownContact/>
 
        


        </div>

    
    

    </div>
  );
}

export default App;
