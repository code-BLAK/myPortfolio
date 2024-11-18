import { FaBars } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import {useState} from 'react';


const Navbar = () => {
    
    const [Nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!Nav)
    }
    
    
  return (
    <div className="bg-[#fbfbfb] items-center w-full">
        <div className="flex items-center justify-between h-16 max-w-[1240px] mx-auto px-4">
            <h1 className='text-[#002626] text-bold text-2xl font-extrabold'>myPortfolio.dev</h1>
            <ul className="p-2 hidden md:flex cursor-pointer">
                <li className="p-4 font-bold">About</li>
                <li className="p-4 font-bold">Contact</li>
                <li className="p-4 font-bold">Projects</li>
                <li className="p-4 font-bold nav-btn">My Github</li>
                <li className="p-4 font-bold border-2 bg-[#002626] text-white rounded-full nav-btn items-center">My Resume</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!Nav ? <RiCloseLargeFill className="text-2xl text-[#002626] cursor-pointer size-8" /> : <FaBars className="text-2xl text-[#002626] cursor-pointer size-8" />}
                
            </div>
            <div className={
                !Nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-green-950 justify-start ease-in-out duration-500" : "fixed left-[-100%]"
            }>
                <h1 className='w-full text-[#002626] text-bold text-2xl font-extrabold '>myPortfolio.dev</h1>
                <ul className="p-4 uppercase cursor-pointer bg-white">
                    <li className="p-4 border-b">About</li>
                    <li className="p-4 border-b">Contact</li>
                    <li className="p-4 border-b">Projects</li>
                    <li className="p-4 border-b">My Github</li>
                    <li className="p-4">My Resume</li>
                </ul>
            </div>   
        </div>
    </div>
  )
}

export default Navbar
