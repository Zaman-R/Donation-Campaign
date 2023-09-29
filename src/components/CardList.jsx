import Card from "./Card";
// import { useLoaderData } from "react-router-dom";

const CardList = ({ x, searchCategory }) => {


    const filteredCards = x.filter((val) =>
       val.category.toLowerCase().includes(searchCategory.toLowerCase())
    );


    return (
        <>
          <div className="grid lg:grid-cols-4 my-20">
          {
            filteredCards.map(val => <Card key={val.id} val={val} ></Card>)
          }
          </div>  
        </>
    );
};

export default CardList;