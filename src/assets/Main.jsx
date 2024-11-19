import { ReactTyped } from "react-typed";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";


const Main = () => {
    console.log('Rendering Main component');
  return (
    <div className="max-w-[1240px] px-4 flex-col p-24 mx-auto bg-black border-t-4 border-t-[#2de1e1]">
        <div className="flex-row">
            <div className="mt-0 text-2xl font-bold text-white">
                <h1 className="text-[#edf0f1]">Proudly Nigerian : Building Globally Impactful codes</h1>
            </div>
            <div>
                <p className="text-2xl font-black text-white">I work as a 
                    <ReactTyped className="pl-1 text-4xl font-bold text-[#29acac]"
                    strings={['UI/UX Designer','Webflow Developer','Software Developer']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                </p>
            </div>
            <div className="flex gap-4 mt-12" >
                <button disabled="disabled" className="items-center p-4 text-xl font-bold text-white border-2 rounded-2xl nav-btn">Hire Me</button>
                <button disabled="disabled" className="flex items-center gap-2 p-4 font-bold text-white border-2 rounded-2xl nav-btn"><HiArrowDownTray />Download CV </button>  
            </div>
            <div className="flex items-center justify-around mx-auto mt-12 text-white">
                <FaLinkedin className="size-12" />
                <FaXTwitter className="size-12" />
                <FaGithub className="size-12" />
                <FaBehance  className="size-12"/>
            </div>            
        </div>
        
    </div>
    
    
    
    
    
  )
}

export default Main
