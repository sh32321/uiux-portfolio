import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Components/Home"
import Recipe from "./Components/work/Recipe"
import Moviescape from "./Components/work/Moviescape"
import Accio from "./Components/work/Accio"
import Chatwis from "./Components/work/Chatwis"
import Jose from "./Components/work/Jose"
import OA from "./Components/work/OA"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            Home
          </Route>
          <Route path='/work/recipe' element={<Recipe />} />
          <Route path='/work/moviescape' element={<Moviescape />} />
          <Route path='/work/accio' element={<Accio />} />
          <Route path='/work/chatwis' element={<Chatwis />} />
          <Route path='/work/jose' element={<Jose />} />
          <Route path='/work/ousar-academy' element={<OA />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
