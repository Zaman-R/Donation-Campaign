import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const DonationInfo = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const donation = data.find(item => item.id === parseInt(id));

    const handleCardClick = () => {

        const storedCardIds = JSON.parse(localStorage.getItem("selectedCardIds")) || [];
        
        if (!storedCardIds.includes(id)) {
          storedCardIds.push(id);
        }
    
        localStorage.setItem("selectedCardIds", JSON.stringify(storedCardIds));
      };

    const notify = () => {
     toast.success("Donation successful!");
    };

   console.log(id);
    return (
        <div>
        <div className="flex place-content-center">
            <div className="relative m-10 w-full">
                <img className="w-full h-full" src={donation.picture_rec}/>
                <div className="absolute bottom-0 bg-black w-full p-7 text-2xl text-white bg-opacity-50">
                    <button className="lg:p-4 rounded-lg " style={{backgroundColor : data[id-1].text_and_button_bg_color}}  onClick={() => { notify(); handleCardClick(); }}>Donate ${donation.price}</button>
                    <Toaster />
                </div>
            </div>
        </div>
        <div className="m-10 w-5/6 mx-10"><h2 className="text-3xl font-bold my-4">{donation.title}</h2>
        <p className="">{donation.description}</p></div>
        
    </div>
    );
};

export default DonationInfo;
