import { useEffect, useState } from "react"
import Favorite from "./Favorite";
import axios from "axios";

export default function Showcase({sId}){
    const [cards,setCards] = useState([]);
    const [numberFav,setNumberFav] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await axios.get("http://localhost:5001/");
                setCards(res.data.websites);
                setNumberFav(res.data.count);
            } catch(error){
                console.log("Lỗi xảy ra!", error);
            }
        };
        fetchData();
        }, [])
    return(
        <div className="w-full">
            <div className="bg-gray-100/30 py-4">
                <div className="bg-white px-8 w-fit mx-auto rounded-sm md:rounded-md border-b md:border-l border-gray-300 mb-4 pt-6 pb-4">
                    <div className="text-center text-secondary-color font-semibold text-lg md:text-2xl lg:text-3xl">
                        20/11 Website Design Showcase
                    </div>
                    <div className="text-center text-secondary-color font-light text-xl">
                        subtitle
                    </div>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:w-11/12 gap-x-4 gap-y-8 mx-auto transition border-t border-accent-light bg-white py-8 px-4 lg:rounded-lg lg:shadow-sm lg:shadow-accent-light">
                    {cards.map((card,idx) => (
                        <div key={card._id} className="mx-auto max-w-[95%] flex flex-col group">
                            <div className="relative rounded-2xl">
                                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 rounded-2xl border-accent-light transition-all duration-200 group-hover:w-full"></span>
                                <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 rounded-2xl border-accent-light transition-all duration-200 group-hover:h-full"></span>
                                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 rounded-2xl border-accent-light transition-all duration-200 group-hover:w-full"></span>
                                <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 rounded-2xl border-accent-light transition-all duration-200 group-hover:h-full"></span>
                                <a href={card.linkRef} target="_blank"><img src={card.imageWebsite} alt="pic" className="w-screen h-screen md:max-h-[300px] rounded-xl"/></a>
                            </div>
                            <div className="flex justify-between h-fit">
                                <p className="text-secondary-color font-semibold text-3xl lg:text-sm self-center">{card.nameAuthor}</p>
                                <Favorite favNum={numberFav[idx]} favStatus={card.favoritedByUsers.includes(sId)} card={card} sId={sId}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}