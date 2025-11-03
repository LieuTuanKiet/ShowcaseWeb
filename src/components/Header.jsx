import { useState } from "react";
import ICON from "../assets/ICON-Logo.png";
export default function Header(){
    const [active,setActive] = useState("introduce");
    return(
        <div className="w-screen sm:w-full backdrop-blur-md bg-white/80 sticky top-0 z-50">
            <div className="w-[95%] mx-auto flex gap-x-2 justify-between items-center">
                <div className="max-h-12 flex gap-x-2 items-center">
                    <div className="max-w-12 max-h-12">
                        <img src={ICON} alt="Icon-Logo" />
                    </div>
                    <p className="w-2xl font-bold text-lg text-secondary-color">ICON CLUB</p>
                </div>
                <button className="text-right font-medium cursor-pointer bg-accent-color! text-dominant-color py-1 px-4 rounded-2xl">
                    Sign In
                </button>
                {/*<div className="flex justify-center items-center gap-x-4 w-full">
                    <a href="#" 
                        className={`${active==="introduce"?"bg-gray-300/30 text-primary-color!":"bg-gray-100/20 text-secondary-color/50!"} p-2 w-full text-center max-w-[90px] max-h-12 rounded-lg hover:text-primary-color/70! hover:bg-gray-200/50 duration-200`} 
                        onClick={() => setActive("introduce")}>
                            20/11
                    </a>
                    <a href="#" 
                        className={`${active==="gallery"?"bg-gray-300/30 text-primary-color!":"bg-gray-100/20 text-secondary-color/50!"} p-2 w-full text-center max-w-[90px] max-h-12 rounded-lg hover:text-primary-color/70! hover:bg-gray-200/50 duration-200`} 
                        onClick={() => setActive("gallery")}>
                            Trưng bày
                    </a>
                    <a href="#" 
                        className={`${active==="contact"?"bg-gray-300/30 text-primary-color!":"bg-gray-100/20 text-secondary-color/50!"} p-2 w-full text-center max-w-[90px] max-h-12 rounded-lg hover:text-primary-color/70! hover:bg-gray-200/50 duration-200`} 
                        onClick={() => setActive("contact")}>
                            Liên hệ
                    </a>
                </div>*/}
            </div>
        </div>
    )
}