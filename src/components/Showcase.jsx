import { useEffect, useState } from "react"
import Favorite from "./Favorite";
import axios from "axios";

export default function Showcase(){
    const [cards,setCards] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await axios.get("http://localhost:5001/");
                console.log(res);
            } catch(error){
                console.log("Lỗi xảy ra!", error);
            }
        };
        fetchData();
        }, [])
    return(
        <div>
            <div className="bg-white">
                <div className="text-center text-secondary-color font-semibold text-4xl">
                    20/11 Website Design Showcase
                </div>
                <div className="text-center mb-4 text-secondary-color font-light text-xl">
                    subtitle
                </div>
                <div className="grid grid-cols-3 w-11/12 gap-x-4 gap-y-8 mx-auto h-fit transition">
                    {cards.map(card => (
                        <div key={card.id} className="mx-auto max-w-[95%] flex flex-col group">
                            <img src={card.img} alt="pic" className="w-screen h-screen max-h-[300px] rounded-2xl group-hover:border-4 group-hover:border-accent-light"/>
                            <div className="flex justify-between h-fit">
                                <p className="text-secondary-color">{card.name}</p>
                                <Favorite favNum={card.fav} favStatus={false}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}