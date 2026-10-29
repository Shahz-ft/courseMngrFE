
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddCourse from './pages/AddCourse'
import Home from './pages/Home'
import AllCourses from './pages/AllCourses'
import Header from './components/Header'
import Footer from './components/Footer'
import { Bounce, ToastContainer } from 'react-toastify'
import PNF from "./pages/PNF";

function App() {
 

  return (
    <>
    <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-course' element={<AddCourse />} />
      <Route path='/all-courses' element={<AllCourses />} />
      <Route path="*" element={<PNF />} />
     </Routes>
     <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}

export default App
