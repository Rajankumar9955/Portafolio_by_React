import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Cards from "./components/Cards"
import Skills from "./components/Skills"

const App=()=> {
 

  return (
    <>
   
       <BrowserRouter>
               
              <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="cards" element={<Cards/>}/>
                <Route path="Skills" element={<Skills/>}/>
                </Route>
              </Routes>
       </BrowserRouter>
          
    </>
  )
}

export default App
