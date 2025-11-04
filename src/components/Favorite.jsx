import { useState } from "react"

export default function Favortie({favNum = 0, favStatus=false}){
    const [isFav,setIsFav] = useState(favStatus);
    const [favNumbers,setFavNumbers] = useState(favNum);
    const setFav = () => {
        if(isFav){
            setFavNumbers(favNumbers-1);
        }
        else{
            setFavNumbers(favNumbers+1);
        }
        setIsFav(!isFav);
    }
    return(
        <div className="text-secondary-color flex justify-center items-center">{favNumbers} 
            {isFav?<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setFav()} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart w-[2vw] h-[3vh] cursor-pointer fill-accent-dark stroke-accent-dark"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setFav()} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart w-[2vw] h-[3vh] cursor-pointer hover:fill-accent-dark hover:stroke-accent-dark"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
            }
        </div>
    )
}