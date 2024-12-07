import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import photo from "./Photo";

function Character() {
    const [openDetails, setOpenDetails] = useState(null);
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    // Initial data fetch
    useEffect(() => {
        fetchData();
    }, []);

    // Fetch data function
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
            const newUsers = response.data.results;

            setUsers(prevUsers => [...prevUsers, ...newUsers]);
            setPage(prevPage => prevPage + 1);
            setHasMore(response.data.next !== null);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            setLoading(false);
        }
    };

    const handleFilter = (e) => {
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilter(filteredUsers);
    }

    const handleDetailsToggle = (userId) => {
        setOpenDetails(openDetails === userId ? null : userId);
    };

    return (
        <div className="section-padding">
            <div className="section-title">
                <h2>Star Wars Characters</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                <div className="section-title-line"></div>
            </div>

            <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm py-4">
                <div className="content-container">
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search characters..."
                            className="w-full bg-gray-50/10 border border-gray-700/50 rounded-full px-6 py-3"
                            onChange={handleFilter}
                        />
                        <FaMagnifyingGlass className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </div>
            <br /> <br />
            <InfiniteScroll
                dataLength={users.length}
                next={fetchData}
                hasMore={hasMore}
                loader={
                    <div className="text-center py-8">
                        Loading...
                    </div>
                }
                endMessage={
                    <div className="text-center py-8 text-gray-400">
                        You've seen all characters!
                    </div>
                }
            >
                <div className="content-container">
                    <div className="grid-container">
                        {(filter.length > 0 ? filter : users).map((user, index) => (
                            <div
                                key={index}
                                className={`card fade-in fade-in-delay-${index % 3 + 1} bg-gray-50/10 p-2`}
                            >
                                <div className="flex gap-5 flex-col md:flex-row items-center">
                                    <div>
                                        {(photo.length > 0 && users.length > 0) && (
                                            <img
                                                src={photo[index % photo.length].Image}
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
                                <div className="moreDetails fade-in fade-in-delay-2">
                                    {openDetails === user.name && (
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="w-52 h-0.5 bg-white mt-5 rounded-lg"></div>
                                            <br />
                                            <ul>
                                                <li><span className="font-bold">Height: </span> {user.height} cm</li>
                                                <li><span className="font-bold">Mass: </span> {user.mass} kg</li>
                                                <li><span className="font-bold">Skin Color: </span> {user.skin_color}</li>
                                            </ul>
                                        </div>
                                    )}
                                    <button
                                        className="bg-white w-full text-black font-extrabold rounded-3xl p-2 mt-6 cursor-pointer hover:bg-gray-200 transition duration-300"
                                        onClick={() => handleDetailsToggle(user.name)}
                                    >
                                        {openDetails === user.name ? "Hide Details" : "More Details"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default Character;
