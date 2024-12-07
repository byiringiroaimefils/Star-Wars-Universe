import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Films() {
   const FilmsImages={
    "A New Hope":"https://miro.medium.com/v2/resize:fit:720/format:webp/1*DAVuVcmu5WzMoIAAt-WVeg.png",
    "The Empire Strikes Back": "https://ichef.bbci.co.uk/images/ic/800xn/p08bxbk0.jpg.webp",
    "Return of the Jedi": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1bmyt3Y-YxyQaqFERHrbR2cbmkUUyqBQlJ0gkEQcG3MaLOqDd",
    "The Phantom Menace": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnli61uq0mdvdFcDcJGE6VYsl0bBN91XvFX2ETJ5hmWWpN66N",
    "Attack of the Clones": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFaZwT0BV0T_5fQMPrmzrya0LfLH4EYg-7Q_sPFmw_b59qpxLW",
    "Revenge of the Sith": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjGytQRxYWICHfSQCNDoivZcFUvAoUFNCM4d_SMeSUOvS_-o8j"
   }
    const [films, setFilms] = useState([])


    useEffect(() => {
        fetchFilms()
    }, [])

    const fetchFilms = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/films/')
            setFilms(response.data.results)
            console.log(response.data.results); // Check the contents of the films array
        } catch (error) {

        }

    }


    return (
        <>
            <div>
                <div className="">
                    <div className="flex flex-col justify-center items-center m-5 text-center ml-10 fade-in">
                        <h2 className="text-3xl font-bold">Movie.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                        <div className="w-52 h-1 bg-white mt-5 rounded-lg"></div>
                    </div>
                    <div className='Slideshow'>
                        <Fade>
                            <div className="each-slide-effect ">
                                <div style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/bell-zettifar-main_0eb1bcd0.jpeg?region=0%2C0%2C1920%2C1080')` }}>
                                    <div className='span'>
                                        <p className='text-xl font-extrabold'>Sabine Wren</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=420%2C60%2C1500%2C843')` }}>
                                    <div className='span'>
                                        <p className='text-xl font-extrabold'>Ahsoka Tano</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/star-wars-movies-and-series-guide-article-feature_a12ab7bb.jpeg?region=0,0,1600,900&width=960')` }}>
                                    <div className='span'>
                                        <p className='text-xl font-extrabold'>Bell Zettifar</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="Container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 ml-9 mt-10 mx-auto p-15">  
               {films.map((film) => (  
                  <div key={film.episode_id} className="card fade-in bg-gray-50/10 w-[300px] h-[400px] rounded-lg shadow-md">  
                     <img src={FilmsImages[film.title]} alt={film.title} className="w-full h-[250px] object-cover rounded-t-lg" />  
                     <div className="p-2">  
                        <h3 className="font-extrabold text-xl text-center">{film.title}</h3> 
                       <h3 className="font-extrabold text-xl text-center">DIRECTOR :{film.director}</h3> 
                       <h3 className="font-extrabold text-xl text-center">PRODUCER :{film.producer}</h3> 
                     </div>  
                  </div>  
               ))}  
            </div>  

                </div>
            </div>
        </>
    );
}
