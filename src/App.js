
import './App.css';
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import Post from './components/Post.jsx'
import News from './components/News.jsx'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='bg-gray-200 min-h-screen  flex justify-center pt-8 pb-4 mt-16 '>
     <div className= '  min-h-screen  w-11/12 flex justify-around px-8'>
      
              <Profile/>
              <Post/>
              <News/>
     </div>
     </div>
    </div>
  );
}

export default App;
