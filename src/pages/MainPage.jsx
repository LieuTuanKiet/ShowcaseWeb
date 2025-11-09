import { useEffect, useState } from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-up";

export default function MainPage(){
    const [sId,setSId] = useState(JSON.parse(localStorage.getItem("studentId"))??"");
    useEffect(() => {
        AOS.init();
    },[])
    return(
        <>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-out" data-aos-mirror="true" data-aos-once="false" className="font-roboto">
                <Header sId={sId} setSId={setSId}/>
                <Showcase sId={sId}/>
                <Footer/>
            </div>
            <ScrollToTop showUnder={50}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:right-1/2 lg:translate-x-1/2 lucide lucide-arrow-up-icon lucide-arrow-up w-[10vw] h-[5vh] lg:w-[2vw] lg:h-[4vh] rounded-[50px] text-white bg-accent-light animate-bounce duration-200"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
            </ScrollToTop>
        </>
    )
}