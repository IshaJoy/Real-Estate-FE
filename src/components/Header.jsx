
import { Link, Navigate } from 'react-router-dom';
import SignUp from '../pages/SignUp';



export default function Header() {
  
  return (
    <header className='bg-teal-950 shadow-md'>
      {/* bg-gray-600 */}
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          
            <span className='text-slate-100 text-3xl'>Find</span>
            <span className='text-slate-400 text-2xl my-1'>.com</span>
          </h1>
        </Link>
        <form
          
          className='bg-slate-100 p-2 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search here...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            
           
          />
          {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
          
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-light hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-light hover:underline'>
              About
            </li>
          </Link>
          <Link to='/sign-in'>
           
             
            
              <li className=' text-light font-bold   hover:underline'> Sign In</li>
        
          </Link>
        </ul>
      </div>
    </header>
  );
}