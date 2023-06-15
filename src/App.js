import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForms from './Components/TextForms';


function App() {
  return (
    <>
   
    <Navbar title = "Abdul"/>
    <div className="container my-3"> 
          {/* <TextForms heading = "Enter the text to analyse"/>  */}
          <About/>
    </div>
   
    </>
  );
}

export default App;
