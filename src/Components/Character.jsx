import { useState, useEffect } from "react";
import axios from "axios";
import photo from "./Photo";

function Character() {
    const [openDetails, setOpenDetails] = useState(null); // Use ID to track which user's details are open
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(3);

    useEffect(() => {
        const url = "https://swapi.dev/api/people/";
        let allUsers = [];
        async function fetchData(url) {
            try {
                setLoading(true);

                while (url) {
                    const response = await axios.get(url);
                    allUsers = [...allUsers, ...response.data.results];
                    setUsers(allUsers);
                    url = response.data.next; // Fixed URL concatenation issue here.
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        }

        fetchData(url);
    }, []);

    const handleFilter = (e) => {
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilter(filteredUsers);
    }

    const handleDetailsToggle = (userId) => {
        // Toggle the details for the user with the given ID
        setOpenDetails(openDetails === userId ? null : userId);
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center mb-20 text-center mt-2 ml-10">
                <h2 className="text-3xl font-bold">Star Wars Characters</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                <div className="w-52 h-1 bg-white mt-5 rounded-lg"></div>
            </div>

            <div className={`search flex justify-center bg-black/50`}>
                <input type="text" placeholder="Search ..." className="w-[78%] bg-black border-[2px] rounded-md p-[5px]" onChange={handleFilter} />
            </div>

            <div className="container md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 md:gap-10 mx-auto p-12 translate-x-2">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    (filter.length > 0 ? filter : users).slice(0, limit).map((user, index) => (
                        <div
                            key={index}
                            className="card bg-gray-50/10 transition duration-300 ease-in-out w-full h-fit p-5 rounded-lg shadow-lg"
                        >
                            <div className="flex gap-5 flex-col md:flex-row items-center">
                                <div>
                                    {/* Map the image to each user */}
                                    {(photo.length > 0 && users.length > 0) && (
                                        <img
                                            src={photo[index % photo.length].Image} // Using modulo to cycle through images
                                            alt={user.name}
                                            className="rounded-full h-40 w-40 border-4 border-white"
                                        />
                                    )}
                                </div>
                                <div className="descr text-center md:text-left">
                                    <h2 className="text-3xl font-semibold text-white">{user.name}</h2>
                                    <p className="text-gray-300">
                                        <span className="font-bold">Gender:</span> {user.gender}
                                    </p>
                                    <p className="text-gray-300">
                                        <span className="font-bold">Born:</span> {user.birth_year}
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="moreDetails">
                                {openDetails === user.name && ( // Show details only if the current user is selected
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="w-52 h-0.5 bg-white mt-5 rounded-lg "></div>
                                        <br />
                                        <ul>
                                            <li> <span className="font-bold">Height: </span> {user.height} cm</li>
                                            <li> <span className="font-bold">Mass: </span> {user.mass} kg</li>
                                            <li> <span className="font-bold">Skin Color: </span> {user.skin_color}</li>
                                        </ul>
                                    </div>
                                )}
                                <button
                                    className="bg-white w-full text-black font-extrabold rounded-3xl p-2 mt-6 cursor-pointer hover:bg-gray-200 transition duration-300"
                                    onClick={() => handleDetailsToggle(user.name)} // Toggle details for the clicked user
                                >
                                    {openDetails === user.name ? "Hide Details" : "More Details"}
                                </button>
                                <br />
                                <br />
                            </div>
                        </div>
                    ))
                )}
            </div>

            <br />
            <br />
            <div className="flex justify-center items-center mb-10 translate-x-5">
                <button onClick={() => setLimit(limit + 3)} className="w-32 text-white font-extrabold border-2 p-1 cursor-pointer flex justify-center">
                    Explore More
                </button>
            </div>
        </div>
    );
}

export default Character;
