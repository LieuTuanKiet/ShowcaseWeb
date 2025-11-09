import { useState } from "react";
import ICON from "../assets/ICON-Logo.png";
import axios from "axios";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import {Toaster, toast} from "sonner";

export default function Header({sId,setSId}){

    const [name,setName] = useState(JSON.parse(localStorage.getItem("name"))??"");
    const [token,setToken] = useState(JSON.parse(localStorage.getItem("jwtToken"))??"");
    const [avatar,setAvatar] = useState(JSON.parse(localStorage.getItem("avatar"))??"");
    const [displayLogout,setDisplayLogout] = useState(false);
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

    const handleLogout = () => {
        googleLogout();
        console.log("logout success!")
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("name");
        localStorage.removeItem("avatar");
        localStorage.removeItem("studentId");
        setTimeout(function () {
            window.location.reload();
        }, 100);
    }

    const displayLogoutBtn = () => {
        setDisplayLogout(!displayLogout);
    }

    return(
        <div className="w-full backdrop-blur-md bg-white/90 sticky top-0 z-50 shadow-sm shadow-accent-light/20">
            <div className="container mx-auto lg:max-w-[95%] flex gap-x-2 justify-between items-center">
                <div className="max-h-12 flex gap-x-2 items-center">
                    <div className="max-w-12 max-h-12">
                        <img src={ICON} alt="Icon-Logo" />
                    </div>
                    <p className="w-fit font-bold text-lg text-accent-light">ICON CLUB</p>
                </div>
                { token?
                    <div onClick={displayLogoutBtn} className="text-secondary-color cursor-pointer flex items-center gap-x-2 max-w-screen">
                        <div className="font-semibold w-fit text-center">{name}</div>
                        <div className="max-w-10 max-h-10 group flex flex-col items-center gap-y-2">
                            <img src={avatar} alt="avatar" className="rounded-4xl"/>
                            <div className={`${displayLogout?"block":"hidden"} bg-white! border border-gray-300 lg:px-4 lg:py-2 mr-24 rounded-sm`}>
                                <button className={`cursor-pointer hover:bg-gray-300! active:bg-gray-100 text-secondary-color font-semibold w-32 py-1 rounded-sm`} onClick={() => handleLogout()}> Đăng Xuất</button>
                            </div>
                        </div>
                    </div>
                :
                    <div>
                        <GoogleLogin 
                            onSuccess={async(credentialResponse) => {
                                try{
                                    const res = await axios.post("http://localhost:5001/api/signIn",{token:credentialResponse.credential});
                                    const data = res.data.data;
                                    reload(data.name,data.token,data.picture,data.studentId);
                                } catch(error){
                                    toast.error("Hãy dùng tài khoản sinh viên để đăng nhập!");
                                }
                            }}
                            use_fedcm_for_prompt = {true}
                            text = "signin"
                            type="icon"
                            className="font-medium cursor-pointer bg-accent-light! text-dominant-color rounded-2xl hover:bg-accent-light/85! active:bg-accent-light!"
                        >
                        </GoogleLogin>
                    </div>
                }
            </div>
        </div>
    )
}