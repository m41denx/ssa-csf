import Logo from "@/assets/faculties/cslogo.svg"

import {Rubik} from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] })


const links = {
    "О нас": "/about",
    "Контакты": "/contacts",
}

const NavBarOld = (props) => {
    return <div className="sticky z-50 top-0 h-16 bg-red-cs flex items-center justify-between text-white">
        <Link href="/" className="flex items-center gap-1 lg:gap-2 px-4 h-full hover:bg-red-700 transition-all duration-300 cursor-pointer select-none">
            <img className="h-6 lg:h-8" src={Logo.src} />
            <span className="h-6 lg:h-8 w-[3px]  bg-slate-300"></span>
            <span className={`text-3xl lg:text-[30pt] text-slate-300 font-light ${rubik.className}`}>СНО</span>
        </Link>
        <div className="flex h-full">
            {Object.keys(links).map((key, i) => <Link key={i} href={links[key]} className="hidden lg:flex items-center text-lg px-4 h-full hover:bg-red-700 transition-all duration-300 cursor-pointer select-none">{key}</Link>)}
        </div>
    </div>
}

export default NavBar