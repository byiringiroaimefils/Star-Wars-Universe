import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export default function starships() {
    return (
        <>
            <div>
                <div className="">
                    <div className="flex flex-col justify-center items-center m-5 text-center ml-10 fade-in">
                        <h2 className="text-3xl font-bold">Star Ships</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                        <div className="w-52 h-1 bg-white mt-5 rounded-lg"></div>
                    </div>
                    <div className='Slideshow'>
                        <Fade>
                            <div className="each-slide-effect ">
                                <div style={{ 'backgroundImage': `url('https://files.clearlydev.com/site-assets/2023/06/CR90-Corvette-Image-01.png')` }}>
                                    <div className='span'>
                                        <p className='text-xl font-extrabold'>CR90 corvette</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900')` }}>
                                    <div className='span'>
                                        <p className='text-xl font-extrabold'>Star Destroyer</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ 'backgroundImage': `url('https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel4-1536x864.jpg')` }}>
                                    <div className='span'>
                                        <p className='text-xl font-extrabold'>Sentinel-class landing craf</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="Container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-5 ml-9 mt-10 mx-auto p-12 translate-x-2">
                        <div className="card fade-in  bg-gray-50/10">
                            <img src="https://files.clearlydev.com/site-assets/2023/06/CR90-Corvette-Image-01.png" className="w-80" /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">CR90 corvette</h2>
                            </div>
                        </div>
                        <div className="card fade-in fade-in-delay-1  bg-gray-50/10 ">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900" className="w-80" /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">Star Destroyer</h2>
                            </div>
                        </div>
                        <div className="card fade-in fade-in-delay-2   bg-gray-50/10 ">
                            <img src="https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel4-1536x864.jpg" className="w-80" /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">Sentinel-class landing craf</h2>
                            </div>
                        </div>
                        <div className="card fade-in fade-in-delay-3   bg-gray-50/10 ">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900" className="w-80" /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">Death Star</h2>
                            </div>
                        </div>
                        <div className="card  bg-gray-50/10 w-fit h-fit pb-5 rounded-lg border-b-4 ">
                            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Star-Wars-Impractical-Reliable-Ships-Millennium-Falcon.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5" className="w-80" /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">Millennium Falcon</h2>
                            </div>
                        </div>
                        <div className="card  bg-gray-50/10 w-fit h-fit pb-5 rounded-lg border-b-4 ">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864" className="w-80" /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">Y-wing</h2>
                            </div>
                        </div>
                        <div className="card  bg-gray-50/10 w-fit h-fit pb-5  rounded-lg border-b-4">
                            <img src="https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878" className="w-80 " /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">X-wing</h2>
                            </div>
                        </div>
                        <div className="card  bg-gray-50/10 w-fit h-fit pb-5  rounded-lg border-b-4">
                            <img src="https://static.wikia.nocookie.net/starwars/images/1/1d/Vader_TIEAdvanced_SWB.png/revision/latest?cb=20160915042032" className="w-80" /><br />
                            <div className="p-2">
                                <h2 className="font-extrabold text-xl text-center">TIE Advanced x1</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
