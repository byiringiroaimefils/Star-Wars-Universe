import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from 'hamburger-react'

export default function Nav() {


    const [OpenLink, setOpenLink] = useState(false)
    const [OpenSearch, setOpenSearch] = useState(false)

    return (
        <>
            <header className="flex justify-around shadow-md  bg-black p-5  w-full">
                <section>
                    <h2 className="md:text-lg font-bold">Star Wars.</h2>
                </section>
                <nav className="flex flex-wrap justify-between">
                    <ul className="md:flex gap-5 hidden">
                        <li><Link to="/" className=" text-slate-400/70 hover:text-white">Home</Link></li>
                        <li><Link to="/film" className=" text-slate-400/70 hover:text-white">Film</Link></li>
                        <li><Link to="/character" className=" text-slate-400/70 hover:text-white">Character</Link></li>
                        <li><Link className=" text-slate-400/70 hover:text-white">Starship.</Link></li>

                    </ul>
                    <section className="ml-14 flex gap-5  translate-x-10" >
                        <div className="bg-white w-0.5 h-6 hidden md:flex"></div>
                        {/* <FaMagnifyingGlass className="translate-y-1" onClick={() => { setOpenSearch(!OpenSearch) }} /> */}
                        <div className='translate-y-[-24%] md:hidden ' onClick={() => { setOpenLink(!OpenLink) }} >
                            <Hamburger toggled={OpenLink} toggle={setOpenLink} size={25} />
                        </div>
                    </section>
                </nav>
            </header>
            <div className={`Mobile bg-black w-64 h-screen fixed right-0 top-[12%] ${OpenLink ? 'flex' : 'hidden'}`}>
                <nav>
                    <ul className="flex flex-col justify-center items-center gap-y-2">
                        <li><Link to="/" className=" text-white text-xl font-semibold">Home</Link></li>
                        <div className="w-52 h-0.5 bg-white mt-5 rounded-lg"></div>
                        <li><Link to="/film" className="text-white text-xl font-semibold">Film</Link></li>
                        <div className="w-52 h-0.5 bg-white mt-5 rounded-lg"></div>
                        <li><Link to="/character" className=" text-white text-xl font-semibold">Character</Link></li>
                        <div className="w-52 h-0.5 bg-white mt-5 rounded-lg "></div>
                        <li><Link to="#" className="  hover:text-white text-xl font-semibold">Contact.</Link></li>

                    </ul>
                </nav>
            </div>
        </>
    );
}
