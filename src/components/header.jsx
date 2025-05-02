import { CgClose } from "react-icons/cg"
import { BiMenu } from "react-icons/bi"
import { useState } from "react"

export default function Header() {

    const [isClick, setIsclick] = useState(true);

    function toogleClick() {
        setIsclick((prev) => !prev);
    }

    return (
        <header className="bg-gray-300 h-[100px] w-full fixed top-0 flex z-50 ">
            <div className="flex justify-between items-center w-1/2 relative">
                <BiMenu 
                    size={50} 
                    className="cursor-pointer" 
                    onClick={toogleClick}
                />
                <h1 className="text-3xl">Mon Logo</h1>
                <div className={`h-screen w-[200px] bg-gray-400 absolute top-0 left-0 pt-10 pl-5 transition-all duration-500 ${isClick ? 'left-[-100%] ' : 'left-0'} `}>
                    <CgClose 
                        size={40} 
                        className="cursor-pointer" 
                        onClick={toogleClick}
                    />
                    <div className="ml-5">
                        <ul className="text-[20px] mt-5 space-y-4">
                            <li className="cursor-pointer transition-all duration-200 hover:text-orange-500">Accueil</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-orange-500">Article</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-orange-500">Blog</li>
                            <li className="cursor-pointer transition-all duration-200 hover:text-orange-500">Connexion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}