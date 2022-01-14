import {useState, useEffect} from 'react'
import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import Sologan from './components/Sologan/Sologan';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if(windowSize.width < 500) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowSize])



  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b font-sora md:px-20 dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 dark:text-white text-black">
      <NavBar isMobile = {isMobile}/>
      <Sologan />
      <Content />
    </div>
  );
}

export default App;
