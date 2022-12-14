import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
    </div>
  );
}

export default App;
