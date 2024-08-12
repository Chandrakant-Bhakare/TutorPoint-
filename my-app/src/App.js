import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Teachers from './components/Teachers';
import Students from './components/Students';
import {SignUp} from './components/SignUp';
import SignIn from './components/SignIn';
import StudentHome from './components/StudentHome'
import StudentNavbar from './components/StudentNavbar';
import StudentProfile from './components/StudentProfile';
import BookClass from './components/BookClass';
import Booking from './components/Booking';
import {ContactDetails} from './components/Contactus';
import { AboutUs } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/bookings' element={<Booking/>}></Route>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/teachers' element={<Teachers/>}></Route>
     <Route path='/students' element={<Students/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/signin' element={<SignIn/>}></Route>
     <Route path='/about' element={<AboutUs></AboutUs>}></Route>
     <Route path='/contact' element={<ContactDetails/>}></Route>
     <Route path='/studentnavbar' element={<StudentNavbar/>}></Route>
     <Route path='/studenthome' element={<StudentHome/>}></Route>
     <Route path='/studentprofile' element={<StudentProfile/>}></Route>
     <Route path='/students/bookclass' element={<BookClass/>}></Route>
         </Routes>
     </BrowserRouter>
  );
}

export default App;
