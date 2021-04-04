
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import imageInPublic from "./imageInPublic.jpg"
import myVideo from "./myVideo.mp4"
const  App =() =>{
  return (
    <div className="div">
     <h1 className="title red">THE HERBALISER - "THE LOST BOY"</h1>
     <img src={imageInSrc} width="780" height="400" alt="imageInSrc"/>
     <img src={imageInPublic} width="780" height="400" alt="imageInPublic"/>

     <video src={myVideo} width="320" height="240" controls>
     </video>


        
         
     
    </div>
  );
}

export default App;
