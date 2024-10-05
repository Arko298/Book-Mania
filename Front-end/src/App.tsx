

import { Layout } from "lucide-react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/home"


function App() {
  

  return (
    
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/book/:id" element={<BookPage />} /> */}
      </Routes>
    </Layout>
    
  )
}

export default App
