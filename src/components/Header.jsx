import { useState } from "react";
import ICON from "../assets/ICON-Logo.png";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
export default function Header(){

    const [name,setName] = useState(JSON.parse(localStorage.getItem("name"))??"");
    const [token,setToken] = useState(JSON.parse(localStorage.getItem("jwtToken"))??"");
    const [avatar,setAvatar] = useState(JSON.parse(localStorage.getItem("avatar"))??"");
    const [sId,setSId] = useState(JSON.parse(localStorage.getItem("studentId"))??"");
    const reload = (nm,token,avt,sId) => {
        setName(nm);
        setToken(token);
        setAvatar(avt);
        setSId(sId);
        localStorage.setItem("name",JSON.stringify(nm));
        localStorage.setItem("jwtToken", JSON.stringify(token));
        localStorage.setItem("avatar",JSON.stringify(avt));
        localStorage.setItem("studentId",JSON.stringify(sId));
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
                    <div className="text-secondary-color flex items-center gap-x-2">
                        <div className="font-semibold">{name}</div>
                        <div className="max-w-10 max-h-10">
                            <img src={avatar} alt="avatar" className="rounded-4xl"/>
                        </div>
                    </div>
                :
                    <GoogleLogin 
                        onSuccess={async(credentialResponse) => {
                            console.log(credentialResponse);
                            const res = await axios.post("http://localhost:5001/api/signIn",{token:credentialResponse.credential});
                            const data = res.data.data;
                            reload(data.name,data.token,data.picture,data.studentId);
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