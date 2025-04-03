import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './layout/Header'
import Footer from './layout/Footer'
import User from './pages/User'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/user/:userId' element={<User/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
