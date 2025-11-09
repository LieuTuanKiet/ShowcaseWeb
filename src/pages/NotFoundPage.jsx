import { Link } from "react-router"
export default function NotFoundPage(){
    return(
        <div className="w-screen">
            <div className="container w-[90%] mx-auto flex flex-col justify-center items-center font-semibold">
                <div className="text-4xl text-accent-light">404</div>
                <div className="text-3xl">Page Not Found</div>
                <div className="text-2xl">Sorry, we couldn't find the page you're looking for.</div>
                <Link to="/" className="py-2 px-4 bg-accent-light/90 text-white! hover:bg-accent-light/80! active:bg-accent-light mt-4 rounded-sm cursor-pointer">Go back home</Link>
            </div>
        </div>
    )
}