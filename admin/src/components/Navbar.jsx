import { Link } from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <Link to='/'><h1 className='w-28 text-3xl'>Exploreourstore</h1></Link>
      <button onClick={()=>setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar
