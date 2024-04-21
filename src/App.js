import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/components/Style1.css';
import ContentCards from './components/ContentCards';
import Library from './components/Library';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Test from "./components/Test";
import Final from "./components/Final";

function App() {
  return (
    <div className="App">
     <Sidebar/>
     <div class="topdivcont">
<Navbar/>


<Routes>



        
          <Route path="/" element={<Final/>} />
          
          <Route path="/test" element={<Test/>} />
          
        </Routes>
      
     </div>
    </div>
  );
}

export default App;
