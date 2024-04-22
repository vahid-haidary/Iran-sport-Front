import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./layouts/Footer"
import Header from "./layouts/Header"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import Showing from "./components/ShowingLayout"

function App() {

  return (
    <>
    <BrowserRouter>

    <Showing>
      <Header/>
    </Showing>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product/:id" element={<ProductDetailsPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>

    {/* <Showing>
      <Footer/>
    </Showing> */}

    </BrowserRouter>
    </>
  )
}

export default App
