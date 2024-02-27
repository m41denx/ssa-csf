import Logo from "@/assets/logo.png"

import {Rubik} from "next/font/google";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] })


const links = {
    "О нас": "#",
    "Контакты": "#contacts",
    "Наши СНО": "#snos",
}

const NavBar = (props) => {
    return <div className="fixed top-0 w-full z-50 h-16 bg-slate-100 flex items-center justify-between drop-shadow-lg">
        <Link href="/" className="flex items-center gap-1 lg:gap-2 px-4 h-full hover:bg-slate-300 transition-all duration-300 cursor-pointer select-none">
            <img className="h-8 lg:h-12" src={Logo.src} />
            <span className="h-6 lg:h-8 w-[3px]  bg-blue-vsu"></span>
            <span className={`text-3xl lg:text-4xl text-blue-vsu font-light ${rubik.className}`}>СНО</span>
        </Link>
        <div className="flex h-full">
            {Object.keys(links).map((key, i) => <Link key={i} href={links[key]} className="hidden lg:flex items-center text-lg px-4 h-full hover:bg-slate-300 transition-all duration-300 cursor-pointer select-none">{key}</Link>)}
        </div>
    </div>
}

export default NavBar