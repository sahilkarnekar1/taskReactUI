
import '../src/components/Style1.css';
import ContentCards from './components/ContentCards';
import Library from './components/Library';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
     <Sidebar/>
     <div class="topdivcont">
<Navbar/>
<Library/>
<ContentCards/>

     </div>
    </div>
  );
}

export default App;
