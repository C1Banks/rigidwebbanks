import {motion} from 'framer-motion';
import './App.css';
import {PopAnimate, ProjectTwoPopAnimate} from './animations';
import {SlideAnimate} from './animations';
import {ProjectOnePopAnimate} from './animations';
import PngItem from './images/PngItem.png';
import dottedBackGround from './images/dottedBackGround.png';









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
          
          <h1 style ={{fontFamily : "Gill Sans", fontSize: "4em", backgroundColor: "transparent"}}> 
            HI I'm Curtis
            <span style={{color: 'salmon'}}>.
            </span>
          </h1>
          
        </SlideAnimate>
        <PopAnimate >
          <div >Skills</div>
        </PopAnimate>
      
      <ProjectOnePopAnimate>
        <div >
          Project #1
        </div>  
      </ProjectOnePopAnimate>
      
        <div className = "projectOneDescript"align = "left">
          ProjectOneDescription
        </div>
      
      <ProjectTwoPopAnimate>
        <div>Project #2</div>
      </ProjectTwoPopAnimate>
      
        <div className="projectTwoDescript"align = "right">
          ProjectTwoDescription
        </div>

        <div className='contactInfoBox'>
        <img src = {dottedBackGround} alt = '' ></img>
          <div id='contactButton' style ={{fontFamily : "Gill Sans", fontSize: "2em"}}>Contact</div> 
          <div id='contactCard'>
            <h1 style = {{background:"#FAF9F6" ,fontFamily: "Gill Sans", fontSize: "2em", color:"#282c34"}}>
              <span id ="makeItOrange">C</span>urtis  
              <span id='makeItOrange'> B</span>anks</h1>
            <img style={{background:"#FAF9F6"}} src={PngItem} alt = "_" width="200" height="10em"></img>
            <h2 id='offWhiteBack'>Seattle, WA</h2>
            <h2 id='offWhiteBack'>Email: Bankscur@gmail.com</h2>
            <h2 id='offWhiteBack'>Phone: (602) 698-2978</h2>

          </div>
        </div>

    
    

    </div>
  );
}

export default App;
