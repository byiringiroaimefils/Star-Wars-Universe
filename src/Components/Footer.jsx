import { FaInstagram, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";  

export default function Footer() {  
    return (  
        <footer className="w-full bg-black text-white py-6 flex justify-center items-center translate-x-5">  
            <div className="container flex flex-col items-center justify-center gap-4 translate-x-0">  
                <p className="text-base font-medium">More From Star Wars Universe:</p>  
                <div className="flex items-center gap-6">  
                    <a href="https://www.instagram.com" >  
                        <FaInstagram />  
                    </a>  
                    <a href="https://www.tiktok.com" >  
                        <FaTiktok />  
                    </a>  
                    <a href="https://www.youtube.com" >  
                        <FaYoutube />  
                    </a>  
                    <a href="https://www.twitter.com" >  
                        <FaXTwitter />  
                    </a>  
                </div>  

                <p className="text-xs text-gray-400 mt-4">  
                    TM &amp; © Lucasfilm Ltd. All Rights Reserved  
                </p>  
            </div>  
        </footer>  
    );  
}