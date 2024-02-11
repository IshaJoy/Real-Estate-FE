
import {Navigate,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from  './components/Header'


////////////
import Auth from './pages/Auth'
import Listing from './pages/Listing';
import Search from './pages/Search';
import CreateListing from './pages/CreateListing';


function App() {
  return (
    <>

<Header/>

    <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/createlisting' element={<CreateListing />} />

        <Route path='/*' element = {<Navigate to={'/'}/>}></Route>
        

       

<Route path='/sign-in' element = {<Auth/>}></Route>
<Route path='/sign-up' element = {<Auth insideRegister/>}></Route>


    </Routes>
    </>
  )
}

export default App
