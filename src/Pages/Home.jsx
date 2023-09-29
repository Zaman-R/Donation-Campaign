import Banner from "../components/Banner";
import CardList from "../components/CardList";
import { useState,useEffect } from 'react';


const Home = () => {
    const [searchCategory, setSearchQuery] = useState('');

    const [x, setx] = useState([]);

    useEffect(() => {
        fetch("data.json")
          .then((response) => response.json())
          .then((data) => {
            setx(data);
          });
      }, []);
    
    const handleSearch = (query) => {
        setSearchQuery(query);
    };


    return (
        <div>
            <Banner onSearch={handleSearch} ></Banner>
            <CardList x={x} searchCategory={searchCategory}></CardList>
        </div>
    );
};

export default Home;