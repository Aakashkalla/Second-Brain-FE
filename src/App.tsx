import DashBoard from './pages/DashBoard'
import { Signup } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
   
  return (
    <> 
      <BrowserRouter>
      <Routes>
        <Route path='/signup' Component={Signup}></Route>
        <Route path='/signin' Component={SignIn}></Route>
        <Route path='/dashboard' Component={DashBoard}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
