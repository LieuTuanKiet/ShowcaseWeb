import { useEffect, useState } from "react"

export default function Showcase(){
    const [cards,setCards] = useState([])
    useEffect(() => {
        fetch("https://68ab1247909a5835049dacb3.mockapi.io/test")
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(error => console.log("Error:", error));
        }, [])
    return(
        <div>
            <div>
                <div>
                    20/11 Website Design Showcase
                </div>
                <div>
                    subtitle
                </div>
                <div className="grid grid-cols-4 w-11/12 gap-4 mx-auto h-fit">
                    {cards.map(card => (
                        <div key={card.id} className="mx-auto max-w-[95%] flex flex-col">
                            <img src={card.img} alt="pic" className="w-screen h-screen max-h-[300px]"/>
                            <div className="flex justify-between">
                                <p>{card.name}</p>
                                <div>{card.fav}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}