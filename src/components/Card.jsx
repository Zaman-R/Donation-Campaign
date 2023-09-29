import { Link } from "react-router-dom";

const Card = ({val}) => {
    const {id,picture_rec, category, title, card_bg_color, category_bg_color, text_and_button_bg_color,price} = val





    return (
        <div className="mx-5 mb-12">
        <Link to={`/donationinfo/${id}?amount=${price}`} >
        <div className={`card w-full  h-full`} style={{backgroundColor : card_bg_color}}>
                <>
                    <img src={picture_rec} className="w-full"/>
                </>
                <div className="m-5">
                <p className="w-fit p-2 rounded-md font-semibold mb-2" style={{backgroundColor : category_bg_color, color: text_and_button_bg_color}}>{category}</p>
                    <p className="card-title" style={{color : text_and_button_bg_color}}>{title}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;



