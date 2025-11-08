import { useState } from "react";
import ICON from "../assets/ICON-Logo.png";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
export default function Header(){

    const [name,setName] = useState(JSON.parse(localStorage.getItem("name"))??"");
    const [token,setToken] = useState(JSON.parse(localStorage.getItem("jwtToken"))??"");
    const reload = (nm,token) => {
        setName(nm);
        setToken(token);
        localStorage.setItem("name",JSON.stringify(nm));
        localStorage.setItem("jwtToken", JSON.stringify(token));
        setTimeout(function () {
            window.location.reload();
        }, 100);
    }

    return(
        <div className="backdrop-blur-md bg-white/80 sticky top-0 z-50">
            <div className="w-[95%] mx-auto flex gap-x-2 justify-between items-center">
                <div className="max-h-12 flex gap-x-2 items-center">
                    <div className="max-w-12 max-h-12">
                        <img src={ICON} alt="Icon-Logo" />
                    </div>
                    <p className="w-2xl font-bold text-lg text-accent-light">ICON CLUB</p>
                </div>
                { token?
                    <div className="text-secondary-color">{name}</div>
                :
                    <GoogleLogin 
                        onSuccess={async(codeResponse) => {
                            console.log(codeResponse);
                            const res = await axios.post("http://localhost:5001/api/signIn",{token:codeResponse.credential});
                            reload(res.data.data.name,res.data.data.token);
                        }}
                        use_fedcm_for_prompt = {true}
                        text = "signin"
                        type="icon"
                        className="text-right font-medium cursor-pointer bg-accent-light! text-dominant-color py-1 px-4 rounded-2xl hover:scale-105 hover:bg-accent-light/85! active:bg-accent-light!"
                    >
                    </GoogleLogin>
                }
            </div>
        </div>
    )
}