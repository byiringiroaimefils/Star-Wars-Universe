import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from 'hamburger-react'

export default function Nav() {
    const [OpenLink, setOpenLink] = useState(false)

    return (
        <>
            <header className="flex justify-around shadow-md bg-black p-5 w-full fade-in fade-in-delay-2">
                <section>
                    <h2 className="md:text-lg font-bold">Star Wars.</h2>
                </section>
                <nav className="flex flex-wrap justify-between">
                    <ul className="md:flex gap-5 hidden">
                        <li><Link to="/" className="text-slate-400/70 hover:text-white">Home</Link></li>
                        <li><Link to="/film" className="text-slate-400/70 hover:text-white">Movies</Link></li>
                        <li><Link to="/character" className="text-slate-400/70 hover:text-white">Characters</Link></li>
                        <li><Link to="/starship" className="text-slate-400/70 hover:text-white">Starship.</Link></li>
                    </ul>
                    <div className="bg-white w-0.5 h-6 hidden md:flex translate-x-5"></div>
                    <section className="ml-14 flex gap-5 translate-x-10">
                        <div className='translate-y-[-24%] md:hidden' onClick={() => setOpenLink(!OpenLink)}>
                            <Hamburger toggled={OpenLink} toggle={setOpenLink} size={25} />
                        </div>
                    </section>
                </nav>
            </header>
            <div className={`Mobile bg-gray-50/10 w-full h-52  mb-10 flex flex-col md:hidden fade-in fade-in-delay-2  ${OpenLink ? 'flex ' : 'hidden'}`}>
                <nav>
                    <ul className="flex flex-col gap-4 translate-x-16  ">
                        <li><Link to="/" className="text-white text-xl font-semibold">Home</Link></li>
                        <li><Link to="/film" className="text-white text-xl font-semibold">Movie</Link></li>
                        <li><Link to="/character" className="text-white text-xl font-semibold">Characters</Link></li>
                        <li><Link to="/starship" className="hover:text-white text-xl font-semibold">Contact.</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
