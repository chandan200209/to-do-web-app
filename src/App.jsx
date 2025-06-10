import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import ToDo from './components/ToDo';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#F5EEDD] min-h-screen flex flex-col items-center justify-center'>
      <div className='w-full'>
        <Navbar />
        <ToDo />
        <Footer />
      </div>
    </div>
  )
}

export default App;
