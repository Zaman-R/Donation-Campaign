import { useEffect, useState } from "react";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [cardLength, setCardLength] = useState(4);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);

        const storedSelectedCardIds = JSON.parse(localStorage.getItem("selectedCardIds")) || [];
        setSelectedCardIds(storedSelectedCardIds);
      });
  }, []);

  const donationsToShow = donations.filter((item) => selectedCardIds.includes(item.id.toString()));


  return (
    <>
    <div className="grid lg:grid-cols-2 m-10">
      {donationsToShow.length > 0 ? (
        donationsToShow.slice(0,cardLength).map((donation) => (
          <div key={donation.id} >
           <div className="m-5">
            <div className="card card-side bg-base-100 shadow-xl" style={{ backgroundColor: donation.card_bg_color }}>
              <figure><img className="h-full" src={donation.picture_rec} /></figure>
              <div className="card-body">
                <p className="w-fit p-2 rounded-md font-semibold mb-2" style={{ backgroundColor: donation.category_bg_color, color: donation.text_and_button_bg_color }}>{donation.category}</p>
                <p className="card-title text-color-black text-2xl font-bold" >{donation.title}</p>
                <p className="font-bold" style={{ color: donation.text_and_button_bg_color }}>${donation.price}</p>
                <div className="card-actions justify-start">
                  <button className="btn text-white" style={{ backgroundColor: donation.text_and_button_bg_color }}>View Details</button>
                </div>
              </div>
            </div></div>
          </div>
        ))
      ) : (
        <p>No selected donations found.</p>
      )}
      
    </div>
    <div className={`text-center ${(cardLength === donationsToShow.length || donationsToShow.length <= 4) ? 'hidden' : ''}`}>
            <button className=" text-2xl p-4 px-6 rounded-md font-bold bg-[#009444] text-white "
                onClick={() => setCardLength(donationsToShow.length)}
            >See All</button>
            </div>
    
    </>
    
  );
};

export default Donation;
