import ICON from "../assets/ICON-Logo.png";
export default function Footer(){
    return(
        <div className="bg-white/80 py-1 max-h-5 border-t border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="max-w-12 max-h-12">
                    <img src={ICON} alt="ICON Logo Image" />
                </div>
                <div className="text-gray-500/80">
                    © 2025 ICON. All rights reserved.
                </div>
            </div>
        </div>
    )
}