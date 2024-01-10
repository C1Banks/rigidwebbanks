//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <div className ="header" >React App
          <div className='socialContainer'>
              <div id = "socialElement">GH</div>
              <div id='socialElement'>LN</div>
          </div>
          <div className = "resumeButton"> My resume</div>
        </div>

        <div className='introBox'>
          <div className='introBoxContent'><h1 style ={{fontFamily : "Gill Sans", fontSize: "4em"}}>HI I'm Curtis<span style={{color: 'salmon'}}>.</span></h1>

          </div>
        </div>
        <div className = "skillsContainer">Skills</div>
      

      <div className = "projectOneContainer">Project #1</div>
        <div className = "projectOneDescript"align = "left">ProjectOneDescription</div>
      
      <div className = "projectTwoContainer">Project #2</div>
        <div className="projectTwoDescript"align = "right">ProjectTwoDescription</div>
    </div>
  );
}

export default App;
