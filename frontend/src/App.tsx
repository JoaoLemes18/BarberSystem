import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ResgisterPage from './pages/RegisterPage'


function App() {


  return (
    <BrowserRouter>
      <section className='app' style={{height: '100vh'}}>
        <Routes>
          <Route path='/register' element={<ResgisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </section>
    </BrowserRouter>
    
  )
}

export default App
