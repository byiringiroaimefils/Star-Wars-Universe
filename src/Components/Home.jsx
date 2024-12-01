import { FaInstagram, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";


export default function NewFeatures() {
    return (
        <div>
            <div className="grid-background flex items-center justify-center h-screen p-10">
                <div className="flex flex-col justify-center items-center w-full md:w-[70%] text-center">
                    <h1 className="font-bold font-sans text-5xl leading-tight">Get answers. Find inspiration. Be more productive.</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at libero consequuntur doloremque, <br />et excepturi! Lorem ipsum dolor sit amet.</p>
                    <div className="flex items-center gap-6 mt-10">
                        <FaInstagram />
                        <FaTiktok />
                        <FaYoutube />
                        <FaXTwitter />
                    </div>
                    <div className="md:flex gap-5 mt-5 ">
                        <div>
                            <button className="bg-white text-black font-sans font-extrabold w-44 rounded-full p-2 mt-6 cursor-pointer border hover:bg-black hover:text-white ">More information</button>
                        </div>
                        <div>
                            <button className="border-slate-300 border-2  font-sans  font-extrabold w-44 rounded-full p-2 mt-6 cursor-pointer  hover:border-none hover:bg-white ">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
