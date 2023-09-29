import { useState } from 'react';


const Banner = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };


    const handleSearchClick = () => {
       onSearch(searchQuery);
    };


    return (
        <div
          className="hero h-[500px]"
          style={{
            backgroundImage: "url(https://i.ibb.co/nn8M50z/banner.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-90 bg-white"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1 className="mb-5 text-5xl font-bold text-black">
                I Grow By Helping People In Need
              </h1>
              <div className="join ">
                <input
                  className="input input-bordered join-item w-96 text-black"
                  placeholder="Search here..."
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <button  className="btn join-item rounded-r-md bg-[#ff444a] text-white font-bold w-28 border-none"
                 onClick={handleSearchClick}>Search</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Banner;