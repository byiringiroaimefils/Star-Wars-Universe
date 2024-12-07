import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Starships() {   
    return (
        <div className="section-padding">
            <div className="section-title">
                <h2>Star Ships</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                <div className="section-title-line"></div>
            </div>

            <div className='content-container'>
                <Fade className='mb-16'>
                    <div className="each-slide-effect">
                        <div className='bg-cover bg-center' style={{ 'backgroundImage': `url('https://files.clearlydev.com/site-assets/2023/06/CR90-Corvette-Image-01.png')` }}>
                            <div className='span translate-y-36'>
                                <p className='text-xl font-extrabold'>CR90 corvette</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div className='bg-cover bg-center' style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900')` }}>
                            <div className='span translate-y-36'>
                                <p className='text-xl font-extrabold'>Star Destroyer</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div className='bg-cover bg-center' style={{ 'backgroundImage': `url('https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc1MTEzMzMzMTE5MzI5Mzc1/top-6-iconic-spaceships-in-star-wars.webp')` }}>
                            <div className='span translate-y-36'>
                                <p className='text-xl font-extrabold'>Sentinel-class landing craft</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <br /><br />

                <div className="grid-container">
                    <div className="card fade-in bg-gray-50/10">
                        <img 
                            src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc1MTEzMzMzMTE5MzI5Mzc1/top-6-iconic-spaceships-in-star-wars.webp" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="CR90 corvette"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">CR90 corvette</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">The CR90 corvette is a small, multi-purpose capital ship</p>
                        </div>
                    </div>

                    <div className="card fade-in fade-in-delay-1 bg-gray-50/10">
                        <img 
                            src="https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="Star Destroyer"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">Star Destroyer</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">Imperial-class Star Destroyer, symbol of Imperial might</p>
                        </div>
                    </div>

                    <div className="card fade-in fade-in-delay-2 bg-gray-50/10">
                        <img 
                            src="https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel4-1536x864.jpg" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="Sentinel-class landing craft"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">Sentinel-class landing craft</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">Imperial transport and deployment vessel</p>
                        </div>
                    </div>

                    <div className="card fade-in fade-in-delay-3 bg-gray-50/10">
                        <img 
                            src="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="Death Star"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">Death Star</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">The ultimate power in the universe</p>
                        </div>
                    </div>

                    <div className="card fade-in bg-gray-50/10">
                        <img 
                            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Star-Wars-Impractical-Reliable-Ships-Millennium-Falcon.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="Millennium Falcon"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">Millennium Falcon</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">The fastest hunk of junk in the galaxy</p>
                        </div>
                    </div>

                    <div className="card fade-in fade-in-delay-1 bg-gray-50/10">
                        <img 
                            src="https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="Y-wing"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">Y-wing</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">Reliable bomber of the Rebel Alliance</p>
                        </div>
                    </div>

                    <div className="card fade-in fade-in-delay-2 bg-gray-50/10">
                        <img 
                            src="https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="X-wing"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">X-wing</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">The signature fighter of the Rebellion</p>
                        </div>
                    </div>

                    <div className="card fade-in fade-in-delay-3 bg-gray-50/10">
                        <img 
                            src="https://static.wikia.nocookie.net/starwars/images/1/1d/Vader_TIEAdvanced_SWB.png" 
                            className="w-full h-48 object-cover rounded-t-lg"
                            alt="TIE Advanced x1"
                        />
                        <div className="p-4 space-y-4">
                            <h2 className="text-xl font-bold text-center">TIE Advanced x1</h2>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-center text-gray-300">Darth Vader's personal starfighter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
