import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
//new
import { AuthContextProvider } from "./context/AuthContext"
import SignIn from "./components/MainPage/SignIn"

function App() {

  const { productItems } = Data
  const { postItems } = Data
  const { shopItems } = Sdata

  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact element={<Pages productItems={productItems} shopItems={shopItems} postItems={postItems} />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
          <Footer />
        </Router>

      </AuthContextProvider>
    </>
  )
}

export default App
