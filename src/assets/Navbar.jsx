import { FaBars } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import {useState} from 'react';

const Navbar = () => {
    
    const [Nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!Nav)
    }
      
    return (
    <div className="items-center w-full bg-white rounded-t-2xl">
        <div className="flex items-center justify-between h-16 max-w-[1240px] mx-auto px-4 bg-black rounded-t-2xl">
            <h1 className='text-[#278888] text-bold text-2xl font-extrabold'>Adekun<span className="text-white">le Ader</span>ohunbi</h1>
            <ul className="hidden p-1 mx-2 text-white cursor-pointer md:flex">
                <li className="p-4 mx-2 font-bold btn-border">Home</li>
                <li className="p-4 font-bold btn-border">Services</li>
                <li className="p-4 font-bold btn-border">Projects</li>
                <li className="p-4 font-bold btn-border">About</li>
                <li className="p-4 font-bold border-2 bg-[#278888] text-white rounded-full nav-btn items-center hover:border-2-[#278888]">Ask me Anything</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!Nav ? <RiCloseLargeFill className="text-2xl text-[#ffffff] cursor-pointer size-8" /> : <FaBars className="text-2xl text-[#ffffff] cursor-pointer size-8" />}
                
            </div>
            <div className={
                !Nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-white justify-start ease-in-out duration-500" : "fixed left-[-100%]"
            }>
                <h1 className='w-full text-[#002626] text-bold text-2xl font-extrabold pl-7 bg-white'>Adekun<span className="text-[#05161a]">le Ader</span>ohunbi</h1>
                <ul className="h-screen p-4 text-white uppercase bg-black cursor-pointer">
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

