import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Content from "./Content";

const App = () => {
  return (
    <div>
      <Navbar />
      <br /><br /><br /><br />
      <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>This is a demo webpage for Practicing Open Source 😉</h2>
      <br /><br />
      <Content />
      <hr />
      <Footer />
    </div>
  )
}

export default App
