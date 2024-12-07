import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Films() {
    const FilmsImages = {
        "A New Hope": "https://miro.medium.com/v2/resize:fit:720/format:webp/1*DAVuVcmu5WzMoIAAt-WVeg.png",
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
        <div className="section-padding">
            <div className="section-title">
                <h2>Movies</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                <div className="section-title-line"></div>
            </div>

            <div className='content-container'>
                <Fade className='mb-16'>
                    <div className="each-slide-effect ">
                        <div style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/bell-zettifar-main_0eb1bcd0.jpeg?region=0%2C0%2C1920%2C1080')` }}>
                            <div className='span  translate-y-36'>
                                <p className='text-xl font-extrabold'>Sabine Wren</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/ahsoka-main_88c206d7.jpeg?region=420%2C60%2C1500%2C843')` }}>
                            <div className='span translate-y-36 '>
                                <p className='text-xl font-extrabold'>Ahsoka Tano</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                            </div>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url('https://lumiere-a.akamaihd.net/v1/images/star-wars-movies-and-series-guide-article-feature_a12ab7bb.jpeg?region=0,0,1600,900&width=960')` }}>
                            <div className='span translate-y-36'>
                                <p className='text-xl font-extrabold'>Bell Zettifar</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque!</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <br /><br />
                <div className="grid-container">
                    {films.map((film) => (
                        <div key={film.episode_id}>
                            <div className="card p-4  bg-gray-50/10">
                                <img
                                    src={FilmsImages[film.title]}
                                    alt={film.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-center">{film.title}</h3>
                                    <div className="w-full h-px bg-white/20"></div>
                                    <p className="text-center">
                                        <span className="font-bold">Director: </span>{film.director}
                                    </p>
                                    <p className="text-center">
                                        <span className="font-bold">Producer: </span>{film.producer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
