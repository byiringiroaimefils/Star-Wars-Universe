import { FaInstagram, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { GrCaretNext } from "react-icons/gr";


export default function NewFeatures() {
    return (
        <div>
            <div className="grid-background flex items-center justify-center h-screen p-10  translate-y-10">
                <div className="flex flex-col justify-center items-center w-full md:w-[70%] text-center">
                    <h1 className="font-bold font-sans text-5xl leading-tight fade-in fade-in-delay-1">Get answers. Find inspiration. Be more productive.</h1>
                    <p className="mt-4 fade-in fade-in-delay-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at libero consequuntur doloremque, <br />et excepturi! Lorem ipsum dolor sit amet.</p>
                    <div className="flex items-center gap-6 mt-10 fade-in fade-in-delay-3">
                        <FaInstagram />
                        <FaTiktok />
                        <FaYoutube />
                        <FaXTwitter />
                    </div>
                    <div className="md:flex gap-5 mt-5 fade-in fade-in-delay-4 ">
                        <div>
                            <button className="bg-white text-black font-sans font-extrabold w-48 rounded-full p-3 mt-6 cursor-pointer border hover:bg-black hover:text-white flex    "> <span className="mr-1"> More information</span>  <GrCaretNext className="translate-y-1 " /> </button>
                        </div>
                        <div>
                            <button className="border-slate-300 border-2  font-sans  font-extrabold w-48 rounded-full p-3 mt-6 cursor-pointer  hover:border-none hover:bg-white  hover:text-black transition-all ">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Movies">
                <div className="flex flex-col justify-center items-center m-5 text-center ml-10 fade-in">
                    <h2 className="text-3xl font-bold">Movie.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                    <div className="w-52 h-1 bg-white mt-5 rounded-lg"></div>
                </div>
                <div className="Container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-5 ml-9 mt-10 mx-auto p-12 translate-x-2">
                    <div className="card fade-in  bg-gray-50/10">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/bell-zettifar-main_0eb1bcd0.jpeg?region=0%2C0%2C1920%2C1080" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Bell Zettifar</h2>
                        </div>
                    </div>
                    <div className="card fade-in fade-in-delay-1  bg-gray-50/10 ">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=420%2C60%2C1500%2C843" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Ahsoka Tano</h2>
                        </div>
                    </div>
                    <div className="card fade-in fade-in-delay-2   bg-gray-50/10 ">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/sabine-wren-main_be6cc30d.jpeg?region=1%2C0%2C1919%2C1080" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Sabine Wren</h2>
                        </div>
                    </div>
                    <div className="card fade-in fade-in-delay-3   bg-gray-50/10 ">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-official-trailer-stills-02_3fa41ad2.jpeg?region=0%2C0%2C1623%2C913" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Hera Syndulla</h2>
                        </div>
                    </div>
                    <div className="card  bg-gray-50/10 w-fit h-fit pb-5 rounded-lg border-b-4 ">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/star-wars-movies-and-series-guide-article-feature_a12ab7bb.jpeg?region=0,0,1600,900&width=960" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Bell Zettifar</h2>
                        </div>
                    </div>
                    <div className="card  bg-gray-50/10 w-fit h-fit pb-5 rounded-lg border-b-4 ">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/lsw-holiday-special-sw2-hero-mobile_1f47761f.jpeg?region=0,0,1280,720&width=960" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Ahsoka Tano</h2>
                        </div>
                    </div>
                    <div className="card  bg-gray-50/10 w-fit h-fit pb-5  rounded-lg border-b-4">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/skeleton-crew-in-theaters_article-feature_e6156ab8.jpeg?region=0,0,1600,900&width=960" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Sabine Wren</h2>
                        </div>
                    </div>
                    <div className="card  bg-gray-50/10 w-fit h-fit pb-5  rounded-lg border-b-4">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/skeleton-crew-premiere-date_article-feature_54b0c76d.jpeg?region=0,0,1600,900&width=960" className="w-80" /><br />
                        <div className="p-2">
                            <h2 className="font-extrabold text-xl text-center">Hera Syndulla</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Characters">
                <div className="flex flex-col justify-center items-center mb-20 text-center mt-2 ml-10 fade-in">
                    <h2 className="text-3xl font-bold">Star Wars Characters</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                    <div className="w-52 h-1 bg-white mt-5 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}
