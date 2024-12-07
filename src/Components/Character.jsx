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
        <div>

            {/* Heading */}
            <div className="flex flex-col justify-center items-center mb-20 text-center mt-2 ml-10 fade-in">
                <h2 className="text-3xl font-bold">Star Wars Characters</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, at.</p>
                <div className="w-52 h-1 bg-white mt-5 rounded-lg"></div>
            </div>

            {/* Input for search */}
            <div className="search flex justify-center bg-black/50 fade-in fade-in-delay-1 sticky top-0 z-10 py-4">
                <input
                    type="text"
                    placeholder="Search ..."
                    className="w-[78%] bg-black border-[2px] rounded-md p-[5px]"
                    onChange={handleFilter}
                />
                <FaMagnifyingGlass className="translate-x-[-45px] translate-y-2.5 " />
            </div>

            {/* Setting up infite scroll */}
            <InfiniteScroll
                dataLength={users.length}
                next={fetchData}
                hasMore={hasMore}
                loader={
                    <div className="text-center py-4 text-white">
                        <h4>Loading more characters...</h4>
                    </div>
                }
                endMessage={
                    <div className="text-center py-4">
                        <p>You have seen all characters!</p>
                    </div>
                }

            >
                <div className="container md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 md:gap-10 mx-auto p-12 translate-x-2">
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
            </InfiniteScroll>
        </div>
    );
}

export default Character;
